<?php

  //? Delete um turno

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('turnos', 'deletar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //? Deleta o turno
      $sql = "DELETE FROM turnos WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o turno',
          'error' => $conn->error
        ]);  
      }

      //? Deleta os funcionarios vinculados
      $sql = "DELETE FROM funcionarios WHERE turno_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar os funcionarios',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Turno deletado com sucesso'
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