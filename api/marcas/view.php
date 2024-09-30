<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('marcas', ['visualizar', 'entrada', 'saida']);

	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa uma marca específica
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM marcas WHERE id = $id";
    } else {

      //? Puxa todas as marcas
      $sql = "SELECT * FROM marcas ORDER BY nome";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar as marcas',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows > 0) {

      $data = [];
      while ($db = $res->fetch_assoc()) {

        $info = [
          "id" => $db['id'],
          "nome" => $db['nome'],
          "formula" => $db['formula'],
          "sabores_id" => $db['sabores_id'],
          "logo" => '/api/marcas/view-marca?id='.$db['id'],
        ];

        if (isset($_GET['base64']) && $_GET['base64'] == 'true') {
          $info['base64'] = $db['logo'];
        }

        if (isset($_GET['id'])) {
          $data = $info;
        } else {
          $data[] = $info;
        }
      }

      send([
        'status' => 200,
        'marcas' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'Marca(s) não encontrada(s)'
      ]);
    }

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>