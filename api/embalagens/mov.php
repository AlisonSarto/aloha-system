<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('embalagens', 'mov');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $id = $_GET['id'] ?? null;
    $limit = $_GET['limit'] ?? 100;
    $produto_tipo = "embalagens";

    if ($id === null) {
      //? Puxa todos as movs
      $sql = "SELECT * FROM mov WHERE produto_tipo = '$produto_tipo' ORDER BY dia DESC LIMIT $limit";
    }else {
      //? Puxa as movs de um pacote
      $sql = "SELECT * FROM mov WHERE produto_tipo = '$produto_tipo' AND produto_id = '$id' ORDER BY dia DESC LIMIT $limit";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar as movimentações',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows === 0) {
      send([
        'status' => 404,
        'message' => 'Nenhuma movimentação encontrada'
      ]);
    }

    $pontos = [];
    while ($row = $res->fetch_assoc()) {
      $pontos[] = $row;
    }

    send([
      'status' => 200,
      'limit' => $limit,
      'message' => 'Movimentações encontrados',
      'mov' => $pontos
    ]);

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>