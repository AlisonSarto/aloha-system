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
    
    $id = $_GET['id'] ?? null;
    $limit = $_GET['limit'] ?? 100;
    $inicio = $_GET['inicio'] ?? date('Y-m-1');
    $fim = $_GET['fim'] ?? date('Y-m-d');

    if ($id === null) {
      //? Puxa todos as entradas
      $sql = "SELECT * FROM entradas WHERE turno_dia BETWEEN '$inicio' AND '$fim' ORDER BY dia DESC LIMIT $limit";
    }else {
      //? Puxa as entradas de um pacote
      $sql = "SELECT * FROM entradas WHERE turno_dia BETWEEN '$inicio' AND '$fim' AND turno_id = '$id' ORDER BY dia DESC LIMIT $limit";
    }

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

    $pontos = [];
    while ($row = $res->fetch_assoc()) {
      $pontos[] = $row;
    }

    send([
      'status' => 200,
      'limit' => $limit,
      'message' => 'Entradas encontrados',
      'mov' => $pontos
    ]);

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>