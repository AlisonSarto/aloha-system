<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('entradas', 'mov');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $dia = $_GET['dia'] ?? date('Y-m-d');

    $sql = "SELECT * FROM entradas WHERE turno_dia = '$dia'";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar as entradas',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows === 0) {
      send([
        'status' => 404,
        'message' => 'Nenhuma entrada encontrada'
      ]);
    }

    $entradas = [];
    while ($row = $res->fetch_assoc()) {
      $turno = $row['turno'];
      if (empty($entradas[$turno])) {
        $entradas[$turno] = 0;
      }
      $entradas[$turno] += $row['qtd'];
    }

    send([
      'status' => 200,
      'message' => 'Entradas encontrados',
      'entradas' => $entradas
    ]);

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>