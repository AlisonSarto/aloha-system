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

    $rosto_id = $_POST['rosto'] ?? null;
    $turno_id = $_POST['turno'] ?? null;

    if ($rosto_id && $turno_id) {

      //* Previne o SQL Injection
      $rosto_id = $conn->real_escape_string($rosto_id);
      $turno_id = $conn->real_escape_string($turno_id);

      //? Verifica se já existe um funcionário
      $sql = "SELECT * FROM funcionarios WHERE rosto_id = '$rosto_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o funcionario',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Funcionário já cadastrado'
        ]);
      }

      //? Cria o funcionário
      $sql = "INSERT INTO funcionarios (rosto_id, turno_id) VALUES ('$rosto_id', $turno_id)";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o funcionário',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Funcionário criado com sucesso',
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