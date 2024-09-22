<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('funcionarios', 'visualizar');

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

      //? Puxa um usuario específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM funcionarios WHERE id = $id";
    } else {
      
      //? Puxa todos os usuários
      $sql = "SELECT * FROM funcionarios WHERE gerente = 'true'";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar usuários',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows === 0) {
      send([
        'status' => 404,
        'message' => 'Funcionário(s) não encontrado(s)'
      ]);
    }

    $sqlTurnos = "SELECT * FROM turnos";
    $resTurnos = $conn->query($sqlTurnos);
    $turnos = [];
    while ($db = $resTurnos->fetch_assoc()) {
      $turnos[$db['id']] = $db['nome'];
    }

    $sqlRostos = "SELECT * FROM rostos";
    $resRostos = $conn->query($sqlRostos);
    $rostos = [];
    while ($db = $resRostos->fetch_assoc()) {
      $rostos[$db['id']] = $db['nome'];
    }

    while ($db = $res->fetch_assoc()) {
      $db['turno'] = $turnos[$db['turno_id']];
      $db['rosto'] = $rostos[$db['rosto_id']];
      if (isset($_GET['id'])) {
        $data = $db;
      } else {
        $data[] = $db;
      }
    }

    send([
      'status' => 200,
      'funcionarios' => $data
    ]);

	} else {
		send([
      'status' => 404,
      'message' => 'Método não suportado'
    ]);
	}

?>