<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('embalagens', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa uma embalagem específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM embalagens WHERE id = $id";
    } else {
      
      //? Puxa todos os embalagens
      $sql = "SELECT * FROM embalagens ORDER BY marca_id";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar embalagens',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'embalagem(s) não encontrado(s)'
      ]);
    }

    $sql = "SELECT id, formula FROM marcas";
    $res2 = $conn->query($sql);

    if ($res2 === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar marcas',
        'error' => $conn->error
      ]);
    }

    while ($db = $res2->fetch_assoc()) {
      $formulas[$db['id']] = $db['formula'];
    }

    while ($db = $res->fetch_assoc()) {

      $marca_id = $db['marca_id'];
      $formula = $formulas[$marca_id];

      $calc = $db['qtd'] / $formula;
      
      $db['calc'] = round($calc);

      if (isset($_GET['id'])) {
        $data = $db;
      } else {
        $data[] = $db;
      }
    }

    send([
      'status' => 200,
      'embalagens' => $data
    ]);
	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>