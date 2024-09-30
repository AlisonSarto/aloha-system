<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('pacotes', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um pacote específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM pacotes WHERE id = $id";
    } else {
      
      //? Puxa todos os pacotes
      $sql = "SELECT * FROM pacotes ORDER BY marca_id";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar pacotes',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'Pacote(s) não encontrado(s)'
      ]);
    }

    while ($db = $res->fetch_assoc()) {
      if (isset($_GET['id'])) {
        $data = $db;
      } else {
        $data[] = $db;
      }
    }

    send([
      'status' => 200,
      'pacotes' => $data
    ]);
	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>