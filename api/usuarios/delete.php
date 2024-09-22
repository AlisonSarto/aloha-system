<?php

  //? Delete um usuário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'deletar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //? Verifica se não é o ultimo usuário admin
      $sql = "SELECT * FROM usuarios WHERE cargo_id = 1";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar usuários',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 1) {
        send([
          'status' => 403,
          'message' => 'Não é possível deletar o último usuário Admin'
        ]);
      }

      //? Deleta o usuário
      $sql = "DELETE FROM usuarios WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o usuário',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Usuário deletado com sucesso'
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