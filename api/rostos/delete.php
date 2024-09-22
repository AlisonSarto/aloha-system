<?php

  //? Delete um rosto

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('aloha-id', 'gerenciar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    if (isset($_GET['id'])) {

      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);

      //* Puxa o rosto
      $sql = "SELECT * FROM rostos WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar o rosto',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows === 0) {
        send([
          'status' => 404,
          'message' => 'Rosto não encontrado'
        ]);
      }

      $biopass_id = $res->fetch_assoc()['biopass_id'];
      $biopass_id = (string) $biopass_id;

      //? Deleta o rosto na api da BioPass
      if (env('BIO_RUN') === 'true') {

        $bio_token = env('BIO_TOKEN');

        $url = 'https://api.biopassid.com/multibiometrics/delete';
        $method = 'DELETE';
        $headers = ["Ocp-Apim-Subscription-Key: $bio_token"];
        $data = [
          'Person' => [
            'CustomID' => $biopass_id,
          ]
        ];

        $response = curl($url, $headers, $method, $data);

        if ($response['isJson'] === false) {
          send([
            'status' => 500,
            'message' => 'Erro ao deletar o rosto na BioPass',
            'error' => $response
          ]);
        }

      }

      //? Deleta o rosto
      $sql = "DELETE FROM rostos WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o rosto',
          'error' => $conn->error
        ]);  
      }

      //? Deleta os pontos
      $sql = "DELETE FROM pontos WHERE rosto_id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar os pontos',
          'error' => $conn->error
        ]);
      }

      send([
        'status' => 200,
        'message' => 'Rosto deletado com sucesso'
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