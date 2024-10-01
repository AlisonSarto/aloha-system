<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  acessApi('dashboard', 'visualizar');

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
  }

  $sql = "SELECT * FROM entradas";
  $res = $conn->query($sql);
  
  $producao = [];
  while ($db = $res->fetch_assoc()) {
    $producao[] = $db;
  }

  send([
    'status' => 200,
    'data' => $producao
  ]);

?>