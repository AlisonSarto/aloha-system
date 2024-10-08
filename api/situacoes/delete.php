<?php

  //? Delete uma situação

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('situacao', 'deletar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //? Deleta o usuário
      $sql = "DELETE FROM situacoes WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar a situação',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Situação deletada com sucesso'
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