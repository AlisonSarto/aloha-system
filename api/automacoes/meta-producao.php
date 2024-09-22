<?php

  //? Edita meta produção

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'adicionar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $ativo = $_POST['ativo'] ?? null;
    $pontuacao = $_POST['pontuacao'] ?? null;

    if (!$ativo || !$pontuacao) {
      send([
        'status' => 400,
        'message' => 'Dados insuficientes'
      ]);
    }

    $sql = "UPDATE automacoes SET ativo = '$ativo', pontuacao = '$pontuacao' WHERE id = 1";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao editar a meta de produção',
        'error' => $conn->error
      ]);
    }

    send([ 
      'status' => 200,
      'message' => 'Automação atualizada com sucesso'
    ]);

  }elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $sql = "SELECT * FROM automacoes WHERE id = 1";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar a meta de produção',
        'error' => $conn->error
      ]);
    }

    $data = $res->fetch_assoc();

    send([ 
      'status' => 200,
      'data' => $data
    ]);

  }

?>