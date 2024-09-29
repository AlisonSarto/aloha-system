<?php

  //? Edita uma integration

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('pacotes', 'editar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $integration = $_POST['integration'] ?? null;

    if ($id && $integration) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $integration = $conn->real_escape_string($integration);

      //? Verifica se existe o pacote
      $sql = "SELECT * FROM pacotes WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os pacotes',
          'error' => $conn->error
        ]);
      }

      //? Verifica se já existe um usuário com essa integration
      $sql = "SELECT * FROM pacotes WHERE (integration = '$integration') AND id != '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os pacotes',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um pacote vinculado a esse produto'
        ]);
      }

      //? Edita o pacote
      $sql = "UPDATE pacotes SET integration = '$integration' WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao integrar o pacote',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Integração editado com sucesso'
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