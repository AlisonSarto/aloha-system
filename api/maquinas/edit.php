<?php

  //? Edita um maquina

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('maquinas', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
  }

  $id = $_POST['id'] ?? null;
  $nome = $_POST['nome'] ?? null;
  $limite = $_POST['limite'] ?? null;

  if ($nome === null || $id === null || $limite === null) {
    send([
      'status' => 400,
      'message' => 'Preencha todos os campos'
    ]);
  }

  //* Previne o SQL Injection
  $nome = $conn->real_escape_string($nome);

  //? Verifica se já existe um maquina com esse nome
  $sql = "SELECT * FROM maquinas WHERE nome = '$nome' AND id != $id";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao puxar o maquinas',
      'error' => $conn->error
    ]);
  }elseif ($res->num_rows > 0) {
    send([
      'status' => 409,
      'message' => 'Já existe um maquina com esse nome'
    ]);
  }

  //? Edita a maquina
  $sql = "UPDATE maquinas SET nome = '$nome', limite = $limite WHERE id = $id";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao editar a maquina',
      'error' => $conn->error
    ]);
  }

  send([
    'status' => 200,
    'message' => 'Máquina criado com sucesso'
  ]);

?>