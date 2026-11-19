<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('estoque_relatorio', 'visualizar');
  include_once $_SERVER['DOCUMENT_ROOT'].'/server/funcs/estoque.php';

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') send(['status' => 405, 'message' => 'Método não aceitado']);

  $timezone = new DateTimeZone('Etc/GMT+3');
  $hoje = new DateTimeImmutable('today', $timezone);
  $deTexto = trim($_GET['de'] ?? $hoje->modify('-29 days')->format('Y-m-d'));
  $ateTexto = trim($_GET['ate'] ?? $hoje->format('Y-m-d'));
  $de = DateTimeImmutable::createFromFormat('!Y-m-d', $deTexto, $timezone);
  $erroDe = DateTimeImmutable::getLastErrors();
  $ate = DateTimeImmutable::createFromFormat('!Y-m-d', $ateTexto, $timezone);
  $erroAte = DateTimeImmutable::getLastErrors();
  if (!$de || !$ate || ($erroDe && ($erroDe['warning_count'] || $erroDe['error_count'])) || ($erroAte && ($erroAte['warning_count'] || $erroAte['error_count'])) || $de->format('Y-m-d') !== $deTexto || $ate->format('Y-m-d') !== $ateTexto) {
    send(['status' => 400, 'message' => 'Informe um período válido']);
  }
  if ($ate < $de || $de->diff($ate)->days > 365) {
    send(['status' => 400, 'message' => 'O período deve ter no máximo 366 dias e a data inicial não pode ser posterior à final']);
  }

  $inicioLocal = $de->format('Y-m-d H:i:s');
  $fimLocal = $ate->modify('+1 day')->format('Y-m-d H:i:s');
  $fabrica = estoqueFabricaAtual($conn);
  $stmt = $conn->prepare('SELECT e.id, e.usuario_id, e.operacao, e.produto_id, e.produto_nome, e.quantidade, e.foto_carrinho, e.registrado_em, u.nome AS usuario_nome FROM estoque_movimentos e INNER JOIN usuarios u ON u.id = e.usuario_id WHERE e.fabrica_id = ? AND e.registrado_em >= ? AND e.registrado_em < ? ORDER BY e.registrado_em DESC, e.id DESC');
  if (!$stmt) send(['status' => 500, 'message' => 'Não foi possível preparar o relatório de produção']);
  $fabricaId = (int) $fabrica['id'];
  $stmt->bind_param('iss', $fabricaId, $inicioLocal, $fimLocal);
  if (!$stmt->execute()) send(['status' => 500, 'message' => 'Não foi possível carregar o resumo de produção']);

  $dias = [];
  for ($dia = $de; $dia <= $ate; $dia = $dia->modify('+1 day')) {
    $chave = $dia->format('Y-m-d');
    $dias[$chave] = [
      'data' => $chave,
      'produzido_pacotes' => 0,
      'concentrado_usado_g' => 0,
      'bobina_usada_g' => 0
    ];
  }

  $movimentos = [];
  $producaoPorUsuario = [];
  $totais = ['produzido_pacotes' => 0, 'concentrado_usado_g' => 0, 'bobina_usada_g' => 0];
  $res = $stmt->get_result();
  while ($item = $res->fetch_assoc()) {
    $registradoLocal = DateTimeImmutable::createFromFormat('!Y-m-d H:i:s', $item['registrado_em'], $timezone);
    if (!$registradoLocal) continue;
    $chaveDia = $registradoLocal->format('Y-m-d');
    $quantidade = (float) $item['quantidade'];
    if (!isset($dias[$chaveDia])) continue;

    if ($item['operacao'] === 'entrada_carrinho') {
      $dias[$chaveDia]['produzido_pacotes'] += $quantidade;
      $totais['produzido_pacotes'] += $quantidade;

      $usuarioId = (int) $item['usuario_id'];
      if (!isset($producaoPorUsuario[$usuarioId])) {
        $producaoPorUsuario[$usuarioId] = [
          'usuario_id' => $usuarioId,
          'usuario_nome' => $item['usuario_nome'],
          'total_pacotes' => 0,
          'entradas' => []
        ];
      }
      $hora = $registradoLocal->format('H:i:s');
      [$horaDia, $minutoDia, $segundoDia] = array_map('intval', explode(':', $hora));
      $fotoUrl = $item['foto_carrinho'] ? '/api/estoque/foto?id=' . (int) $item['id'] : null;
      $producaoPorUsuario[$usuarioId]['total_pacotes'] += $quantidade;
      $producaoPorUsuario[$usuarioId]['entradas'][] = [
        'id' => (int) $item['id'],
        'produto_nome' => $item['produto_nome'],
        'quantidade' => $quantidade,
        'registrado_em' => $registradoLocal->format('d/m/Y H:i'),
        'hora' => $registradoLocal->format('H:i'),
        'minutos_dia' => $horaDia * 60 + $minutoDia + $segundoDia / 60,
        'foto_url' => $fotoUrl
      ];
    } elseif ($item['operacao'] === 'saida_concentrado') {
      $dias[$chaveDia]['concentrado_usado_g'] += $quantidade;
      $totais['concentrado_usado_g'] += $quantidade;
    } elseif ($item['operacao'] === 'saida_bobina') {
      $dias[$chaveDia]['bobina_usada_g'] += $quantidade;
      $totais['bobina_usada_g'] += $quantidade;
    }

    $item['quantidade'] = $quantidade;
    $item['registrado_em'] = $registradoLocal->format('d/m/Y H:i');
    $item['foto_url'] = $item['foto_carrinho'] ? '/api/estoque/foto?id=' . (int) $item['id'] : null;
    unset($item['foto_carrinho']);
    $movimentos[] = $item;
  }

  send([
    'status' => 200,
    'fabrica_nome' => $fabrica['nome'],
    'de' => $deTexto,
    'ate' => $ateTexto,
    'totais' => $totais,
    'dias' => array_values($dias),
    'movimentos' => $movimentos,
    'producao_por_usuario' => array_values($producaoPorUsuario)
  ]);

?>
