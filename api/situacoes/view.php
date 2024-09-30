<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('situacoes', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    //? Puxa os grupos
    $sql = "SELECT * FROM grupos_situacoes ORDER BY nome";
    $res = $conn->query($sql);

    $grupos = [];
    while ($db = $res->fetch_assoc()) {
      $grupos[$db['id']] = $db['nome'];
    }

    if (isset($_GET['id'])) {

      //? Puxa uma situação específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM situacoes WHERE id = $id";
    } else {
      
      //? Puxa todas as situações
      $sql = "SELECT * FROM situacoes ORDER BY nome";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar situações',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows > 0) {

      while ($db = $res->fetch_assoc()) {
        $db['grupo'] = $grupos[$db['grupo_id']];
        if (isset($_GET['id'])) {
          $data = $db;
        } else {
          $data[$db['tipo']][$db['grupo']][] = $db;
        }
      }

      send([
        'status' => 200,
        'situacoes' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'User(s) não encontrado(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>