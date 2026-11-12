<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('estoque', 'adicionar');
  include_once $_SERVER['DOCUMENT_ROOT'].'/server/funcs/estoque.php';

  if ($_SERVER['REQUEST_METHOD'] !== 'POST') send(['status' => 405, 'message' => 'Método não aceitado']);
  $fabrica = estoqueFabricaAtual($conn);
  $fabricaId = (int) $fabrica['id'];
  $usuarioId = (int) $_SESSION['id'];
  $operacao = $_POST['operacao'] ?? '';
  $categoria = estoqueCategoria($operacao);
  $marcaId = (int) ($_POST['marca_id'] ?? 0);
  $produtoId = trim($_POST['produto_id'] ?? '');
  $quantidadeTexto = str_replace(',', '.', trim($_POST['quantidade'] ?? ''));
  if (!$categoria || $marcaId < 1 || $produtoId === '' || !is_numeric($quantidadeTexto) || (float) $quantidadeTexto <= 0) {
    send(['status' => 400, 'message' => 'Selecione a marca, o produto e informe uma quantidade maior que zero']);
  }

  $quantidade = (float) $quantidadeTexto;
  if (round($quantidade, 3) !== $quantidade) send(['status' => 400, 'message' => 'Informe até três casas decimais']);
  if ($operacao === 'entrada_carrinho' && floor($quantidade) !== $quantidade) {
    send(['status' => 400, 'message' => 'A quantidade de pacotes por carrinho deve ser um número inteiro']);
  }

  $marca = estoqueMarcaCarregar($conn, $marcaId, $fabricaId);
  if (!$marca) send(['status' => 404, 'message' => 'Marca não encontrada nesta fábrica']);
  $produtos = estoqueProdutosDaMarca($marca, $fabrica, $categoria);
  if (!$produtos['ok']) {
    $status = (int) ($produtos['code'] ?? 502);
    if ($status < 400 || $status > 599) $status = 502;
    send(['status' => $status, 'message' => $produtos['message'] ?? 'Não foi possível validar o produto no Gestão Click']);
  }

  $produto = null;
  foreach ($produtos['data'] as $item) {
    if ((string) ($item['id'] ?? '') === $produtoId) {
      $produto = $item;
      break;
    }
  }
  if (!$produto) send(['status' => 400, 'message' => 'O produto selecionado não pertence ao grupo desta marca']);

  $conn->begin_transaction();
  $lock = $conn->query("SELECT id FROM fabricas WHERE id = $fabricaId FOR UPDATE");
  if (!$lock || !$lock->num_rows) {
    $conn->rollback();
    send(['status' => 404, 'message' => 'Fábrica não encontrada']);
  }

  $consulta = fabricaChamarGestaoClick($fabrica['access_token'], $fabrica['secret_access_token'], 'produtos/' . rawurlencode($produtoId), [
    'loja_id' => $fabrica['loja_id'],
    'usuario_id' => 713076
  ]);
  if (!$consulta['ok']) {
    $conn->rollback();
    $status = (int) ($consulta['code'] ?? 502);
    if ($status < 400 || $status > 599) $status = 502;
    send(['status' => $status, 'message' => $consulta['message'] ?? 'Não foi possível consultar o saldo no Gestão Click']);
  }
  if (!isset($consulta['data']['estoque']) || !is_numeric($consulta['data']['estoque'])) {
    $conn->rollback();
    send(['status' => 502, 'message' => 'A Gestão Click não retornou o saldo atual do produto']);
  }

  $estoqueAnterior = (float) $consulta['data']['estoque'];
  $variacao = $operacao === 'entrada_carrinho' ? $quantidade : -$quantidade;
  $estoqueAtual = $estoqueAnterior + $variacao;
  $estoqueTexto = rtrim(rtrim(number_format($estoqueAtual, 3, '.', ''), '0'), '.');
  if ($estoqueTexto === '' || $estoqueTexto === '-0') $estoqueTexto = '0';

  $gravacao = fabricaEnviarGestaoClick($fabrica, 'produtos/' . rawurlencode($produtoId), 'PUT', [
    'loja_id' => $fabrica['loja_id'],
    'usuario_id' => 713076
  ], ['estoque' => $estoqueTexto]);
  if (!$gravacao['ok']) {
    $conn->rollback();
    $status = (int) ($gravacao['code'] ?? 502);
    if ($status < 400 || $status > 599) $status = 502;
    send(['status' => $status, 'message' => $gravacao['message'] ?? 'Não foi possível atualizar o estoque no Gestão Click']);
  }

  $stmt = $conn->prepare('INSERT INTO estoque_movimentos (fabrica_id, marca_id, operacao, produto_id, produto_nome, quantidade, estoque_anterior, estoque_atual, usuario_id, registrado_em) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, UTC_TIMESTAMP())');
  $produtoNome = $produto['nome'] ?? '';
  $stmt->bind_param('iisssdddi', $fabricaId, $marcaId, $operacao, $produtoId, $produtoNome, $quantidade, $estoqueAnterior, $estoqueAtual, $usuarioId);
  if (!$stmt->execute()) {
    $conn->rollback();
    send(['status' => 500, 'message' => 'O saldo foi enviado ao Gestão Click, mas não foi possível salvar o histórico local']);
  }
  $conn->commit();

  send([
    'status' => 200,
    'message' => $operacao === 'entrada_carrinho' ? 'Entrada do carrinho registrada no Gestão Click' : 'Saída registrada no Gestão Click',
    'produto_nome' => $produtoNome,
    'quantidade' => $quantidade,
    'estoque_anterior' => $estoqueAnterior,
    'estoque_atual' => $estoqueAtual
  ]);

?>
