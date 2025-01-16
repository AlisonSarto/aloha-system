<?php

  //? Delete um maquina

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'deletar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //! Verifica se tem um funcionario trabalhando na maquina

      //? Deleta a maquina
      $sql = "DELETE FROM maquinas WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar a maquina',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Máquina deletado com sucesso'
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