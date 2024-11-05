<?php

  function verificarTurno($data = null) {
    if ($data === null) {
      $data = new DateTime();
    }

    global $conn;

    $sql = "SELECT * FROM turnos";
    $res = $conn->query($sql);

    $turnos = [];
    $turnos_sab = [];

    while ($db = $res->fetch_assoc()) {
      $turnos[$db['nome']]['inicio'] = $db['inicio'];
      $turnos[$db['nome']]['fim'] = $db['fim'];
      $turnos[$db['nome']]['id'] = $db['id'];

      $turnos_sab[$db['nome']]['inicio'] = $db['inicio_sab'];
      $turnos_sab[$db['nome']]['fim'] = $db['fim_sab'];
    }

    // Verifica qual é o menor inicio do sabado
    $menor_inicio_sab = "23:59:59";
    foreach ($turnos_sab as $turno => $time) {
      if ($time['inicio'] < $menor_inicio_sab) {
        $menor_inicio_sab = $time['inicio'];
      }
    }

    // Verifica qual é o maior fim do sabado
    $maior_fim_sab = "00:00:00";
    foreach ($turnos_sab as $turno => $time) {
      if ($time['fim'] > $maior_fim_sab) {
        $maior_fim_sab = $time['fim'];
      }
    }

    // Verifica qual é o menor inicio da semana
    $menor_inicio = "23:59:59";
    foreach ($turnos as $turno => $time) {
      if ($time['inicio'] < $menor_inicio) {
        $menor_inicio = $time['inicio'];
      }
    }

    $turno_atual = 'Sem turno';
    $dia_atual = $data->format('Y-m-d');

    foreach ($turnos as $turno => $value) {
      $inicio_turno = $value['inicio'];
      $fim_turno = $value['fim'];
      $inicio_turno_sab = $turnos_sab[$turno]['inicio'];
      $fim_turno_sab = $turnos_sab[$turno]['fim'];
      
      if ($inicio_turno < $fim_turno) {
        if ($data->format('N') != 6) {
          // Turno Normal
          if ($data->format('H:i:s') >= $inicio_turno && $data->format('H:i:s') < $fim_turno) {
            $turno_atual = $turno;
            break;
          }
        }elseif ($data->format('H:i:s') >= $inicio_turno_sab && $data->format('H:i:s') < $fim_turno_sab) {
          $turno_atual = $turno;
          break;
        }
      }else {
        // Madrugada Normal
        if ($data->format('H:i:s') >= $inicio_turno || $data->format('H:i:s') < $fim_turno) {
          $turno_atual = $turno;
          break;
        }
      }
    }

    if ($turno_atual !== 'Sem turno' && $turnos[$turno_atual]['inicio'] > $turnos[$turno_atual]['fim'] && $data->format('H:i:s') < $turnos[$turno_atual]['fim']) {
      $dia_atual = date('Y-m-d', strtotime('-1 day', strtotime($dia_atual)));
    }

    // Puxa todos os dados do turno
    $turno_id = $turnos[$turno_atual]['id'] ?? 0;
    $sql = "SELECT * FROM turnos WHERE id = '$turno_id'";
    $res = $conn->query($sql);

    if ($res->num_rows === 0 || $turno_id == 0) {
      $res = [
        'turno' => $turno_atual,
        'turno_id' => 0,
        'dia' => $dia_atual,
        'horas_de_trabalho' => 0,
      ];
      return $res;
    }

    $db = $res->fetch_assoc();

    $inicio_turno = new DateTime($db['inicio']);
    $fim_turno = new DateTime($db['fim']);

    $horas_de_trabalho = $fim_turno->diff($inicio_turno)->format('%H:%I:%S');
    $horas_de_trabalho = explode(':', $horas_de_trabalho);
    $horas_de_trabalho = $horas_de_trabalho[0] + $horas_de_trabalho[1] / 60;

    //? Se o turno virar no dia seguinte
    if ($db['inicio'] > $db['fim']) {
      $horas_de_trabalho = 24 - $horas_de_trabalho;
    }

    $horas_de_trabalho = number_format($horas_de_trabalho, 2);

    $res = [
      'turno' => $turno_atual,
      'turno_id' => $turnos[$turno_atual]['id'],
      'dia' => $dia_atual,
      'inicio' => $db['inicio'],
      'fim' => $db['fim'],
      'horas_de_trabalho' => $horas_de_trabalho,
    ];
    return $res;
  };

?>