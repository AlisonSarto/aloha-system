<?php

  //? Cria um cargo

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('cargos', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $cargo = mysqli_real_escape_string($conn, $_POST['cargo']) ?? null;
    $acess = json_encode($_POST['acess']) ?? null;

    if ($cargo && $acess) {

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
      $sql = "INSERT INTO cargos(cargo, acess) VALUES('$cargo', '$acess')";
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