<?php

  //? Cria um grupo de situações

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('grupos-situacoes', 'adicionar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $nome = $_POST['nome'] ?? null;

    if ($nome && $id) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $nome = $conn->real_escape_string($nome);

      //? Verifica se já existe um grupo com esse nome
      $sql = "SELECT * FROM grupos_situacoes WHERE nome = '$nome' AND id != '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os grupos',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um grupo com esse nome'
        ]);
      }

      //? Edita o grupo
      $sql = "UPDATE grupos_situacoes SET nome = '$nome' WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o grupo',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Grupo criado com sucesso',
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