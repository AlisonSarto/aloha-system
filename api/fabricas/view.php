<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('fabricas', 'visualizar');
  fabricaExigirAdmin();

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $res = $conn->query("SELECT f.id, f.nome, f.loja_id, f.loja_nome FROM fabricas f ORDER BY f.nome");
    if ($res === false) {
      send(['status' => 500, 'message' => 'Erro ao consultar fábricas']);
    }
    $fabricas = [];
    while ($db = $res->fetch_assoc()) {
      $fabricas[] = $db;
    }
    send(['status' => 200, 'fabricas' => $fabricas]);
  }

  send(['status' => 405, 'message' => 'Método não aceitado']);

?>
