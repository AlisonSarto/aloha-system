<?php

  //? Edita um rosto

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('aloha-id', 'gerenciar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $nome = $_POST['nome'] ?? null;
    $img = $_POST['img'] ?? null;

    if ($id && $nome && $img) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $nome = $conn->real_escape_string($nome);
      $img = $conn->real_escape_string($img);

      //? Verifica se existe o rosto
      $sql = "SELECT * FROM rostos WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os rostos',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 400,
          'message' => 'Rosto não encontrado'
        ]);
      }

      $custom_id = $res->fetch_assoc()['biopass_id'];
      $custom_id = (string) $custom_id;

      //? Verifica se já existe um rosto com esse nome
      $sql = "SELECT * FROM rostos WHERE nome = '$nome' AND id != '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar os rostos com esse nome',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows > 0) {
        send([
          'status' => 409,
          'message' => 'Já existe um rosto com esse nome'
        ]);
      }

      //? Edita o rosto na api da BioPass
      if (env('BIO_RUN') === 'true') {
  
        $bio_token = env('BIO_TOKEN');

        $url = 'https://api.biopassid.com/multibiometrics/update';
        $method = 'PUT';
        $headers = [
          "Ocp-Apim-Subscription-Key: $bio_token",
        ];
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

      //? Edita o rosto
      $sql = "UPDATE rostos SET nome = '$nome', img = '$img' WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao editar o rosto',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Cargo editado com sucesso'
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