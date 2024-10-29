<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  acessApi('dashboard', 'visualizar');

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
  }

  //? Verifica o Turno
  $turno = verificarTurno();
  $turno_id = $turno['turno_id'];

  if ($turno_id == 0) {
    $data = [
      'dia' => date('Y-m-d'),
      'producao' => 0
    ];
    
    send([
      'status' => 200,
      'producao' => $data
    ]);
  }

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
  $sql = "SELECT * FROM entradas WHERE turno_id = $turno_id";
  $res = $conn->query($sql);
  
  $producao = [];
  while ($db = $res->fetch_assoc()) {
    $dia = new DateTime($db['dia']);
    $dia = $dia->format('Y-m-d');
    
    if (!isset($producao[$dia])) {
      $producao[$dia] = 0;
    }

    $producao[$dia] += $db['qtd'];
  }

  $data = [];
  foreach ($producao as $key => $value) {
    $data[] = [
      'dia' => $key,
      'producao' => $value
    ];
  }

  send([
    'status' => 200,
    'producao' => $data
  ]);

?>