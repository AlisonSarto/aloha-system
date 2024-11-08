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
    $semana = $data->format('W/Y');
    $semana_dias[$semana][] = $data->format('Y-m-d');
  }

  //? Puxa todas as entradas
  $sql = "SELECT * FROM entradas ORDER BY dia DESC";
  $res = $conn->query($sql);
  $entradas = $res->fetch_all(MYSQLI_ASSOC);
  
  //* Junta os valores
  $res = [];
  foreach ($entradas as $entrada) {

    $dia = $entrada['turno_dia'];
    $turno = $entrada['turno'];
    $qtd = (int) $entrada['qtd'] ?? 0;

    $res[$dia][$turno]['meta'] = (int)$entrada['meta'];
    $res[$dia][$turno]['meta_dia'] = (int) ((int)$entrada['meta'] * $entrada['horas_de_trabalho']);

    if ($res[$dia][$turno]['meta_dia'] >= 1) {
      $res[$dia][$turno]['meta_dia']--;
    }

    if (empty($res[$dia][$turno]['qtd'])) {
      $res[$dia][$turno]['qtd'] = $qtd;
    }else {
      $res[$dia][$turno]['qtd'] += $qtd;
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
            'meta_dia' => 0,
          ];
        }else {
          $data[] = [
            'semana' => $semana,
            'dia' => $dia,
            'turno' => $turno,
            'qtd' => $res[$dia][$turno]['qtd'],
            'meta_dia' => $res[$dia][$turno]['meta_dia'],
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