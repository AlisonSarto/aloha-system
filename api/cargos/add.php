<?php

  //? Cria um cargo

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  accessApi('cargos', 'adicionar');

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $cargo = mysqli_real_escape_string($conn, $_POST['cargo'] ?? '');
    $access = $_POST['access']['access'] ?? [];

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
      $sql = "INSERT INTO cargos(cargo) VALUES('$cargo')";
      $res = $conn->query($sql);

      if ($res == false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar cargo',
          'error' => $conn->error
        ]);
      }

      $id = $conn->insert_id;

      //? Vincula as permissões selecionadas ao cargo
      foreach ($access as $pagina => $funcoes) {
        foreach ((array) $funcoes as $funcao) {
          $pagina = mysqli_real_escape_string($conn, $pagina);
          $funcao = mysqli_real_escape_string($conn, strtolower($funcao));
          $conn->query("INSERT INTO cargo_permissoes (cargo_id, permissao_id) SELECT $id, id FROM permissoes WHERE pagina = '$pagina' AND funcao = '$funcao'");
        }
      }

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
