<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('usuarios', 'visualizar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (env('G-CLICK_RUN') === 'true') {

      //? ID do grupo do g-click onde os pacotes estão cadastrados
      $loja_id = (int) env('G-CLICK_LOJA_ID_FABRICA');

      $token = env('G-CLICK_TOKEN');
      $secret = env('G-CLICK_SECRET');

      $url = "https://api.gestaoclick.com/produtos";
      $method = 'GET';
      $headers = [
        "access-token: $token",
        "secret-access-token: $secret"
      ];
      $data = [
        'loja_id' => $loja_id,
      ];

      $response = curl($url, $headers, $method, $data);
      $response = $response['message'];

      if ($response['code'] !== 200) {
        send([
          'status' => 500,
          'message' => 'Erro ao buscar pacotes no Gestão Click',
          'error' => $response['message']
        ]);
      }

      $data = null;

      foreach ($response['data'] as $key => $value) {
        $data[] = [
          'id' => $value['id'],
          'nome' => $value['nome'],
          'estoque' => $value['estoque'],
        ];
      }
      
    }

    if (empty($data)) {
      send([
        'status' => 404,
        'message' => 'Nenhum pacote encontrado'
      ]);
    }

    send([
      'status' => 200,
      'message' => 'Pacotes encontrados',
      'pacotes' => $data
    ]);

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>