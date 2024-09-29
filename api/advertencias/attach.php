<?php

  //? Cria uma advertencia (remove pontos)

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('advertencia', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $funcionario = (int) $_POST['funcionario'] ?? null;
    $advertencia = $_POST['advertencia'] ?? null;
    $pontuacao = (int) $_POST['pontuacao'] ?? null;
    $dia = date('Y-m-d H:i:s');

    if ($funcionario && $advertencia && $pontuacao) {

      //* Previne o SQL Injection
      $funcionario = addslashes($funcionario);
      $advertencia = addslashes($advertencia);
      $pontuacao = addslashes($pontuacao);

      //? Puxa o funcionario
      $sql = "SELECT * FROM funcionarios WHERE id = '$funcionario'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao conectar ao banco de dados',
          'err' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Funcionário não encontrado'
        ]);
      }

      $db = $res->fetch_assoc();
      $pontuacao_antiga = $db['pontuacao'];
      $pontuacao_atual = $pontuacao_antiga - $pontuacao;
      $tipo = "-";

      //? Adiciona a advertencia
      $sql = "INSERT INTO mov_pontuacao (funcionario_id, tipo, obs, pontuacao_mov, pontuacao_final, dia) VALUES ('$funcionario', '$tipo', '$advertencia', '$pontuacao', '$pontuacao_atual', '$dia')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao conectar ao banco de dados',
          'err' => $conn->error
        ]);
      }

      //? Edita a pontuação do funcionario
      $sql = "UPDATE funcionarios SET pontuacao = '$pontuacao_atual' WHERE id = '$funcionario'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao conectar ao banco de dados',
          'err' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Advertência adicionada com sucesso',
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