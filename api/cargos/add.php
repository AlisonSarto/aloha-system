<?php

  //? Cria um cargo

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('cargos', 'adicionar');

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $cargo = mysqli_real_escape_string($conn, $_POST['cargo']) ?? null;
    $access = json_encode($_POST['access']) ?? null;

    if ($cargo && $access) {

      //? Verifica se já existe um cargo com esse nome
      $sql = "SELECT * FROM cargos WHERE cargo = '$cargo'";
      $res = $conn->query($sql);

      if ($res == false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar cargo(s)',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um cargo com esse nome',
        ]);
      }

      //? Cria o cargo
      $sql = "INSERT INTO cargos(cargo, access) VALUES('$cargo', '$access')";
      $res = $conn->query($sql);

      if ($res == false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar cargo',
          'error' => $conn->error
        ]);
      }

      $id = $conn->insert_id;

      send([
        'status' => 200,
        'message' => 'Cargo criado com sucesso',
        'cargo_id' => $id,
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
