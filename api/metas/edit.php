<?php

  //? Edita uma meta

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('metas', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
  }

  $id = $_POST['id'] ?? null;
  $cenario = $_POST['cenario'] ?? null;
  $qtd_funcionarios = $_POST['funcionarios'] ?? null;
  $meta = $_POST['meta'] ?? null;

  if (!$cenario || !$qtd_funcionarios || !$meta || !$id) {
    send([
      'status' => 400,
      'message' => 'Parâmetros inválidos'
    ]);
  }

  //? Verifica se não tem uma meta com o mesmo n de funcionarios
  $sql = "SELECT * FROM metas WHERE cenario = '$cenario' AND id != '$id'";
  $res = $conn->query($sql);

  if ($res->num_rows > 0) {
    send([
      'status' => 400,
      'message' => 'Já existe uma meta com esse cenario'
    ]);
  }

  //? Edita a meta
  $sql = "UPDATE metas SET cenario = '$cenario', qtd_funcionarios = '$qtd_funcionarios', meta = '$meta' WHERE id = '$id'";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao editar a meta'
    ]);
  }

  //? Verifica se já possivel ativar a meta
  $sql = "SELECT * FROM funcionarios WHERE ativo = 'true'";
  $res = $conn->query($sql);

  if ($res->num_rows == $qtd_funcionarios) {
    $sql = "UPDATE metas SET ativo = 'true' WHERE id = '$id'";
    $res = $conn->query($sql);

    $sql = "UPDATE metas SET ativo = 'false' WHERE id != '$id'";
    $res = $conn->query($sql);
  }

  send([
    'status' => 200,
    'message' => 'meta adicionada com sucesso'
  ]);

?>