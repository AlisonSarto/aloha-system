<?php

  //? Cria um funcionário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('funcionario', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;
    $turno_id = $_POST['turno'] ?? null;

    if ($nome && $turno_id) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);
      $turno_id = $conn->real_escape_string($turno_id);

      //? Verifica se já existe um funcionário
      $sql = "SELECT * FROM funcionarios WHERE nome = '$nome'";
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
      $sql = "INSERT INTO funcionarios (nome, turno_id) VALUES ('$nome', $turno_id)";
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