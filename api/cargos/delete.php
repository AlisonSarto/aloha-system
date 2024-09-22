<?php

  //? Delete um cargo

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('cargos', 'deletar');

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

      //? Puxa o cargo
      $sql = "SELECT * FROM cargos WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res == false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar cargo(s)',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 0) {
        send([
          'status' => 404,
          'message' => 'Cargo não encontrado'
        ]);
      }

      //? Bloquei se for o cargo Admin
      $cargos = $res->fetch_assoc();
      if ($cargos['cargo'] == 'Admin') {
        send([
          'status' => 403,
          'message' => 'Não é possível deletar o cargo Admin'
        ]);
      }

      //? Deleta os usuários com esse cargo
      $sql = "DELETE FROM usuarios WHERE cargo_id = $id";
      $res = $conn->query($sql);

      if ($res == false) {
        send([
          'status' => 500,
          'message' => 'Erro ao deletar os usuários com esse cargo',
          'error' => $conn->error
        ]);
      }

      //? Deleta o cargo
      $sql = "DELETE FROM cargos WHERE id = $id";
      $res = $conn->query($sql);

      if ($res == false) {
        send([
          'status' => 500,
          'message' => 'Erro ao deletar o cargo',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Cargo deletado com sucesso'
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