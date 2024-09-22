<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('mov', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
		send([
      'status' => 404,
      'message' => 'Método de requisição não encontrado.'
    ]);
	}

  $inicio = $_GET['inicio'] ?? date('Y-m-d', strtotime('-7 days'));
  $fim = $_GET['fim'] ?? date('Y-m-d');
  $embaladora_id = $_GET['embaladora_id'] ?? 0;
  
  //? adiciona um dia para pegar a data final
  $fim = date('Y-m-d', strtotime($fim . ' +1 day'));

  if ($inicio > $fim) {
    send([
      'status' => 400,
      'message' => 'A data de início não pode ser maior que a data de fim.'
    ]);
  }

  //? Puxa as cores
  $sql = "SELECT * FROM sabores";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao buscar sabores.',
      'error' => $conn->error
    ]);
  }

  $cores = [];
  while ($db = $res->fetch_assoc()) {
    $cores[$db['id']] = $db['cor'];
  }

  //? Puxa os pacotes
  $sql = "SELECT * FROM pacotes";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao buscar pacotes.',
      'error' => $conn->error
    ]);
  }

  $pacotes = [];
  while ($db = $res->fetch_assoc()) {
    $marca = $db['marca'];
    $sabor = $db['sabor'];

    $pacotes[$db['id']] = [
      'nome' => "$sabor - $marca",
      'cor' => $cores[$db['sabor_id']]
    ];
  }

  $sql = "SELECT * FROM entradas WHERE dia BETWEEN '$inicio' AND '$fim'";

  if ($embaladora_id > 0) {
    $sql .= " AND embaladora_id = $embaladora_id";
  }

  $sql .= " ORDER BY dia DESC";
  $res = $conn->query($sql);

  if ($res === false) {
    send([
      'status' => 500,
      'message' => 'Erro ao buscar movimentações de entradas.',
      'error' => $conn->error
    ]);
  }

  $entradas = [];
  while ($db = $res->fetch_assoc()) {

    $db['dia'] = date('d/m/Y H:i:s', strtotime($db['dia']));

    if ($db['modo_id'] == 0) {
      $db['modo'] = 'Sem modo registrado';
    }else {
      $db['modo'] = 'Modo ' . $db['modo'];
    }
    
    $entradas[] = [
      'qtd' => $db['qtd'],
      'pacote' => $pacotes[$db['pacote_id']]['nome'],
      'cor' => $pacotes[$db['pacote_id']]['cor'],
      'turno' => $db['turno'],
      'modo' => $db['modo'],
      'dia' => $db['dia']
    ];
  }

  send([
    'status' => 200,
    'message' => 'Movimentações de entradas encontradas.',
    'entradas' => $entradas
  ]);

?>