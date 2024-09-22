<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('modos', 'activate');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send([
      'status' => 404,
      'message' => 'Método não aceito'
    ]);
	}

  $id = $_POST['id'] ?? null;

  if (!$id) {
    send([
      'status' => 400,
      'message' => 'ID não informado'
    ]);
  }

  //? Verifica se o modo existe
  $sql = "SELECT * FROM modos WHERE id = $id";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao puxar os modos',
      'error' => $conn->error
    ]);
  }

  //? Desativa todos os modos
  $sql = "UPDATE modos SET ativo = false";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao desativar os modos',
      'error' => $conn->error
    ]);
  }

  //? Ativa o modo
  $sql = "UPDATE modos SET ativo = 'true' WHERE id = $id";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao ativar o modo',
      'error' => $conn->error
    ]);
  }

  send([
    'status' => 200,
    'message' => 'Modo ativado com sucesso'
  ]);

?>