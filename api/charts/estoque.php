<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('dashboard', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    //? Puxa os marcas
    $sql = "SELECT * FROM marcas";
    $res = $conn->query($sql);

    if ($res == false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar as marcas',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'Nenhuma marca encontrada'
      ]);
    }

    while ($row = $res->fetch_assoc()) {
      $marcas[] = $row['nome'];
      $marcas_id[$row['id']] = $row['nome'];
    }

    //? Puxa os sabores
    $sql = "SELECT * FROM sabores";
    $res = $conn->query($sql);

    if ($res == false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar os sabores',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'Nenhum sabor encontrado'
      ]);
    }

    while ($row = $res->fetch_assoc()) {
      $sabores[$row['id']] = [
        'sabor' => $row['sabor'],
        'cor' => $row['cor'],
      ];
    }

    //? Puxa os pacotes
    $sql = "SELECT * FROM pacotes";
    $res = $conn->query($sql);

    if ($res == false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar os pacotes',
        'error' => $conn->error
      ]);
    }

    while ($row = $res->fetch_assoc()) {

      $val = [];

      $val['x'] = $row['sabor'];
      $marca_id = $row['marca_id'];
      $val[$marcas_id[$marca_id]] = $row['qtd'];
      $val['cor'] = $sabores[$row['sabor_id']]['cor'];

      $estoque[] = $val;

    }

    send([
      'status' => 200,
      'marcas' => $marcas,
      'estoque' => $estoque
    ]);

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>