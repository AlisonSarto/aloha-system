<?php

  //? Edita um sabor

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('sabores', 'editar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $sabor = $_POST['sabor'] ?? null;
    $formula = $_POST['formula'] ?? null;
    $cor = $_POST['cor'] ?? null;
    $emoji = $_POST['emoji'] ?? null;

    if ($id && $sabor && $formula && $cor && $emoji) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $sabor = $conn->real_escape_string($sabor);
      $formula = $conn->real_escape_string($formula);
      $cor = $conn->real_escape_string($cor);
      $emoji = $conn->real_escape_string($emoji);

      //? Verifica se existe o sabor
      $sql = "SELECT * FROM sabores WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o sabor',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 0) {
        send([
          'status' => 404,
          'message' => 'Sabor não encontrado'
        ]);
      }

      //? Verifica se já existe um sabor com esse nome
      $sql = "SELECT * FROM sabores WHERE sabor = '$sabor' AND id != '$id'";
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

      //? Edita o sabor
      $sql = "UPDATE sabores SET sabor = '$sabor', formula = $formula, cor = '$cor', emoji = '$emoji' WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar o sabor',
          'error' => $conn->error
        ]);
      }

      //? Edita o concentrado
      $sql = "UPDATE concentrados SET sabor = '$sabor' WHERE sabor_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar o concentrado',
          'error' => $conn->error
        ]);
      }

      //? Edita as embalagens
      $sql = "UPDATE embalagens SET sabor = '$sabor' WHERE sabor_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar a embalagem',
          'error' => $conn->error
        ]);
      }

      //? Edita os pacotes
      $sql = "UPDATE pacotes SET sabor = '$sabor' WHERE sabor_id = '$id'"; 
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar o pacote',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Sabor editado com sucesso'
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