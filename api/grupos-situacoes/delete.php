<?php

  //? Delete um grupo de situações

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'deletar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //? Verifica se tem alguma situação vinculada ao grupo
      $sql = "SELECT * FROM situacoes WHERE grupo_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar situações',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 403,
          'message' => 'Não é possível deletar um grupo com situações vinculadas'
        ]);
      }

      //? Deleta o grupo
      $sql = "DELETE FROM grupos_situacoes WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o grupo',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Grupo deletado com sucesso'
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