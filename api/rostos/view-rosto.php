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
    
    if (empty($_GET['id'])) {
      send([
        'status' => 400,
        'message' => 'ID não informado'
      ]);
    }

    $id = $_GET['id'];

    $sql = "SELECT * FROM rostos WHERE id = $id";
    $res = $conn->query($sql);

    if ($res == false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar rostos',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'Rosto não encontrado'
      ]);
    }

    $db = $res->fetch_assoc();

    $imagem = $db['img'];

    header("Content-type: image/png");
    echo base64_decode($imagem);
    exit;

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>