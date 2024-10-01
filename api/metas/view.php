<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('metas', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um meta específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM metas WHERE id = $id";
    } else {
      
      //? Puxa todos os metas
      $sql = "SELECT * FROM metas ORDER BY qtd_funcionarios DESC";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar as metas',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows > 0) {

      while ($db = $res->fetch_assoc()) {
        if (isset($_GET['id'])) {
          $data = $db;
        } else {
          $data[] = $db;
        }
      }

      send([
        'status' => 200,
        'metas' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'meta(s) não encontrado(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>