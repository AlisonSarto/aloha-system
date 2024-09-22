<?php

  //? Cria um funcionário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('funcionario', 'adicionar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $funcionario_id = $_POST['funcionario'] ?? null;
    $usuario_id = $_POST['usuario'] ?? null;

    if ($funcionario_id && $usuario_id) {

      //* Previne o SQL Injection
      $funcionario_id = $conn->real_escape_string($funcionario_id);
      $usuario_id = $conn->real_escape_string($usuario_id);

      //? Promove o funcionário
      $sql = "UPDATE funcionarios SET gerente = 'true', usuario_id = $usuario_id WHERE id = '$funcionario_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao promover funcionário'
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Gerente criado com sucesso',
      ]);

    }else {
      send([
        'status' => 400,
        'message' => 'Dados inválidos'
      ]);
    }

  }else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>