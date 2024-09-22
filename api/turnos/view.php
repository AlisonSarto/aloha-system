<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('turno', 'visualizar');

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

      //? Puxa um turno específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM turnos WHERE id = $id";
    } else {
      
      //? Puxa todos os turnos
      $sql = "SELECT * FROM turnos ORDER BY inicio";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar turnos',
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
        'turnos' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'Turno(s) não encontrado(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>