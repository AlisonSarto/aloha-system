<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('power-bi', 'cenario');

  if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
  }

  //? Puxa o dias de todas as entradas sem repitir
  $sql = "SELECT DISTINCT turno_dia FROM entradas";
  $res = $conn->query($sql);
  $db = $res->fetch_all(MYSQLI_ASSOC);
  foreach ($db as $dia) {
    $dias[] = $dia['turno_dia'];
  }

  //? Puxa os turnos 
  $sql = "SELECT * FROM turnos";
  $res = $conn->query($sql);
  $turnos = $res->fetch_all(MYSQLI_ASSOC);

  //? Puxa as entradas completas
  $sql = "SELECT * FROM entradas";
  $res = $conn->query($sql);
  $db = $res->fetch_all(MYSQLI_ASSOC);

  $data = [];
  //? passar por cada dia (dia é um array)
  foreach ($dias as $dia) {
    foreach ($turnos as $turno) {
      foreach ($db as $entrada) {

        if ($entrada['turno_dia'] === $dia && $entrada['turno_id'] === $turno['id']) {

          $funcionarios = $entrada['funcionarios'];
          $funcionarios = json_decode($funcionarios, true);

          $funcionarios_form = [];
          if ($funcionarios !== null) {
            foreach ($funcionarios as $funcionario) {
              $funcionarios_form[] = $funcionario['nome'] . ' -> ' . $funcionario['setor'];
            }
          }

          $data[] = [
            'dia' => $dia,
            'turno_id' => $turno['id'],
            'turno' => $turno['nome'],
            'cenario' => $entrada['cenario'],
            'funcionarios' => $funcionarios_form
          ];
          continue 2;
        }

      }
    }

  }
  

  send([
    'status' => 200,
    'data' => $data
  ]);

?>