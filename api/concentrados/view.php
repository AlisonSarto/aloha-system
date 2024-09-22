<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('concentrados', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um concentrado específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM concentrados WHERE id = $id";
    } else {
      
      //? Puxa todos os concentrados
      $sql = "SELECT * FROM concentrados ORDER BY sabor";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar concentrados',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'concentrado(s) não encontrado(s)'
      ]);
    }

    $sql = "SELECT id, formula FROM sabores";
    $res2 = $conn->query($sql);

    if ($res2 === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar sabores',
        'error' => $conn->error
      ]);
    }

    while ($db = $res2->fetch_assoc()) {
      $formulas[$db['id']] = $db['formula'];
    }

    while ($db = $res->fetch_assoc()) {

      $sabor_id = $db['sabor_id'];
      $formula = $formulas[$sabor_id];

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
      'concentrados' => $data
    ]);
	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>