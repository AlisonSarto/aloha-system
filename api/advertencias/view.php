<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa uma advertencia específicoa
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM situacoes WHERE tipo = '-' AND id = $id";
    } else {
      
      //? Puxa todos os usuários
      $sql = "SELECT * FROM situacoes WHERE tipo = '-' ORDER BY pontuacao DESC";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar usuários',
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
        'advertencias' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'Advertência(s) não encontrada(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Método não aceito'
    ]);
	}

?>