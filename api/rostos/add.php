<?php

  //? Cria um rosto

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('rostos', 'adicionar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = $_POST['nome'] ?? null;
    $img = $_POST['img'] ?? null;

    if ($nome && $img) {

      //* Previne o SQL Injection
      $nome = $conn->real_escape_string($nome);
      $img = $conn->real_escape_string($img);

      //? Verifica se já existe um rosto com esse nome
      $sql = "SELECT * FROM rostos WHERE nome = '$nome'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os rostos',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um rosto com esse nome'
        ]);
      }

      //* Cria um id que não exista no banco de dados
      $custom_id = rand(1, 999999999);
      $sql = "SELECT * FROM rostos WHERE id = '$custom_id'";
      $res = $conn->query($sql);
      while ($res->num_rows > 0) {
        $custom_id = rand(1, 999999999);
        $sql = "SELECT * FROM rostos WHERE id = '$custom_id'";
        $res = $conn->query($sql);
      }
      $custom_id = (string) $custom_id;

      //? Adiciona o rosto na api da BioPass
      if (env('BIO_RUN') === 'true') {
        
        $bio_token = env('BIO_TOKEN');

        $url = 'https://api.biopassid.com/multibiometrics/enroll';
        $method = 'POST';
        $headers = ["Ocp-Apim-Subscription-Key: $bio_token"];
        $data = [
          'Person' => [
            'CustomID' => $custom_id,
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

      }

      //? Cria o rosto
      $sql = "INSERT INTO rostos (biopass_id, nome, img) VALUES ($custom_id, '$nome', '$img')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar o usuário',
          'error' => $conn->error
        ]);
      }

      $id = $conn->insert_id;

      send([
        'status' => 200,
        'message' => 'Usuário criado com sucesso',
        'rosto_id' => $id,
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