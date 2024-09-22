<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/verificar-turno.php';
  // acessApi('notificacoes', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
	}

  /*
    ? Notificação Status
    * 0 - Não notificado
    * 1 - Notificado de nova tarefa
    * 2 - Notificado de tarefa quase vencida
  */

  //? Verifica se o usuário está logado como gerente
  $user_id = $_SESSION['id'];

  $sql = "SELECT * FROM funcionarios WHERE id = $user_id AND gerente = 'true'";
  $res = $conn->query($sql);

  if ($res->num_rows == 0) {
    send([
      'status' => 403,
      'message' => 'Acesso negado, apenas gerentes recebem as notificações'
    ]);
  }

  //* Verifica se esse é o turno do gerente
  $db = $res->fetch_assoc();
  $turno_id = $db['turno_id'];
  $turno_id_atual = verificarTurno()['turno_id'];

  if ($turno_id !== $turno_id_atual) {
    send([
      'status' => 403,
      'message' => 'Tarefas não encontradas, esse não é o seu turno',
    ]);
  }

  //? Puxa as informações das tarefas
  $tarefas = [];
  $sql = "SELECT * FROM tarefas WHERE ativo = 'true'";
  $res = $conn->query($sql);

  if ($res->num_rows > 0) {
    while ($db = $res->fetch_assoc()) {
      $tarefas[$db['id']] = $db;
    }
  }

  //? Verifica se há novas tarefas para serem realizadas
  $notificacoes = [];

  $sql = "SELECT * FROM controle_tarefas WHERE status = 'Em andamento' AND notificacao_status = 0";
  $res = $conn->query($sql);

  if ($res->num_rows > 0) {
    while ($db = $res->fetch_assoc()) {

      $titulo = $tarefas[$db['tarefa_id']]['nome'];
      $mensagem = 'Uma nova tarefa foi atribuída a você';

      $notificacoes[] = [
        'titulo' => $titulo,
        'mensagem' => $mensagem,
      ];

      //* Atualiza o status da notificação
      $sql = "UPDATE controle_tarefas SET notificacao_status = 1 WHERE id = ".$db['id'];
      $conn->query($sql);
    }
  }

  //? Verifica se há tarefas quase vencidas (considerando 1 até 3 min até o atraso)
  $sql = "SELECT * FROM controle_tarefas WHERE status = 'Em andamento' AND notificacao_status = 1";
  $res = $conn->query($sql);

  if ($res->num_rows > 0) {
    while ($db = $res->fetch_assoc()) {

      $prazo = strtotime($db['prazo']);
      $atual = strtotime(date('Y-m-d H:i:s'));
      $diferenca = $prazo - $atual;

      if ($diferenca <= 180) {
        $titulo = 'Não se esqueça de '.$tarefas[$db['tarefa_id']]['nome'];
        $mensagem = 'Uma tarefa está prestes a vencer, complete-a o quanto antes';

        $notificacoes[] = [
          'titulo' => $titulo,
          'mensagem' => $mensagem,
        ];

        //* Atualiza o status da notificação
        $sql = "UPDATE controle_tarefas SET notificacao_status = 2 WHERE id = ".$db['id'];
        $conn->query($sql);
      }
    }
  }

  $novas_notificacoes = false;
  if (count($notificacoes) > 0) {
    $novas_notificacoes = true;
  }

  send([
    'status' => 200,
    'novas_notificacoes' => $novas_notificacoes,
    'notificacoes' => $notificacoes
  ]);

?>