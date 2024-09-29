<?php

  //? Edita um turno

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('turno', 'editar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $nome = $_POST['nome'] ?? null;
    $inicio = $_POST['inicio'] ?? null;
    $fim = $_POST['fim'] ?? null;
    $inicio_sab = $_POST['inicio_sab'] ?? null;
    $fim_sab = $_POST['fim_sab'] ?? null;

    if ($id && $nome && $inicio && $fim && $inicio_sab && $fim_sab) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $nome = $conn->real_escape_string($nome);
      $inicio = $conn->real_escape_string($inicio);
      $fim = $conn->real_escape_string($fim);
      $inicio_sab = $conn->real_escape_string($inicio_sab);
      $fim_sab = $conn->real_escape_string($fim_sab);

      //? VErifica se o turno existe
      $sql = "SELECT * FROM turnos WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os turnos',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 400,
          'message' => 'Turno não encontrado'
        ]);
      }

      //? Verifica se tem algum turno com o novo nome
      $sql = "SELECT * FROM turnos WHERE nome = '$nome' AND id != $id";
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

      //? Edita o turno
      $sql = "UPDATE turnos SET nome = '$nome', inicio = '$inicio', fim = '$fim', inicio_sab = '$inicio_sab', fim_sab = '$fim_sab' WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar o turno',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Turno editado com sucesso',
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