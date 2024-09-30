<?php

  //? Edita uma máquina

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('maquinas', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
  }

  $id = $_POST['id'] ?? null;
  $nome = $_POST['nome'] ?? null;
  $qtd_funcionarios = $_POST['funcionarios'] ?? null;
  $meta = $_POST['meta'] ?? null;

  if (!$nome || !$qtd_funcionarios || !$meta || !$id) {
    send([
      'status' => 400,
      'message' => 'Parâmetros inválidos'
    ]);
  }

  //? Verifica se não tem uma máquina com o mesmo nome
  $sql = "SELECT * FROM maquinas WHERE nome = '$nome' AND id != '$id'";
  $res = $conn->query($sql);

  if ($res->num_rows > 0) {
    send([
      'status' => 400,
      'message' => 'Já existe uma máquina com esse nome'
    ]);
  }

  //? Edita a máquina
  $sql = "UPDATE maquinas SET nome = '$nome', qtd_funcionarios = '$qtd_funcionarios', meta = '$meta' WHERE id = '$id'";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao editar a máquina'
    ]);
  }

  //? Verifica se já possivel ativar a maquina
  $sql = "SELECT * FROM funcionarios WHERE ativo = 'true'";
  $res = $conn->query($sql);

  if ($res->num_rows >= $qtd_funcionarios) {
    $sql = "UPDATE maquinas SET ativo = 'true' WHERE id = '$id'";
    $res = $conn->query($sql);
  }else {
    $sql = "UPDATE maquinas SET ativo = 'false' WHERE id = '$id'";
    $res = $conn->query($sql);
  }

  send([
    'status' => 200,
    'message' => 'Máquina adicionada com sucesso'
  ]);

?>