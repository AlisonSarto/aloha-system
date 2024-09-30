<?php

  //? Edita um funcionário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('funcionario', 'editar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = (int) $_POST['id'] ?? null;
    $turno_id = (int) $_POST['turno'] ?? null;
    $pontuacao = (int) $_POST['pontuacao'] ?? null;

    if ($id === null || $turno_id === null || $pontuacao === null) {
      send([
        'status' => 400,
        'message' => 'Dados inválidos',
        'id' => $id,
        'turno_id' => $turno_id,
        'pontuacao' => $pontuacao
      ]);
    }

    //* Previne o SQL Injection
    $id = $conn->real_escape_string($id);
    $turno_id = $conn->real_escape_string($turno_id);
    $pontuacao = $conn->real_escape_string($pontuacao);

    //? Verifica se existe o funcionário
    $sql = "SELECT * FROM funcionarios WHERE id = '$id'";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar o funcionário',
        'error' => $conn->error
      ]);
    }

    $pontuacao_antiga = (int) $res->fetch_assoc()['pontuacao'];
    $pontuacao_mov = $pontuacao - $pontuacao_antiga;

    //? deixa a pontuação positiva
    if ($pontuacao_mov < 0) {
      $pontuacao_mov = $pontuacao_mov * -1;
    }

    $dia = date('Y-m-d H:i:s');

    //? Cria movimentação de pontuação
    if ($pontuacao !== $pontuacao_antiga) {
      
      $tipo = $pontuacao > $pontuacao_antiga ? '+' : '-';

      $sql = "INSERT INTO mov_pontuacao (funcionario_id, tipo, obs, pontuacao_mov, pontuacao_final, dia) VALUES ('$id', '$tipo', 'Ajuste de pontuação', '$pontuacao_mov', '$pontuacao', '$dia')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar movimentação',
          'error' => $conn->error
        ]);
      }
    }

    //? Edita o funcionário
    $sql = "UPDATE funcionarios SET turno_id = '$turno_id', pontuacao = '$pontuacao' WHERE id = '$id'";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao editar o funcionário',
        'error' => $conn->error
      ]);
    }

    send([
      'status' => 200,
      'message' => 'Funcionário editado com sucesso'
    ]);

  }else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>