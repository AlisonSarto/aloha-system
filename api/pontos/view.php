<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('aloha-id', 'gerenciar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $rosto_id = $_GET['rosto_id'] ?? null;
    $inicio = $_GET['inicio'] ?? date('Y-m-01');
    $fim = $_GET['fim'] ?? date('Y-m-d');
    $limit = $_GET['limit'] ?? 100;

    //? Adiciona um dia ao fim para pegar o dia todo
    $fim = date('Y-m-d', strtotime($fim . ' +1 day'));

    if ($rosto_id === null) {
      //? Puxa todos os pontos
      $sql = "SELECT * FROM pontos WHERE dia BETWEEN '$inicio' AND '$fim' ORDER BY dia DESC LIMIT $limit";
    }else {
      //? Puxa os pontos de um rosto
      $sql = "SELECT * FROM pontos WHERE rosto_id = '$rosto_id' AND dia BETWEEN '$inicio' AND '$fim' ORDER BY dia DESC LIMIT $limit";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar pontos',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows === 0) {
      send([
        'status' => 404,
        'message' => 'Nenhum ponto encontrado'
      ]);
    }

    $pontos = [];
    while ($row = $res->fetch_assoc()) {
      $pontos[] = $row;
    }

    send([
      'status' => 200,
      'limit' => $limit,
      'message' => 'Pontos encontrados',
      'pontos' => $pontos
    ]);

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>