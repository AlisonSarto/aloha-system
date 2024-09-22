<?php

  //? Cria um usuário

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

    $nome = $_POST['nome'] ?? null;
    $cargo_id = $_POST['cargo'] ?? null;
    $email = $_POST['email'] ?? null;
    $senha = $_POST['senha'] ?? null;

    if ($nome && $cargo_id && $email && $senha) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);
      $cargo_id = $conn->real_escape_string($cargo_id);
      $email = $conn->real_escape_string($email);
      $senha = $conn->real_escape_string($senha);
      
      if (strpos($email, '@aloha.com') === false) {
        $email = $email . '@aloha.com';
      }

      //? Verifica se já existe um usuário com esse nome ou email
      $sql = "SELECT * FROM usuarios WHERE nome = '$nome' OR email = '$email'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o usuarios',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um usuário com esse nome ou email'
        ]);
      }

      //? Puxa o cargo
      $sql = "SELECT * FROM cargos WHERE id = '$cargo_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o cargo',
          'error' => $conn->error
        ]);
      }

      $db = $res->fetch_assoc();
      $cargo = $db['acess'];

      //? Cria o usuário
      $sql = "INSERT INTO usuarios (nome, email, senha, cargo_id, cargo) VALUES ('$nome', '$email', '$senha', $cargo_id, '$cargo')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o usuário',
          'error' => $conn->error
        ]);
      }

      $id = $conn->insert_id;

      send([
        'status' => 200,
        'message' => 'Usuário criado com sucesso',
        'usuario_id' => $id,
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