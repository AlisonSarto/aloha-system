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
    $data[] = [
      'hora' => date('H').':00',
      'producao' => 0,
      'atual' => 0,
      'estimativa' => 0
    ];

    send([
      'status' => 200,
      'meta_hora' => 0,
      'meta_dia' => 0,
      'meta_falta' => 0,
      'producao_total' => 0,
      'data' => $data
    ]);
  }

  //? Puxa o turno atual
  $sql = "SELECT * FROM turnos WHERE id = $turno_id";
  $res = $conn->query($sql);
  $db = $res->fetch_assoc();

  $inicio = $db['inicio'];
  $fim = $db['fim'];

  //? Calcula as horas trabalhadas
  $horaInicio = new DateTime($inicio);
  $horaFim = new DateTime($fim);

  //* Verificar se o horário de fim é menor que o início (caso cruzando a meia-noite)
  if ($horaFim < $horaInicio) {
    $horaFim->modify('+1 day');
  }

  $intervalo = $horaInicio->diff($horaFim);

  $horas = $intervalo->h;
  $minutos = $intervalo->i;

  $horas_trabalhadas = $horas + ($minutos / 60);
  
  //? Puxa a produção
  $inicio_data = date('Y-m-d').' '.$inicio;
  $fim_data = date('Y-m-d').' '.$fim;

  $sql = "SELECT * FROM entradas WHERE dia BETWEEN '$inicio_data' AND '$fim_data' AND turno_id = $turno_id";
  $res = $conn->query($sql);

  $hora_ultima_entrada = $inicio;
  $producao = [];
  $producao_total = 0;

  while ($db = $res->fetch_assoc()) {

    $hora_entrada = new DateTime($db['dia']);
    $hora_entrada = $hora_entrada->format('H');    

    if(isset($producao[$hora_entrada])) {
      $producao[$hora_entrada] += (int) $db['qtd'];
    } else {
      $producao[$hora_entrada] = (int) $db['qtd'];
    }

    $producao_total += (int) $db['qtd'];
    
    $hora_ultima_entrada = $db['dia'];
    $hora_ultima_entrada = new DateTime($hora_ultima_entrada);
    $hora_ultima_entrada = $hora_ultima_entrada->format('H');

  }

  //? Puxa a meta do dia
  $sql = "SELECT * FROM metas WHERE ativo = 'true'";
  $res = $conn->query($sql);
  $db = $res->fetch_assoc();

  $meta_hora = (int) $db['meta'];
  $meta_dia = (int) ($meta_hora * ($horas_trabalhadas - 1));

  //? Calculo estimativa do que falta
  $meta_falta = $meta_dia - $producao_total;
  $meta_falta = $meta_falta < 0 ? 0 : $meta_falta;
  $horas_restantes = $horas_trabalhadas - (date('H') - $horaInicio->format('H'));
  $estimativa = (int) ($meta_falta / $horas_restantes);

  //* Com todos os dados criamos o objeto
  $n = $horaInicio->format('H');
  $y = $horaFim->format('H');
  if ($horaFim->format('i') > 0) {
    $y++;
  }
  $data = [];

  //? Preenche o objeto com os dados
  while ($n < $y) {

    if ($n == date('H')){
      $data[] = [
        'hora' => $n.':00',
        'producao' => 0,
        'atual'=> $producao[$n] ?? 0,
        'estimativa' => 0
      ];
    }elseif ($n <= date('H')) {
      $data[] = [
        'hora' => $n.':00',
        'producao' => $producao[$n] ?? 0,
        'atual' => 0,
        'estimativa' => 0
      ];
    } else {
      $data[] = [
        'hora' => $n.':00',
        'producao' => 0,
        'atual' => 0,
        'estimativa' => $estimativa
      ];
    }
    
    $n++;
  }

  send([
    'status' => 200,
    'meta_hora' => $meta_hora,
    'meta_dia' => $meta_dia,
    'meta_falta' => $meta_falta,
    'producao_total' => $producao_total,
    'data' => $data
  ]);

?>