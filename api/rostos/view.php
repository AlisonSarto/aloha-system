<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('aloha-id', ['gerenciar', 'verificar']);

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}

  function getPoints($id = null) {
    global $conn;
    $points = [];

    if ($id) {
      $sql = "SELECT * FROM pontos WHERE rosto_id = '$id'";
    } else {
      $sql = "SELECT * FROM rostos";
    }

    $res = $conn->query($sql);
    while ($db = $res->fetch_assoc()) {
      $face_id = $db['id'];
      $face_nome = $db['nome'];

      $sql = "SELECT * FROM pontos WHERE rosto_id = '$face_id' ORDER BY dia DESC LIMIT 1";
      $res2 = $conn->query($sql);
      
      if ($res2->num_rows > 0) {
        $base = $res2->fetch_assoc();
        
        $id = $base['rosto_id'];
        $stade = $base['tipo'] == 'entrada' ? 'true' : 'false';
  
        $points[$id] = $stade;
      }
    }

    return $points;
  }
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um rosto específico
      $id = $_GET['id'];
      $id = mysqli_real_escape_string($conn, $id);
      $sql = "SELECT * FROM rostos WHERE id = $id";
    } else {
      
      //? Puxa todos os rostos
      $sql = "SELECT * FROM rostos ORDER BY nome";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar rostos',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows > 0) {

      $points = getPoints($id ?? null);

      $data = [];
      while ($db = $res->fetch_assoc()) {

        $info = [
          "id" => $db['id'],
          "stade" => $points[$db['id']] ?? "false", //? "true" ou "false
          "nome" => $db['nome'],
          "img" => '/api/rostos/view-rosto?id='.$db['id'],
        ];

        if (isset($_GET['base64']) && $_GET['base64'] == 'true') {
          $info['base64'] = $db['img'];
        }

        if (isset($_GET['id'])) {
          $data = $info;
        } else {
          $data[] = $info;
        }
      }

      send([
        'status' => 200,
        'rostos' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'Rosto(s) não encontrado(s)'
      ]);
    }

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>