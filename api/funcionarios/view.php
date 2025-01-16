<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('funcionarios', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    //? Puxa as maquinas
    $sql = "SELECT * FROM maquinas";
    $res = $conn->query($sql);

    $maquinas = [];
    while ($db = $res->fetch_assoc()) {
      $maquinas[$db['id']] = $db['nome'];
    }
    $maquinas['0'] = 'Sem maquina';

    //? Puxa os turnos
    $sqlTurnos = "SELECT * FROM turnos";
    $resTurnos = $conn->query($sqlTurnos);
    $turnos = [];
    while ($db = $resTurnos->fetch_assoc()) {
      $turnos[$db['id']] = $db['nome'];
    }

    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um funcionario específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM funcionarios WHERE id = $id ORDER BY ativo DESC, turno_id ASC";
    } else {
      
      //? Puxa todos os funcionarios
      $sql = "SELECT * FROM funcionarios ORDER BY ativo DESC, turno_id ASC";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar funcionarios',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows === 0) {
      send([
        'status' => 404,
        'message' => 'Funcionário(s) não encontrado(s)'
      ]);
    }

    while ($db = $res->fetch_assoc()) {
      $db['turno'] = $turnos[$db['turno_id']];
      $db['maquina'] = $maquinas[$db['maquina_id']];
      $db['foto'] = '/api/funcionarios/view-foto?id='.$db['id'];
      if (isset($_GET['id'])) {
        $data = $db;
      } else {
        $data[] = $db;
      }
    }

    send([
      'status' => 200,
      'funcionarios' => $data
    ]);

	} else {
		send([
      'status' => 404,
      'message' => 'Método não suportado'
    ]);
	}

?>