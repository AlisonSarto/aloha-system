<?php

  //? Delete uma marca

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('marca', 'deletar');

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

      //? Puxa os pacotes vinculados
      $sql = "SELECT * FROM pacotes WHERE marca_id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar os pacotes vinculados',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 0) {
        send([
          'status' => 404,
          'message' => 'Nenhum pacote vinculado encontrado'
        ]);
      }

      //? Deletas as movs de cada pacote
      $ids = [];
      while ($db = $res->fetch_assoc()) {
        $ids[] = $db['id'];
      }

      $ids_string = implode(',', $ids);

      $sql = "DELETE FROM mov WHERE produto_id IN ($ids_string) AND produto_tipo = 'pacotes'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar os pacotes vinculados',
          'error' => $conn->error
        ]);
      }

      //? Deleta os pacotes vinculados
      $sql = "DELETE FROM pacotes WHERE marca_id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao deletar os pacotes',
          'error' => $conn->error
        ]);
      }

      //----------------

      //? Puxa as embalagens vinculadas
      $sql = "SELECT * FROM embalagens WHERE marca_id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar as embalagens vinculadas',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 0) {
        send([
          'status' => 404,
          'message' => 'Nenhuma embalagem vinculada encontrada'
        ]);
      }

      //? Deletas as movs de cada embalagem
      $ids = [];
      while ($db = $res->fetch_assoc()) {
        $ids[] = $db['id'];
      }

      $ids_string = implode(',', $ids);

      $sql = "DELETE FROM mov WHERE produto_id IN ($ids_string) AND produto_tipo = 'embalagens'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar as embalagens vinculadas',
          'error' => $conn->error
        ]);
      }

      //? Deleta as embalagens vinculados
      $sql = "DELETE FROM embalagens WHERE marca_id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao deletar as embalagens',
          'error' => $conn->error
        ]);
      }

      //? Deleta a marca
      $sql = "DELETE FROM marcas WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar a marca',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Marca deletada com sucesso'
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