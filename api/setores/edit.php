<?php

  //? Edita um setor

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('setores', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
  }

  $id = $_POST['id'] ?? null;
  $nome = $_POST['nome'] ?? null;

  if ($nome === null || $id === null) {
    send([
      'status' => 400,
      'message' => 'Preencha todos os campos'
    ]);
  }

  //* Previne o SQL Injection
  $nome = $conn->real_escape_string($nome);

  //? Verifica se já existe um setor com esse nome
  $sql = "SELECT * FROM setores WHERE nome = '$nome' AND id != $id";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao puxar o setores',
      'error' => $conn->error
    ]);
  }elseif ($res->num_rows > 0) {
    send([
      'status' => 409,
      'message' => 'Já existe um setor com esse nome'
    ]);
  }

  //? Edita o setor
  $sql = "UPDATE setores SET nome = '$nome' WHERE id = $id";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao editar o setor',
      'error' => $conn->error
    ]);
  }

  send([
    'status' => 200,
    'message' => 'Setor criado com sucesso'
  ]);

?>