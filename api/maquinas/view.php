<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('maquinas', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um maquina específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM maquinas WHERE id = $id";
    } else {
      
      //? Puxa todos os maquinas
      $sql = "SELECT * FROM maquinas ORDER BY qtd_funcionarios";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar as maquinas',
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
        'maquinas' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'Maquina(s) não encontrado(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>