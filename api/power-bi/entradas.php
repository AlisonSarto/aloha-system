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

  $sql = "SELECT * FROM pacotes";
  $res = $conn->query($sql);

  $pacotes = [];
  while ($db = $res->fetch_assoc()) {
    $pacotes[$db['id']] = $db['sabor'] . ' - ' . $db['marca'];
  }

  $sql = "SELECT * FROM entradas";
  $res = $conn->query($sql);
  
  $producao = [];
  while ($db = $res->fetch_assoc()) {
    $db['pacote_id'] = $pacotes[$db['pacote_id']];
    $producao[] = $db;
  }

  send([
    'status' => 200,
    'entradas' => $producao
  ]);

?>