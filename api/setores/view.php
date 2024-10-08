<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('setores', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um setor específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM setores WHERE id = $id";
    } else {
      
      //? Puxa todos os setor
      $sql = "SELECT * FROM setores ORDER BY nome";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar setor',
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
        'setores' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'Setor(es) não encontrado(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>