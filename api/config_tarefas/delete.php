<?php

  //? Deleta uma tarefa

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('tarefa', 'deletar');

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

      //? Deleta a tarefa
      $sql = "DELETE FROM tarefas WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar a tarefa',
          'error' => $conn->error
        ]);  
      }

      //? Delete o controle da tarefa
      $sql = "DELETE FROM controle_tarefas WHERE tarefa_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar a tarefa',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Tarefa deletada com sucesso'
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