<?php

  //? Cria um turno

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('turno', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;
    $inicio = $_POST['inicio'] ?? null;
    $fim = $_POST['fim'] ?? null;
    $inicio_sab = $_POST['inicio_sab'] ?? null;
    $fim_sab = $_POST['fim_sab'] ?? null;

    if ($nome && $inicio && $fim && $inicio_sab && $fim_sab) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);
      $inicio = $conn->real_escape_string($inicio);
      $fim = $conn->real_escape_string($fim);
      $inicio_sab = $conn->real_escape_string($inicio_sab);
      $fim_sab = $conn->real_escape_string($fim_sab);

      //? Verifica se o turno já existe
      $sql = "SELECT * FROM turnos WHERE nome = '$nome'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os turnos',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um turno com esse nome'
        ]);
      }

      //? Cria o turno
      $sql = "INSERT INTO turnos (nome, inicio, fim, inicio_sab, fim_sab) VALUES ('$nome', '$inicio', '$fim', '$inicio_sab', '$fim_sab')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o turno',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Turno criado com sucesso',
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