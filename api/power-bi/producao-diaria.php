<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  acessApi('dashboard', 'visualizar');

  function send($message) {
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
  }

  //? Verifica o Turno
  $turno = verificarTurno();
  $turno_id = $turno['turno_id'];

  $sql = "SELECT * FROM turnos WHERE id = $turno_id";
  $res = $conn->query($sql);
  $db = $res->fetch_assoc();

  $inicio = new DateTime($db['inicio']);
  $fim = new DateTime($db['fim']);
  $horas = $inicio->diff($fim)->h;

  if ($horas < 0) {
    $horas = 24 + $horas;
  }

  //? Puxa as entradas
  $limit = $_GET['limit'] ?? 100;
  if ($limit == 'null') {
    $sql = "SELECT * FROM entradas WHERE turno_id = $turno_id";
  }else {
    $sql = "SELECT * FROM entradas WHERE turno_id = $turno_id LIMIT $limit";
  }
  $res = $conn->query($sql);
  
  $producao = [];
  while ($db = $res->fetch_assoc()) {
    $dia = new DateTime($db['dia']);
    $dia = $dia->format('Y-m-d');
    
    if (!isset($producao[$dia])) {
      $producao[$dia] = [
        'dia' => $dia,
        'qtd' => 0
      ];
    }

    $producao[$dia]['qtd'] += $db['qtd'];
  }

  //? Meta da semana
  $sql = "SELECT * FROM modos WHERE ativo = 'true'";
  $res = $conn->query($sql);
  $db = $res->fetch_assoc();

  $meta = $db['meta'];
  $meta = $meta * $horas;
  $meta = $meta * 6;

  send($producao);

?>