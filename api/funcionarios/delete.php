<?php

  //? Delete um usuário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'deletar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //? Deleta o funcionário
      $sql = "DELETE FROM funcionarios WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o funcionário',
          'error' => $conn->error
        ]);  
      }

      //? Deleta a movimentação de pontos
      $sql = "DELETE FROM mov_pontuacao WHERE funcionario_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar a movimentação de pontos',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Funcionário deletado com sucesso'
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