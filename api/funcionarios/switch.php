<?php

  //? Alterna o estado do funcionário

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('funcionarios', 'alterar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;

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

    //? Altera o estado
    $ativo = $ativo === 'true' ? 'false' : 'true';

    $sql = "UPDATE funcionarios SET ativo = '$ativo' WHERE id = $id";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao alterar o funcionário',
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