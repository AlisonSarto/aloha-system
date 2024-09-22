<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('controle_fabricacao', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $sql = "SELECT * FROM controle_fabricacao ORDER BY dia DESC LIMIT 1";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar controle_fabricacao',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows === 0) {
      send([
        'status' => 200,
        'situacao' => 'Finalizada'
      ]);
    }

    $data = $res->fetch_assoc();

    /* 
    * inicio = Em andamento
    * pausa = Pausada
    * retorno = Em andamento
    * fim = Finalizada
    */

    $situacao;

    if ($data['situacao'] === 'inicio') {
      $situacao = 'Em andamento';
    } elseif ($data['situacao'] === 'pausa') {
      $situacao = 'Pausada';
    } elseif ($data['situacao'] === 'retorno') {
      $situacao = 'Em andamento';
    } elseif ($data['situacao'] === 'fim') {
      $situacao = 'Finalizada';
    }

    send([
      'status' => 200,
      'situacao' => $situacao
    ]);
    

	} else {
		send([
      'status' => 404,
      'message' => 'Método não aceito'
    ]);
	}

?>