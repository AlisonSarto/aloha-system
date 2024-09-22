<?php

  //? Edita um modo de produção

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

    $id = $_POST['id'] ?? null;
    $nome = $_POST['nome'] ?? null;
    $descricao = $_POST['descricao'] ?? null;
    $minimo = $_POST['minimo'] ?? null;
    $meta = $_POST['meta'] ?? null;

    if ($id && $nome && $descricao && $meta) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $nome = $conn->real_escape_string($nome);
      $descricao = $conn->real_escape_string($descricao);
      $minimo = $conn->real_escape_string($minimo);
      $meta = $conn->real_escape_string($meta);

      //? Verifica se o modo existe
      $sql = "SELECT * FROM modos WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os modos',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Modo de produção não encontrado'
        ]);
      }
      
      //? Verifica se já existe um modo com esse nome
      $sql = "SELECT * FROM modos WHERE nome = '$nome' AND id != '$id'";
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

      //? edita o modo
      $sql = "UPDATE modos SET nome = '$nome', descricao = '$descricao', minimo = $minimo, meta = $meta WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar o modo',
          'error' => $conn->error
        ]);
      }

      //? Edita as entradas
      $sql = "UPDATE entradas SET modo = '$nome' WHERE modo_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar as entradas',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Modo de produção criado com sucesso',
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