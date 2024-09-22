<?php

  //? Edita um pacote - qtd

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('pacotes', 'editar');

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'] ?? null;
    $qtd = $_POST['qtd'] ?? null;

    if ($id && $qtd >= 0) {

      //* Previne o SQL Injection
      $id = $conn->real_escape_string($id);
      $qtd = $conn->real_escape_string($qtd);

      //? Verifica se o pacote existe
      $sql = "SELECT * FROM pacotes WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao verificar se o pacote existe',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 0) {
        send([
          'status' => 404,
          'message' => 'Pacote não encontrado',
        ]);
      }
      
      //? Cria a mov
      $db = $res->fetch_assoc();

      $qtd_db = $db['qtd'];
      $integration = $db['integration'];

      if ($qtd > $qtd_db)
      {
        $tipo = 'Ajuste (+)';
        $qtd_mov = $qtd - $qtd_db;
      }elseif ($qtd < $qtd_db)
      {
        $tipo = 'Ajuste (-)';
        $qtd_mov = $qtd_db - $qtd;
      }else
      {
        send([
          'status' => 400,
          'message' => 'A nova quantidade é igual a antiga'
        ]);
      }

      $qtd_final = $qtd;
      $produto_id = $id;
      $produto_tipo = 'pacotes';
      $dia = date('Y-m-d H:i:s');

      $sql = "INSERT INTO
                mov (
                  tipo,
                  qtd_mov,
                  qtd_final,
                  produto_id,
                  produto_tipo,
                  dia
                )
              VALUES (
                '$tipo',
                '$qtd_mov',
                '$qtd_final',
                '$produto_id',
                '$produto_tipo',
                '$dia'
              )
      ";
      $res = $conn->query($sql);
      
      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao adicionar a movimentação',
          'error' => $res->error
        ]);
      }

      //? Edita o pacote
      $sql = "UPDATE pacotes SET qtd = $qtd WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => "Erro ao editar a quantidade do pacote",
          'error' => $conn->error
        ]);
      }

      //? Envia para o Gestão Click
      if (env('G-CLICK_RUN') === 'true' && $integration !== null) {

        $token = env('G-CLICK_TOKEN');
        $secret = env('G-CLICK_SECRET');
        $loja_id = (int) env('G-CLICK_LOJA_ID_FABRICA');

        //* Puxa o pacote no Gestão Click
        $url = "https://api.gestaoclick.com/produtos";
        $method = 'GET';
        $headers = [
          "access-token: $token",
          "secret-access-token: $secret"
        ];
        $data = [
          'loja_id' => $loja_id,
          'id' => $integration
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

        $nomePacoteGestao = $response['data'][0]['nome'];

        //* Atualiza a quantidade do pacote no Gestão Click
        $url = "https://api.gestaoclick.com/produtos/$integration";
        $method = 'PUT';
        $headers = [
          "access-token: $token",
          "secret-access-token: $secret"
        ];
        $data = [
					'usuario_id' => 713076,
          'loja_id' => $loja_id,
          'nome' => $nomePacoteGestao,
          'estoque' => $qtd,
        ];

        $response = curl($url, $headers, $method, $data);

      }

      send([
        'status' => 200,
        'message' => 'Pacote editado com sucesso'
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