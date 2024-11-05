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

  //? Mescla os arrays semanas e dias
  $semana_dias = [];
  foreach ($dias as $dia) {
    $data = new DateTime($dia);
    $semana = $data->format('W-Y');
    $semana_dias[$semana][] = $data->format('Y-m-d');
  }

  //? Puxa todas as entradas
  $sql = "SELECT * FROM entradas";
  $res = $conn->query($sql);
  $entradas = $res->fetch_all(MYSQLI_ASSOC);
  
  //* Junta os valores
  $res = [];
  foreach ($entradas as $entrada) {

    $dia = $entrada['turno_dia'];
    $turno = $entrada['turno'];

    if (!isset($res[$dia][$turno])) {
      $res[$dia][$turno]['qtd'] = (int)$entrada['qtd'];

      $res[$dia][$turno]['meta'] = (int)$entrada['meta'];
      $res[$dia][$turno]['meta_dia'] = (int)((int)$entrada['meta'] * $entrada['horas_de_trabalho']);
      $res[$dia][$turno]['cenario'] = $entrada['cenario'];
      $res[$dia][$turno]['funcionarios'] = json_decode($entrada['funcionarios']);

      // cria tbm o horas, onde ela vai criar um array com cada hora com base no $entrada['inicio'] e $entrada['fim'] sendo eles em hh:mm
      $inicio = strtotime($entrada['inicio_turno']) ?? null;
      $fim = strtotime($entrada['fim_turno']) ?? null;
      $horas = [];
      
      if ($inicio && $fim) {
        for ($i = $inicio; $i <= $fim; $i = strtotime('+1 hour', $i)) {
          $horas[] = date('H:i', $i);
        }
  
        foreach ($horas as $hora) {
          $res[$dia][$turno]['entradas_hora'][$hora] = 0;
        }
  
        $hora_atual = date('H', strtotime($entrada['dia'])) . ':00';
        $res[$dia][$turno]['entradas_hora'][$hora_atual] = (int)$entrada['qtd'];
      }else {
        $res[$dia][$turno]['entradas_hora'] = new stdClass();
      }

    }else {
      $res[$dia][$turno]['qtd'] += $entrada['qtd'];
      if (!empty((array)$res[$dia][$turno]['entradas_hora'])) {
        $hora_atual = date('H', strtotime($entrada['dia'])) . ':00';
        $res[$dia][$turno]['entradas_hora'][$hora_atual] += (int)$entrada['qtd'];
      }
    }
  }

  //* Formata o resultado
  $data = [];
  foreach ($semana_dias as $semana => $dias) {
    foreach ($dias as $dia) {
      foreach ($turnos as $turno) {

        $turno = $turno['turno'];
        if (empty($res[$dia][$turno])) {
          $data[] = [
            'semana' => $semana,
            'dia' => $dia,
            'turno' => $turno,
            'qtd' => 0,
            'meta' => 0,
            'meta_dia' => 0,
            'cenario' => 'Não teve produção',
            'entradas_hora' => new stdClass(),
            'funcionarios' => []
          ];
        }else {
          $data[] = [
            'semana' => $semana,
            'dia' => $dia,
            'turno' => $turno,
            'qtd' => $res[$dia][$turno]['qtd'],
            'meta' => $res[$dia][$turno]['meta'],
            'meta_dia' => $res[$dia][$turno]['meta_dia'],
            'cenario' => $res[$dia][$turno]['cenario'],
            'entradas_hora' => $res[$dia][$turno]['entradas_hora'],
            'funcionarios' => $res[$dia][$turno]['funcionarios'] ?? [],
          ];
        }

      }
    }
  }

  send([
    'status' => 200,
    'data' => $data
  ]);

?>