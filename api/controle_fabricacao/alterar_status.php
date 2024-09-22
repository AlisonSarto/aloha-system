<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/bonificacao_automatica.php';
  acessApi('controle_fabricacao', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}

  /* 
  * inicio = Em andamento
  * pausa = Pausada
  * retorno = Em andamento
  * fim = Finalizada
  */
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    //? Verifica se a situação é válida
    $situacoes = [
      'inicio',
      'pausa',
      'retorno',
      'fim'
    ];

    $situacao = $_POST['situacao'];

    if (!in_array($situacao, $situacoes)) {
      send([
        'status' => 400,
        'message' => 'Situação inválida',
        'situacao' => $situacao,
        'situacoes' => $situacoes,
      ]);
    }

    //? Verifica se a situação é válida para a situação anterior
    $possiveis_situacoes_anteriores = [
      'inicio' => [ 'fim' ],
      'pausa' => [ 'inicio', 'retorno' ],
      'retorno' => [ 'pausa' ],
      'fim' => [ 'retorno', 'inicio' ]
    ];

    $sql = "SELECT * FROM controle_fabricacao ORDER BY dia DESC LIMIT 1";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar controle_fabricacao',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows === 0) {
      $situacao_anterior = 'fim';
    }else {
      $data = $res->fetch_assoc();
      $situacao_anterior = $data['situacao'];
    }

    if (!in_array($situacao_anterior, $possiveis_situacoes_anteriores[$situacao])) {
      send([
        'status' => 400,
        'message' => 'Situação inválida para a situação anterior',
        'situacao' => $situacao,
        'situacao_anterior' => $situacao_anterior,
        'possiveis_situacoes_anteriores' => $possiveis_situacoes_anteriores[$situacao],
      ]);
    }

    //? Adiciona um registro no controle
    $turno = verificarTurno();
    $turno_id = $turno['turno_id'];

    $dia = date('Y-m-d H:i:s');

    $sql = "INSERT INTO controle_fabricacao (situacao, turno_id, dia) VALUES ('$situacao', $turno_id, '$dia')";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao alterar situação',
        'error' => $conn->error
      ]);
    }

    if ($situacao == 'inicio' || $situacao == 'retorno') {
      //* Inicia bonificação
      $sql = "SELECT * FROM automacoes WHERE id = 1";
      $res = $conn->query($sql);

      $db = $res->fetch_assoc();
      $ativo = $db['ativo'] ? true : false;
      
      $dia_bonificação = date('Y-m-d H:i:s', strtotime('+70 minutes'));

      $sql = "UPDATE proxima_bonificacao SET dia = '$dia_bonificação'";
      $res = $conn->query($sql);

      //* Inicia as tarefas
      $sql = "SELECT * FROM tarefas WHERE ativo = 'true'";
      $res = $conn->query($sql);

      $tarefas = [];
      while ($db = $res->fetch_assoc()) {
        $tarefas[] = $db;
      }

      foreach ($tarefas as $tarefa) {
        $tarefa_id = $tarefa['id'];
        $intervalo = $tarefa['intervalo'];
        $prazo = $tarefa['prazo'];

        $prox_intervalo = date('Y-m-d H:i:s', strtotime("+$intervalo minutes"));
        $prazo = date('Y-m-d H:i:s', strtotime("+$prazo minutes"));

        $sql = "INSERT INTO controle_tarefas (tarefa_id, prox_intervalo, prazo) VALUES ($tarefa_id, '$prox_intervalo', '$prazo')";
        $res = $conn->query($sql);
      }

    }else {
      //* Finaliza bonificação
      bonificacao_manual();

      //* Finaliza as tarefas
      $sql = "TRUNCATE controle_tarefas";
      $res = $conn->query($sql);
    }

    send([
      'status' => 200,
      'message' => 'Situação alterada com sucesso',
    ]);
    

	} else {
		send([
      'status' => 404,
      'message' => 'Método não aceito'
    ]);
	}

?>