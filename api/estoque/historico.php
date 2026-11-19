<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('estoque_operacao', 'visualizar');
  include_once $_SERVER['DOCUMENT_ROOT'].'/server/funcs/estoque.php';

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') send(['status' => 405, 'message' => 'Método não aceitado']);
  $operacao = $_GET['operacao'] ?? '';
  if (!estoqueCategoria($operacao)) send(['status' => 400, 'message' => 'Operação inválida']);
  $fabrica = estoqueFabricaAtual($conn);
  $usuarioId = (int) $_SESSION['id'];
  $fusoLocal = new DateTimeZone('Etc/GMT+3');
  $inicioDiaLocal = (new DateTimeImmutable('now', $fusoLocal))->setTime(0, 0, 0);
  $inicioDiaLocalSql = $inicioDiaLocal->format('Y-m-d H:i:s');
  $fimDiaLocalSql = $inicioDiaLocal->modify('+1 day')->format('Y-m-d H:i:s');
  $stmt = $conn->prepare('SELECT e.id, e.produto_id, e.produto_nome, e.quantidade, e.foto_carrinho, e.estoque_anterior, e.estoque_atual, e.registrado_em, u.nome AS usuario_nome FROM estoque_movimentos e INNER JOIN usuarios u ON u.id = e.usuario_id WHERE e.fabrica_id = ? AND e.operacao = ? AND e.usuario_id = ? AND e.registrado_em >= ? AND e.registrado_em < ? ORDER BY e.registrado_em ASC, e.id ASC');
  $stmt->bind_param('isiss', $fabrica['id'], $operacao, $usuarioId, $inicioDiaLocalSql, $fimDiaLocalSql);
  if (!$stmt->execute()) send(['status' => 500, 'message' => 'Não foi possível carregar os lançamentos de hoje']);
  $res = $stmt->get_result();
  $movimentos = [];
  $acumulados = [];
  $totaisProdutos = [];
  $totalHoje = 0;
  while ($movimento = $res->fetch_assoc()) {
    $registradoEm = DateTimeImmutable::createFromFormat('!Y-m-d H:i:s', $movimento['registrado_em'], $fusoLocal);
    if ($registradoEm) $movimento['registrado_em'] = $registradoEm->format('d/m/y H:i:s');
    $movimento['foto_url'] = $movimento['foto_carrinho'] ? '/api/estoque/foto?id=' . (int) $movimento['id'] : null;
    unset($movimento['foto_carrinho']);
    $produtoId = (string) $movimento['produto_id'];
    $quantidade = (float) $movimento['quantidade'];
    $acumulados[$produtoId] = ($acumulados[$produtoId] ?? 0) + $quantidade;
    $movimento['total_produto_hoje'] = $acumulados[$produtoId];
    $totalHoje += $quantidade;
    if (!isset($totaisProdutos[$produtoId])) {
      $totaisProdutos[$produtoId] = ['produto_nome' => $movimento['produto_nome'], 'quantidade' => 0];
    }
    $totaisProdutos[$produtoId]['quantidade'] += $quantidade;
    $movimentos[] = $movimento;
  }
  $movimentos = array_reverse($movimentos);
  $resposta = [
    'status' => 200,
    'movimentos' => $movimentos,
    'total_hoje' => $totalHoje,
    'totais_produtos' => array_values($totaisProdutos)
  ];
  send($resposta);

?>
