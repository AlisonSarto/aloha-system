<?php

  //? Verifica um ponto com rosto

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
    $img = $_POST['img'] ?? null;

    if ($rosto_id && $img) {

      //* Previne o SQL Injection
      $rosto_id = $conn->real_escape_string($rosto_id);
      $img = $conn->real_escape_string($img);

      $dia = date('Y-m-d H:i');
      $intervalo = 3; //? Minutos
      $dia_2 = date('Y-m-d H:i', strtotime("-$intervalo minutes", strtotime($dia)));

      //? Verifica se o ponto já foi registrado durante o intervalo
      $sql = "SELECT * FROM pontos WHERE rosto_id = $rosto_id AND dia BETWEEN '$dia_2' AND '$dia'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar pontos anteriores'
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 400,
          'message' => "Você marcou um ponto nos últimos $intervalo minutos"
        ]);
      }

      //? Verifica se o rosto existe
      $sql = "SELECT * FROM rostos WHERE id = $rosto_id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar rosto'
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 400,
          'message' => 'Rosto não encontrado'
        ]);
      }

      $db = $res->fetch_assoc();
      $biopass_id = $db['biopass_id'];

      //? Verifica na api da BioPass
      if (env('BIO_RUN') === 'true') {
        
        $bio_token = env('BIO_TOKEN');

        $url = 'https://api.biopassid.com/multibiometrics/verify';
        $method = 'POST';
        $headers = ["Ocp-Apim-Subscription-Key: $bio_token"];
        $data = [
          'Person' => [
            'CustomID' => $biopass_id,
            'Face' => array(
              ['Face-1' => $img]
            )
          ]
        ];

        $response = curl($url, $headers, $method, $data);

        if ($response['isJson'] === false) {

          if ($response['message'] === "Failed to extract face template") {
            send([
              'status' => 400,
              'message' => "Rosto não reconhecido, tente tirar outra foto",
              'biopass_erro' => $response
            ]);
          }else {
            send([
              'status' => 500,
              'message' => "Erro interno da BioPass, tente novamente",
              'biopass_erro' => $response
            ]);
          }

        }

        $message = $response['message'];
        $match = $message['Person']['Match'];

        if ($match !== true) {
          send([
            'status' => 400,
            'message' => "Rosto recusado",
            'biopass_erro' => $response
          ]);
        }

      }

      send([
        'status' => 200,
        'message' => 'Rosto verificado e aceitado com sucesso'
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