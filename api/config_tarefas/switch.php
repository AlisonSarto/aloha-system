<?php

  //? Alterna o estado da tarefa

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('tarefas', 'alterar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $checked = $_POST['checked'] ?? null;

    if (empty($id) || empty($checked)) {
      send([
        'status' => 400,
        'message' => 'Preencha todos os campos'
      ]);
    }

    //? Altera
    $slq = "UPDATE tarefas SET ativo = '$checked' WHERE id = '$id'";
    $res = $conn->query($slq);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao alterar a tarefa',
        'error' => $conn->error
      ]);
    }

    if ($checked == 'false') {
      $slq = "DELETE FROM controle_tarefas WHERE tarefa_id = '$id'";
      $res = $conn->query($slq);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao alterar a tarefa',
          'error' => $conn->error
        ]);
      }
    }

    send([
      'status' => 200,
      'message' => 'Tarefa alterada com sucesso'
    ]);

  }else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>