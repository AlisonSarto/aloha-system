<?php

  //? Cria um usuário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('usuarios', 'adicionar');

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;
    $cargo_id = $_POST['cargo'] ?? null;
    $email = $_POST['email'] ?? null;
    $senha = $_POST['senha'] ?? null;
    $fabricaIds = $_POST['fabrica_ids'] ?? [];

    if (!is_array($fabricaIds)) $fabricaIds = [];
    $fabricaIds = array_values(array_unique(array_map('intval', $fabricaIds)));

    if ($nome && $cargo_id && $email && $senha && count($fabricaIds) > 0) {

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
      if (!$db) {
        send(['status' => 404, 'message' => 'Cargo não encontrado']);
      }

      foreach ($fabricaIds as $fabricaId) {
        $fabricaCheck = $conn->query("SELECT id FROM fabricas WHERE id = $fabricaId");
        if ($fabricaId < 1 || !$fabricaCheck || $fabricaCheck->num_rows === 0) {
          send(['status' => 400, 'message' => 'Selecione somente fábricas cadastradas']);
        }
      }

      //? Cria o usuário
      $conn->begin_transaction();
      $sql = "INSERT INTO usuarios (nome, email, senha, cargo_id) VALUES ('$nome', '$email', '$senha', $cargo_id)";
      $res = $conn->query($sql);

      if ($res === false) {
        $conn->rollback();
        send([
          'status' => 500,
          'message' => 'Erro ao criar o usuário',
          'error' => $conn->error
        ]);
      }

      $id = $conn->insert_id;
      $stmtFabrica = $conn->prepare('INSERT INTO fabrica_usuarios (fabrica_id, usuario_id) VALUES (?, ?)');
      foreach ($fabricaIds as $fabricaId) {
        $stmtFabrica->bind_param('ii', $fabricaId, $id);
        if (!$stmtFabrica->execute()) {
          $conn->rollback();
          send(['status' => 500, 'message' => 'Erro ao vincular o usuário às fábricas']);
        }
      }
      $conn->commit();

      send([
        'status' => 200,
        'message' => 'Usuário criado com sucesso',
        'usuario_id' => $id,
      ]);

    }else {
      send([
        'status' => 400,
        'message' => 'Preencha os dados do usuário e selecione ao menos uma fábrica'
      ]);
    }

  }else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>
