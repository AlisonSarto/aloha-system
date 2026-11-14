<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('estoque', 'visualizar');
  include_once $_SERVER['DOCUMENT_ROOT'].'/server/funcs/estoque.php';

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') send(['status' => 405, 'message' => 'Método não aceitado']);
  $operacao = $_GET['operacao'] ?? '';
  $categoria = estoqueCategoria($operacao);
  if (!$categoria) send(['status' => 400, 'message' => 'Operação inválida']);

  $fabrica = estoqueFabricaAtual($conn);
  $marca = estoqueMarcaCarregar($conn, $_GET['marca_id'] ?? 0, $fabrica['id']);
  if (!$marca) send(['status' => 404, 'message' => 'Marca não encontrada nesta fábrica']);

  $res = estoqueProdutosDaMarca($marca, $fabrica, $categoria);
  if (!$res['ok']) {
    $status = (int) ($res['code'] ?? 502);
    if ($status < 400 || $status > 599) $status = 502;
    send(['status' => $status, 'message' => $res['message'] ?? 'Não foi possível consultar os produtos no Gestão Click']);
  }
  if (!isset($res['data']) || !is_array($res['data'])) send(['status' => 502, 'message' => 'O Gestão Click retornou uma lista de produtos fora do formato esperado']);

  send(['status' => 200, 'produtos' => array_values($res['data'])]);

?>
