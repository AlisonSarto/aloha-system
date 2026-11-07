<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('usuarios', 'visualizar');

	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um usuário específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT usuarios.*, cargos.cargo AS cargo_nome FROM usuarios INNER JOIN cargos ON cargos.id = usuarios.cargo_id WHERE usuarios.id = $id";
    } else {

      //? Puxa todos os usuários
      $sql = "SELECT usuarios.*, cargos.cargo AS cargo_nome FROM usuarios INNER JOIN cargos ON cargos.id = usuarios.cargo_id ORDER BY nome";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar usuários',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows > 0) {

      while ($db = $res->fetch_assoc()) {
        $db['cargo'] = ['nome' => $db['cargo_nome']];
        unset($db['cargo_nome']);
        if (isset($_GET['id'])) {
          $data = $db;
        } else {
          $data[] = $db;
        }
      }

      send([
        'status' => 200,
        'usuarios' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'User(s) não encontrado(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>
