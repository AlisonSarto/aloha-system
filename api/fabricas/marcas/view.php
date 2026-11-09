<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'visualizar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send(['status' => 405, 'message' => 'Método não aceitado']);
  }

  $fabricaId = (int) ($_GET['fabrica_id'] ?? 0);
  if (!fabricaCarregar($conn, $fabricaId)) send(['status' => 404, 'message' => 'Fábrica não encontrada']);
  $res = $conn->query("SELECT * FROM marcas WHERE fabrica_id = $fabricaId ORDER BY nome");
  if (!$res) send(['status' => 500, 'message' => 'Erro ao consultar marcas']);
  $marcas = [];
  while ($db = $res->fetch_assoc()) $marcas[] = $db;
  send(['status' => 200, 'marcas' => $marcas]);

?>
