<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  acessApi('tarefas', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}

  function adverencia($tarefa_id) {
    global $conn;

    $turno = verificarTurno();
    $turno_id = $turno['turno_id'];

    //? Puxa a pontuação de advertencia
    $sql = "SELECT * FROM tarefas WHERE id = $tarefa_id";
    $res = $conn->query($sql);

    if ($res->num_rows === 0) {
      return;
    }

    $db = $res->fetch_assoc();
    $pontuacao = $db['pontuacao'];
    $nome_tarefa = $db['nome'];

    $sql = "SELECT * FROM funcionarios WHERE turno_id = $turno_id AND gerente = 'true'";
    $res = $conn->query($sql);

    while ($db = $res->fetch_assoc()) {

      $id = $db['id'];
      
      //? Remove a pontuação
      $sql = "UPDATE funcionarios SET pontuacao = pontuacao - $pontuacao WHERE id = $id";
      $conn->query($sql);

      $pontuacao_final = $db['pontuacao'] - $pontuacao;
      $tipo = '-';
      $obs = "Advertência por atraso na tarefa: $nome_tarefa";
      $dia = date('Y-m-d H:i:s');

      //? Cria a mov de pontuaçõa
      $sql = "INSERT INTO mov_pontuacao (funcionario_id, tipo, obs, pontuacao_mov, pontuacao_final, dia) VALUES ($id, '$tipo', '$obs', $pontuacao, $pontuacao_final, '$dia')";
      $conn->query($sql);

    }
  }
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    //* Verifica se o usuário está logado como gerente
    $user_id = $_SESSION['id'];
    $sql = "SELECT * FROM funcionarios WHERE usuario_id = $user_id";
    $res = $conn->query($sql);
    $db = $res->fetch_assoc();

    if ($res->num_rows === 0 || $db['gerente'] === 'false') {
      send([
        'status' => 404,
        'message' => 'Tarefas não encontradas',
        'error' => 'Usuário não é gerente'
      ]);
    }

    //* Verifica se esse é o turno do gerente
    $turno_id = $db['turno_id'];
    $turno_id_atual = verificarTurno()['turno_id'];

    if ($turno_id !== $turno_id_atual) {
      send([
        'status' => 404,
        'message' => 'Tarefas não encontradas',
        'error' => 'Gerente não está no turno correto'
      ]);
    }

    //? Puxa todas as tarefas
    $sql = "SELECT * FROM tarefas WHERE ativo = 'true'";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar tarefas',
        'error' => $conn->error
      ]);
    }

    $tarefas = [];
    while ($db = $res->fetch_assoc()) {
      $tarefas[$db['id']] = $db;
    }
    
    //? Puxa o controle das tarefas
    $sql = "SELECT * FROM controle_tarefas ORDER BY prazo";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar tarefas',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows > 0) {

      $data = [];
      while ($db = $res->fetch_assoc()) {
        $db['tarefa'] = $tarefas[$db['tarefa_id']];
        $id = $db['id'];
        $tarefa_id = $db['tarefa_id'];
        $proximo_intervalo = $db['prox_intervalo'];
        $prazo = $db['prazo'];
        $status = $db['status'];

        $db['tempo_para_prazo'] = (int) ((strtotime($db['prazo']) - strtotime(date('Y-m-d H:i:s'))) / 60);

        //? Atualizar o proximo intervalo, se tiver
        $proximo_intervalo = $db['prox_intervalo'];
        while (date('Y-m-d H:i:s') > $proximo_intervalo) {

          //* Antes de atualizar, dá advertencia se a tarefa está atrasada
          if (date('Y-m-d H:i:s') > $prazo && $status !== 'Concluída') {
            $sql = "UPDATE controle_tarefas SET status = 'Atrasada' WHERE id = $id";
            $conn->query($sql);

            //* Advertencia
            adverencia($tarefa_id);
          }

          $sql = "SELECT * FROM tarefas WHERE id = ".$db['tarefa_id'];
          $res2 = $conn->query($sql);
          $db2 = $res2->fetch_assoc();
          $intervalo_min = $db2['intervalo'];
          $prazo_min = $db2['prazo'];
          
          $proximo_intervalo_db = $db['prox_intervalo'];
          $prazo_db = $db['prazo'];

          $proximo_intervalo = date('Y-m-d H:i:s', strtotime($proximo_intervalo_db . ' +'.$intervalo_min.' minutes'));
          $prazo = date('Y-m-d H:i:s', strtotime($proximo_intervalo_db . ' +'.$prazo_min.' minutes'));

          $sql = "UPDATE controle_tarefas SET prox_intervalo = '$proximo_intervalo', prazo = '$prazo', status = 'Em andamento', notificacao_status = 0 WHERE id = $id";
          $conn->query($sql);

          $status = 'Em andamento';
        }

        if (date('Y-m-d H:i:s') > $prazo && $status !== 'Concluída' && $status !== 'Atrasada') {
          $sql = "UPDATE controle_tarefas SET status = 'Atrasada' WHERE id = $id";
          $conn->query($sql);

          $status = 'Atrasada';

          //* Advertencia
          adverencia($tarefa_id);
        }

        //? Atualiza o a $db
        $db['prox_intervalo'] = $proximo_intervalo;
        $db['prazo'] = $prazo;
        $db['status'] = $status;
        $db['tempo_para_prazo'] = (int) ((strtotime($db['prazo']) - strtotime(date('Y-m-d H:i:s'))) / 60);

        $data[] = $db;
      }

      send([
        'status' => 200,
        'tarefas' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'Tarefa(s) não encontrada(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>