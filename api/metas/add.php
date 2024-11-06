<?php

  //? Cria uma meta

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('metas', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
  }

  $cenario = $_POST['cenario'] ?? null;
  $qtd_funcionarios = $_POST['funcionarios'] ?? null;
  $meta = $_POST['meta'] ?? null;

  if (!$cenario || !$qtd_funcionarios || !$meta) {
    send([
      'status' => 400,
      'message' => 'Parâmetros inválidos'
    ]);
  }

  //? Verifica se não tem uma meta com o mesmo numero de funcionarios
  $sql = "SELECT * FROM metas WHERE qtd_funcionarios = '$qtd_funcionarios'";
  $res = $conn->query($sql);

  if ($res->num_rows > 0) {
    send([
      'status' => 400,
      'message' => 'Já existe uma meta com esse número de colaboradores'
    ]);
  }

  //? Cria a meta
  $sql = "INSERT INTO metas (cenario, qtd_funcionarios, meta) VALUES ('$cenario', '$qtd_funcionarios', '$meta')";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao adicionar meta'
    ]);
  }

  //? Veriffica se já possivel ativar a meta
  $sql = "SELECT * FROM funcionarios WHERE ativo = 'true' AND setor_id != 3";
  $res = $conn->query($sql);

  if ($res->num_rows == $qtd_funcionarios) {
    $sql = "UPDATE metas SET ativo = 'true' WHERE qtd_funcionarios = '$qtd_funcionarios'";
    $res = $conn->query($sql);
    
    $sql = "UPDATE metas SET ativo = 'false' WHERE qtd_funcionarios != '$qtd_funcionarios'";
    $res = $conn->query($sql);
  }

  send([
    'status' => 200,
    'message' => 'Meta adicionada com sucesso'
  ]);

?>