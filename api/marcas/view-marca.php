<?php

  //? Visualizar uma logo de marca

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('marcas', ['visualizar', 'entrada', 'saida']);
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    if (empty($_GET['id'])) {
      send([
        'status' => 400,
        'message' => 'ID não informado'
      ]);
    }

    $id = $_GET['id'];

    $sql = "SELECT * FROM marcas WHERE id = $id";
    $res = $conn->query($sql);

    if ($res == false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar as marcas',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'Marca não encontrado'
      ]);
    }

    $db = $res->fetch_assoc();

    $imagem = $db['logo'];

    header("Content-type: image/png");
    echo base64_decode($imagem);
    exit;

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>