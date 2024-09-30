<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  acessApi('turno', 'verificar');
  
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