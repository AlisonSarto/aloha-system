<?php

  //? Delete um sabor

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('sabores', 'deletar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //? Deleta o sabor
      $sql = "DELETE FROM sabores WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o usuário',
          'error' => $conn->error
        ]);  
      }

      //? Deleta o concentrado e as movs
      $sql = "SELECT * FROM concentrados WHERE sabor_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o concentrado',
          'error' => $conn->error
        ]);  
      }

      $ids = [];
      while ($db = $res->fetch_assoc()) {
        $ids[] = $db['id'];
      }

      if (count($ids) > 0) {
        $ids_string = implode(',', $ids);

        $sql = "DELETE FROM mov WHERE produto_id IN ($ids_string) AND produto_tipo = 'concentrados'";
        $res = $conn->query($sql);

        if ($res === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao apagar as movs dos concentrados vinculados',
            'error' => $conn->error
          ]);
        }

        $sql = "DELETE FROM concentrados WHERE sabor_id = $id";
        $res = $conn->query($sql);

        if ($res === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao apagar os concentrados vinculados',
            'error' => $conn->error
          ]);
        }
      }

      //? Deleta as embalagens
      $sql = "SELECT * FROM embalagens WHERE sabor_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar as embalagens',
          'error' => $conn->error
        ]);  
      }

      $ids = [];
      while ($db = $res->fetch_assoc()) {
        $ids[] = $db['id'];
      }

      if (count($ids) > 0) {
        $ids_string = implode(',', $ids);

        $sql = "DELETE FROM mov WHERE produto_id IN ($ids_string) AND produto_tipo = 'embalagens'";
        $res = $conn->query($sql);

        if ($res === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao apagar as movs das embalagens vinculadas',
            'error' => $conn->error
          ]);
        }

        $sql = "DELETE FROM embalagens WHERE sabor_id = $id";
        $res = $conn->query($sql);

        if ($res === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao apagar as embalagens vinculadas',
            'error' => $conn->error
          ]);
        }
      }

      //? Deleta os pacotes
      $sql = "SELECT * FROM pacotes WHERE sabor_id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os pacotes',
          'error' => $conn->error
        ]);  
      }

      $ids = [];
      while ($db = $res->fetch_assoc()) {
        $ids[] = $db['id'];
      }

      if (count($ids) > 0) {
        $ids_string = implode(',', $ids);

        $sql = "DELETE FROM mov WHERE produto_id IN ($ids_string) AND produto_tipo = 'pacotes'";
        $res = $conn->query($sql);

        if ($res === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao apagar as movs dos pacotes vinculados',
            'error' => $conn->error
          ]);
        }

        $sql = "DELETE FROM pacotes WHERE sabor_id = $id";
        $res = $conn->query($sql);

        if ($res === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao apagar os pacotes vinculados',
            'error' => $conn->error
          ]);
        }
      }

      //? Remove do sabores_id das marcas
      $sql = "UPDATE marcas SET sabores_id = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', sabores_id, ','), ',$id,', ',')) WHERE FIND_IN_SET('$id', sabores_id) > 0;";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o sabor_id da marca',
          'error' => $conn->error
        ]);  
      }

      //? Apaga as marcas que não tem sabores
      $sql = "DELETE FROM marcas WHERE sabores_id = ''";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar as marcas sem sabores',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Sabor deletado com sucesso'
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