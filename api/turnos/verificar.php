<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  acessApi('turno', 'verificar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $dia = $_GET['dia'] ?? date('Y-m-d H:i:s');
    $turno = verificarTurno(new DateTime($dia));

    send([
      'status' => 200,
      'dia' => $dia,
      'turno' => $turno
    ]);

	} else {
		send([
      'status' => 405,
      'message' => 'Método não compativel'
    ]);
	}

?>