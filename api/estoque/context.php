<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('estoque', 'visualizar');
  include_once $_SERVER['DOCUMENT_ROOT'].'/server/funcs/estoque.php';

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') send(['status' => 405, 'message' => 'Método não aceitado']);
  $fabrica = estoqueFabricaAtual($conn);
  $fabricaId = (int) $fabrica['id'];
  $res = $conn->query("SELECT id, nome FROM marcas WHERE fabrica_id = $fabricaId ORDER BY nome");
  if (!$res) send(['status' => 500, 'message' => 'Não foi possível carregar as marcas desta fábrica']);

  $marcas = [];
  while ($marca = $res->fetch_assoc()) $marcas[] = $marca;
  send(['status' => 200, 'fabrica' => ['id' => $fabrica['id'], 'nome' => $fabrica['nome']], 'marcas' => $marcas]);

?>
