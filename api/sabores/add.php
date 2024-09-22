<?php

  //? Cria um sabor

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('sabores', 'adicionar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $sabor = $_POST['sabor'] ?? null;
    $emoji = $_POST['emoji'] ?? null;
    $cor = $_POST['cor'] ?? null;
    $formula = $_POST['formula'] ?? null;

    if ($sabor && $emoji && $cor && $formula) {

      //* Previne o SQL Injection
      $sabor = $conn->real_escape_string($sabor);
      $emoji = $conn->real_escape_string($emoji);
      $cor = $conn->real_escape_string($cor);
      $formula = $conn->real_escape_string($formula);

      //? Verifica se já existe um sabor com esse nome
      $sql = "SELECT * FROM sabores WHERE sabor = '$sabor'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os sabores',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um sabor com esse nome'
        ]);
      }

      //? Cria o sabor
      $sql = "INSERT INTO sabores (sabor, emoji, cor, formula) VALUES ('$sabor', '$emoji', '$cor', $formula)";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o sabor',
          'error' => $conn->error
        ]);
      }

      $id = $conn->insert_id;

      //? Cria o concentrado
      $sql = "INSERT INTO concentrados (sabor_id, sabor, qtd) VALUES ($id, '$sabor', 0)";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o concentrado',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Sabor criado com sucesso',
        'sabor_id' => $id,
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