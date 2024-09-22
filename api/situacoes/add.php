<?php

  //? Cria uma situação

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('situacao', 'adicionar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;
    $grupo_id = $_POST['grupo'] ?? null;
    $tipo = $_POST['tipo'] ?? null;
    $pontuacao = $_POST['pontuacao'] ?? null;

    if ($nome && $grupo_id && $tipo && $pontuacao) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);
      $grupo_id = $conn->real_escape_string($grupo_id);
      $tipo = $conn->real_escape_string($tipo);
      $pontuacao = $conn->real_escape_string($pontuacao);
      
      //? Verifica se já existe uma situação com esse nome
      $sql = "SELECT * FROM situacoes WHERE nome = '$nome'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar as situações',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe uma situação com esse nome'
        ]);
      }

      //? VErifica se o grupo existe
      $sql = "SELECT * FROM grupos_situacoes WHERE id = '$grupo_id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o cargo',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Grupo não encontrado'
        ]);
      }

      //? Cria a situação
      $sql = "INSERT INTO situacoes (nome, grupo_id, tipo, pontuacao) VALUES ('$nome', $grupo_id, '$tipo', $pontuacao)";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar a situação',
          'error' => $conn->error
        ]);
      }

      $id = $conn->insert_id;

      send([
        'status' => 200,
        'message' => 'Situação criada com sucesso',
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