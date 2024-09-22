<?php

  //? Cria uma tarefa

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('tarefas', 'adicionar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;
    $descricao = $_POST['descricao'] ?? null;
    $intervalo = $_POST['intervalo'] ?? null;
    $prazo = $_POST['prazo'] ?? null;
    $pontuacao = $_POST['pontuacao'] ?? null;

    if ($nome && $descricao && $intervalo && $prazo && $pontuacao) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);
      $descricao = $conn->real_escape_string($descricao);
      $intervalo = $conn->real_escape_string($intervalo);
      $prazo = $conn->real_escape_string($prazo);
      $pontuacao = $conn->real_escape_string($pontuacao);

      //? Verifica se já existe uma tarefa com esse nome
      $sql = "SELECT * FROM tarefas WHERE nome = '$nome'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar a tarefa',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe uma tarefa com esse nome'
        ]);
      }

      //? Cria a tarefa
      $sql = "INSERT INTO tarefas (nome, descricao, intervalo, prazo, pontuacao) VALUES ('$nome', '$descricao', '$intervalo', '$prazo', '$pontuacao')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar a tarefa',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Tarefa criada com sucesso',
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