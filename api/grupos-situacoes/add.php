<?php

  //? Cria um grupo de situações

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('grupos-situacoes', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;

    if ($nome) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);

      //? Verifica se já existe um grupo com esse nome
      $sql = "SELECT * FROM grupos_situacoes WHERE nome = '$nome'";
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

      //? Cria o grupo
      $sql = "INSERT INTO grupos_situacoes (nome) VALUES ('$nome')";
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