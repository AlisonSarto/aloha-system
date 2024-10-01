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

  exit;

  send([
    'status' => 200,
    'meta_hora' => $meta_hora,
    'meta_dia' => $meta_dia,
    'meta_falta' => $meta_falta,
    'producao_total' => $producao_total,
  ]);

?>