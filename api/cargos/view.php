<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('cargos', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    if (isset($_GET['id'])) {

      //? Puxa um cargo específico
      $id = mysqli_real_escape_string($conn, $_GET['id']);
      $sql = "SELECT * FROM cargos WHERE id = $id";

    } else {

      //? Puxa todos os cargos
      $sql = "SELECT * FROM cargos";
      
    }

    $res = $conn->query($sql);

    if ($res == false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar cargo(s)',
        'error' => $conn->error
      ]);
    }
    
    if ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'Cargos(s) não encontrado(s)'
      ]);
    }

    $data = [];

    while ($db = $res->fetch_assoc()) {
      $db['acess'] = json_decode($db['acess']);
      if (isset($_GET['id'])) {
        $data = $db;
      } else {
        $data[] = $db;
      }
    }

    send([
      'status' => 200,
      'cargos' => $data
    ]);

	}else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>