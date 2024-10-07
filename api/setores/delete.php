<?php

  //? Delete um setor

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'deletar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //! Verifica se tem um funcionario trabalhando no setor

      //? Deleta o setor
      $sql = "DELETE FROM setores WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o setor',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Setor deletado com sucesso'
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