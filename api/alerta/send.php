<?php

  //? Cria uma bonificação

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('bonificacao', 'adicionar');
  
	if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send([
      'status' => 405,
      'message' => 'Método não permitido'
    ]);
	}

  $text = $_POST['text'] ?? null;

  if (empty($text)) {
    send([
      'status' => 400,
      'message' => 'Dados insuficientes'
    ]);
  }

  function sendText($text) {
    $url = 'https://alerta.alohasystem.com.br/send-text';
    $header = ['content-type: application/json'];
    $method = 'POST';
    $data = ['text' => $text];

    return $response = curl($url, $header, $method, $data);
  }

  // faz um loop até dar certo
  $response = sendText($text);
  $attempts = 0;
  $maxAttempts = 5;
  
  while (!$response['isJson'] && $attempts < $maxAttempts) {
    $response = sendText($text);
    sleep(2);
    $attempts++;
  }

  send([
    'status' => 200,
    'message' => $response['message']
  ]);

?>