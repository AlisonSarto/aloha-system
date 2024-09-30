<?php

  //? Cria uma máquina

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('maquinas', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
  }

  $nome = $_POST['nome'] ?? null;
  $qtd_funcionarios = $_POST['funcionarios'] ?? null;
  $meta = $_POST['meta'] ?? null;

  if (!$nome || !$qtd_funcionarios || !$meta) {
    send([
      'status' => 400,
      'message' => 'Parâmetros inválidos'
    ]);
  }

  //? Verifica se não tem uma máquina com o mesmo nome
  $sql = "SELECT * FROM maquinas WHERE nome = '$nome'";
  $res = $conn->query($sql);

  if ($res->num_rows > 0) {
    send([
      'status' => 400,
      'message' => 'Já existe uma máquina com esse nome'
    ]);
  }

  //? Cria a máquina
  $sql = "INSERT INTO maquinas (nome, qtd_funcionarios, meta) VALUES ('$nome', '$qtd_funcionarios', '$meta')";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao adicionar máquina'
    ]);
  }

  //? Veriffica se já possivel ativar a maquina
  $sql = "SELECT * FROM funcionarios WHERE ativo = 'true'";
  $res = $conn->query($sql);

  if ($res->num_rows >= $qtd_funcionarios) {
    $sql = "UPDATE maquinas SET ativo = 'true' WHERE nome = '$nome'";
    $res = $conn->query($sql);
  }

  send([
    'status' => 200,
    'message' => 'Máquina adicionada com sucesso'
  ]);

?>