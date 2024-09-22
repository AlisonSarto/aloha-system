<?php

  //? Cria um modo de produção

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('modos', 'adicionar');

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
    $minimo = $_POST['minimo'] ?? null;
    $meta = $_POST['meta'] ?? null;

    if ($nome && $descricao && $meta) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);
      $descricao = $conn->real_escape_string($descricao);
      $minimo = $conn->real_escape_string($minimo);
      $meta = $conn->real_escape_string($meta);
      
      //? Verifica se já existe um modo com esse nome
      $sql = "SELECT * FROM modos WHERE nome = '$nome'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os modos',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um modo com esse nome'
        ]);
      }

      //? Cria o modo
      $sql = "INSERT INTO modos (nome, descricao, minimo, meta) VALUES ('$nome', '$descricao', $minimo, $meta)";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o modo',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Modo de produção adicionado com sucesso',
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