<?php

  //? Edita um concentrado - g

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('concentrados', 'editar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $qtd = $_POST['qtd'] ?? null;

    if ($id && $qtd >= 0) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $qtd = $conn->real_escape_string($qtd);

      //? Verifica se o concentrado existe
      $sql = "SELECT * FROM concentrados WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao verificar se o concentrado existe',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 0) {
        send([
          'status' => 404,
          'message' => 'Concentrado não encontrado',
        ]);
      }
      
      //? Cria a mov
      $db = $res->fetch_assoc();
      $qtd_db = $db['qtd'];

      if ($qtd > $qtd_db)
      {
        $tipo = 'Ajuste (+)';
        $qtd_mov = $qtd - $qtd_db;
      }elseif ($qtd < $qtd_db)
      {
        $tipo = 'Ajuste (-)';
        $qtd_mov = $qtd_db - $qtd;
      }else
      {
        send([
          'status' => 400,
          'message' => 'A nova quantidade é igual a antiga'
        ]);
      }

      $qtd_final = $qtd;
      $produto_id = $id;
      $produto_tipo = 'concentrados';
      $dia = date('Y-m-d H:i:s');

      $sql = "INSERT INTO
                mov (
                  tipo,
                  qtd_mov,
                  qtd_final,
                  produto_id,
                  produto_tipo,
                  dia
                )
              VALUES (
                '$tipo',
                '$qtd_mov',
                '$qtd_final',
                '$produto_id',
                '$produto_tipo',
                '$dia'
              )
      ";
      $res = $conn->query($sql);
      
      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao adicionar a movimentação',
          'error' => $res->error
        ]);
      }

      //? Edita o concentrado
      $sql = "UPDATE concentrados SET qtd = $qtd WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => "Erro ao editar a quantidade do concentrado",
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Concentrado editado com sucesso'
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