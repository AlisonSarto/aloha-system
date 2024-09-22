<?php

  //? Delete um modo

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('modo', 'deletar');

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

      //? Verifica se o modo existe
      $sql = "SELECT * FROM modos WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao buscar o modo',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Modo não encontrado'
        ]);
      }

      //? Verifica se o modo está sendo usado
      $db = $res->fetch_assoc();
      if ($db['ativo'] == true) {
        send([
          'status' => 400,
          'message' => 'Não é possivel deletar um modo ativo'
        ]);
      }

      //? Deleta o modos
      $sql = "DELETE FROM modos WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o modo',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Modo deletado com sucesso'
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