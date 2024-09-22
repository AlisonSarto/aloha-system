<?php

  //? Edita um usuário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'editar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $cargo_id = $_POST['cargo'] ?? null;
    $nome = $_POST['nome'] ?? null;
    $email = $_POST['email'] ?? null;
    $senha = $_POST['senha'] ?? null;

    if ($id && $cargo_id && $nome && $email && $senha) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $cargo_id = $conn->real_escape_string($cargo_id);
      $nome = $conn->real_escape_string($nome);
      $email = $conn->real_escape_string($email);
      $senha = $conn->real_escape_string($senha);

      $email .= '@aloha.com';

      //? Verifica se existe o usuário
      $sql = "SELECT * FROM usuarios WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o usuarios',
          'error' => $conn->error
        ]);
      }

      $antigo_cargo_id = $res->fetch_assoc()['cargo_id'];

      //? Verifica se já existe um usuário com esse nome ou email
      $sql = "SELECT * FROM usuarios WHERE (nome = '$nome' OR email = '$email') AND id != '$id'";
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

      //? Verifica se pode mudar o cargo, sabendo que sempre tem que ter um administrador
      $sql = "SELECT * FROM usuarios WHERE cargo_id = 1";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o usuarios',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 1 && $antigo_cargo_id == 1 && $cargo_id != 1) {
        send([
          'status' => 403,
          'message' => 'Não pode mudar o cargo do único admin'
        ]);
      }

      //? Puxa o acess do cargo
      $sql = "SELECT * FROM cargos WHERE id = '$cargo_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o cargo',
          'error' => $conn->error
        ]);
      }

      $acess = $res->fetch_assoc()['acess'];

      //? Edita o usuário
      $sql = "UPDATE usuarios SET nome = '$nome', email = '$email', senha = '$senha', cargo_id = '$cargo_id', cargo = '$acess' WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar o usuário',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Cargo editado com sucesso'
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