<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('dashboard', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $week = $_GET['week'] ?? date('o-W');
    $year = substr($week, 0, 4);
    $week = substr($week, 5);

    $dt = new DateTime();
    $dt->setISODate($year, $week);
    $inicio = $dt->format('Y-m-d');

    $dt->modify('+6 days');
    $fim = $dt->format('Y-m-d');
    
    //? Puxa os turnos
    $sql = "SELECT * FROM turnos";
    $res = $conn->query($sql);

    if ($res == false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar turnos',
        'error' => $conn->error
      ]);
    }

    $turnos = [];
    $turnos_id = [];

    while ($db = $res->fetch_assoc()) {
      $nome = $db['nome'];
      $id = $db['id'];

      $turnos[] = $nome;
      $turnos_id[$id] = $nome;
    }
    
    //? Puxa os dados do gráfico
    $sql = "SELECT * FROM entradas WHERE turno_dia BETWEEN '$inicio' AND '$fim'";
    $res = $conn->query($sql);

    if ($res == false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar dados do gráfico',
        'error' => $conn->error
      ]);
    }

    $values = [];

    while ($db = $res->fetch_assoc()) {
      $dia = $db['turno_dia'];
      $turno_id = $db['turno_id'];
      $turno = $db['turno'];
      $qtd = (int) $db['qtd'];

      if (empty($values[$dia][$turno_id])) {
        $values[$dia][$turno_id] = $qtd;
      } else {
        $values[$dia][$turno_id] += $qtd;
      }
    }

    $chart = [];
    $dt = new DateTime($inicio);
    $diaParaExibir = $dt->format('d/m');
    $diaParaArray = $dt->format('Y-m-d');

    for ($i = 0; $i < 7; $i++) {
      $val['x'] = $diaParaExibir;

      foreach ($turnos_id as $id => $nome) {
        $val[$nome] = $values[$diaParaArray][$id] ?? 0;
      }

      $chart[] = $val;

      $dt->modify('+1 day');
      $diaParaExibir = $dt->format('d/m');
      $diaParaArray = $dt->format('Y-m-d');
    }

    send([
      'status' => 200,
      'turnos' => $turnos,
      'chart' => $chart
    ]);

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>