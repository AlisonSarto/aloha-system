<?php

  //? Edita um usuário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('usuarios', 'editar');

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $cargo_id = $_POST['cargo'] ?? null;
    $nome = $_POST['nome'] ?? null;
    $email = $_POST['email'] ?? null;
    $senha = $_POST['senha'] ?? null;
    $fabricaIds = $_POST['fabrica_ids'] ?? [];

    if (!is_array($fabricaIds)) $fabricaIds = [];
    $fabricaIds = array_values(array_unique(array_map('intval', $fabricaIds)));

    if ($id && $cargo_id && $nome && $email && $senha && count($fabricaIds) > 0) {

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

      $usuarioAtual = $res->fetch_assoc();
      if (!$usuarioAtual) send(['status' => 404, 'message' => 'Usuário não encontrado']);
      $antigo_cargo_id = $usuarioAtual['cargo_id'];

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

      //? Confirma que o cargo existe
      $sql = "SELECT * FROM cargos WHERE id = '$cargo_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o cargo',
          'error' => $conn->error
        ]);
      }

      if ($res->num_rows === 0) {
        send(['status' => 404, 'message' => 'Cargo não encontrado']);
      }

      foreach ($fabricaIds as $fabricaId) {
        $fabricaCheck = $conn->query("SELECT id FROM fabricas WHERE id = $fabricaId");
        if ($fabricaId < 1 || !$fabricaCheck || $fabricaCheck->num_rows === 0) {
          send(['status' => 400, 'message' => 'Selecione somente fábricas cadastradas']);
        }
      }

      //? Edita o usuário
      $conn->begin_transaction();
      $sql = "UPDATE usuarios SET nome = '$nome', email = '$email', senha = '$senha', cargo_id = '$cargo_id' WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        $conn->rollback();
        send([
          'status' => 500,
          'message' => 'Erro ao editar o usuário',
          'error' => $conn->error
        ]);
      }

      if (!$conn->query("DELETE FROM fabrica_usuarios WHERE usuario_id = '$id'")) {
        $conn->rollback();
        send(['status' => 500, 'message' => 'Erro ao atualizar os vínculos de fábrica']);
      }
      $stmtFabrica = $conn->prepare('INSERT INTO fabrica_usuarios (fabrica_id, usuario_id) VALUES (?, ?)');
      foreach ($fabricaIds as $fabricaId) {
        $stmtFabrica->bind_param('ii', $fabricaId, $id);
        if (!$stmtFabrica->execute()) {
          $conn->rollback();
          send(['status' => 500, 'message' => 'Erro ao atualizar os vínculos de fábrica']);
        }
      }
      $conn->commit();

      send([
        'status' => 200,
        'message' => 'Usuário atualizado com sucesso'
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
