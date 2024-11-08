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

  //? Puxa a data da entrada mais antiga
  $sql = "SELECT * FROM entradas ORDER BY turno_dia ASC LIMIT 1";
  $res = $conn->query($sql);
  $db = $res->fetch_assoc();

  $data_inicio = $db['turno_dia'];
  
  //? Faz um array de datas até a data atual
  $data_atual = date('Y-m-d');
  $dias = [];

  $data = new DateTime($data_inicio);
  $data_atual = new DateTime($data_atual);

  while ($data <= $data_atual) {
    $dias[] = $data->format('Y-m-d');
    $data->modify('+1 day');
  }

  //? Puxa os turnos segundo as entradas
  $sql = "SELECT DISTINCT turno FROM entradas";
  $res = $conn->query($sql);
  $turnos = $res->fetch_all(MYSQLI_ASSOC);

  //? Puxa todas as entradas
  $sql = "SELECT * FROM entradas ORDER BY dia DESC";
  $res = $conn->query($sql);
  $entradas = $res->fetch_all(MYSQLI_ASSOC);
  
  //? Junta os valores
  $res = [];
  foreach ($entradas as $entrada) {

    $data = $entrada['turno_dia'];
    $turno = $entrada['turno'];

    $qtd = (int) $entrada['qtd'];
    $meta = (int) $entrada['meta'];

    $hora = date('H:00', strtotime($entrada['dia']));
    
    $res[$data][$turno]['meta'] = $meta;

    if (empty($res[$data][$turno]['entradas'][$hora])) {
      $res[$data][$turno]['entradas'][$hora] = $qtd;
    }else {
      $res[$data][$turno]['entradas'][$hora] += $qtd;
    }

  }

  //? Preenche os valores faltantes
  foreach ($res as $data => $turnos) {
    foreach ($turnos as $turno => $dados) {
      $min = min(array_keys($dados['entradas']));
      $max = max(array_keys($dados['entradas']));

      $hora = new DateTime($min);
      $hora_max = new DateTime($max);

      while ($hora <= $hora_max) {
        $hora = $hora->format('H:00');
        if (empty($res[$data][$turno]['entradas'][$hora])) {
          $res[$data][$turno]['entradas'][$hora] = 0;
        }
        $hora = new DateTime($hora);
        $hora->modify('+1 hour');
      }
    }
  }

  //? Organiza em ordem
  foreach ($res as $data => $turnos) {
    foreach ($turnos as $turno => $dados) {
      ksort($res[$data][$turno]['entradas']);
    }
  }

  //* Formata a resposta para que fique varios objetos dentro de um array
  $data_final = [];
  foreach ($res as $data => $turnos) {
    foreach ($turnos as $turno => $dados) {
      foreach ($dados['entradas'] as $hora => $qtd) {
        $data_final[] = [
          'data' => $data,
          'turno' => $turno,
          'hora' => $hora,
          'qtd' => $qtd,
          'meta' => $dados['meta']
        ];
      }
    }
  }
  
  send([
    'status' => 200,
    'data' => $data_final
  ]);

?>