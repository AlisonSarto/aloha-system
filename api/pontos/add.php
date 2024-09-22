<?php

  //? Cria um ponto

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('aloha-id', ['gerenciar', 'verificar']);

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $rosto_id = $_POST['rosto_id'] ?? null;
    $dia = $_POST['dia'] ?? date('Y-m-d H:i');

    if ($rosto_id && $dia) {

      //* Previne o SQL Injection
      $rosto_id = $conn->real_escape_string($rosto_id);
      $dia = $conn->real_escape_string($dia);

      //? Verifica se existe o rosto
      $sql = "SELECT * FROM rostos WHERE id = $rosto_id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os usuarios',
          'error' => $conn->error
        ]);
      }else if ($res->num_rows === 0) {
        send([
          'status' => 400,
          'message' => 'Rosto não encontrado'
        ]);
      }

      $rosto_nome = $res->fetch_assoc()['nome'];

      //? Verifica se o ponto já existe
      $sql = "SELECT * FROM pontos WHERE rosto_id = '$rosto_id' AND dia = '$dia'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os pontos',
          'error' => $conn->error
        ]);
      }else if ($res->num_rows > 0) {
        send([
          'status' => 400,
          'message' => 'Ponto já existe'
        ]);
      }

      //? Verifica qual é o tipo do ponto
      $sql = "SELECT * FROM pontos WHERE rosto_id = $rosto_id AND dia < '$dia' ORDER BY dia DESC LIMIT 1";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os pontos anteriores',
          'error' => $conn->error
        ]);
      }
      
      $db = $res->fetch_assoc();

      if ($res->num_rows === 0) {
        $tipo = 'entrada';
      }else {
        $db_tipo = $db['tipo'];
        $tipo = $db_tipo == 'saida' ? 'entrada' : 'saida';
      }

      //? Cria o ponto
      $sql = "INSERT INTO pontos (rosto_id, rosto_nome, dia, tipo) VALUES ($rosto_id, '$rosto_nome', '$dia', '$tipo')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o ponto',
          'error' => $conn->error
        ]);
      }

      //? Muda a ordem dos pontos posteriores
      $sql = "UPDATE pontos 
                SET tipo =
                  CASE 
                    WHEN tipo = 'entrada' THEN 'saida'
                    WHEN tipo = 'saida' THEN 'entrada'
                  END
                WHERE dia > '$dia' AND rosto_id = $rosto_id
      ";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao atualizar os pontos posteriores',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Ponto criado com sucesso'
      ]);

    }else {
      send([
        'status' => 400,
        'message' => 'Dados inválidos'
      ]);
    }

  }else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>