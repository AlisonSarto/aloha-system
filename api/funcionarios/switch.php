<?php

  //? Alterna o estado do funcionário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('funcionarios', 'alterar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $setor_id = $_POST['setor_id'] ?? 0;

    if ($id === null) {
      send([
        'status' => 400,
        'message' => 'Preencha todos os campos'
      ]);
    }

    //? Puxa o estado atual
    $sql = "SELECT ativo FROM funcionarios WHERE id = $id";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar o funcionário',
        'error' => $conn->error
      ]);
    }

    $db = $res->fetch_assoc();
    $ativo = $db['ativo'];

    if($ativo == false && $setor_id == 0){
      send([
        'status' => 400,
        'message' => 'Defina um setor para ativar esse funcionário'
      ]);
    }

    //? Altera o estado
    $ativo = $ativo === 'true' ? 'false' : 'true';

    $sql = "UPDATE funcionarios SET ativo = '$ativo', setor_id = $setor_id WHERE id = $id";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao alterar o funcionário',
        'error' => $conn->error
      ]);
    }

    //* Altera as situações das metas
    //? Verifica quantos funcionários ativos tem
    $sql = "SELECT * FROM funcionarios WHERE ativo = 'true' AND setor_id != 3";
    $res = $conn->query($sql);
    
    $qtd_funcionarios = $res->num_rows;

    //? Ativa as metas
    $sql = "UPDATE metas SET ativo = 'true' WHERE qtd_funcionarios = $qtd_funcionarios";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao ativar as metas',
        'error' => $conn->error
      ]);
    }

    //? Desativa as metas
    $sql = "UPDATE metas SET ativo = 'false' WHERE qtd_funcionarios != $qtd_funcionarios";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao desativar as metas',
        'error' => $conn->error
      ]);
    }

    send([
      'status' => 200,
      'message' => 'Funcionário alterada com sucesso'
    ]);

  }else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>