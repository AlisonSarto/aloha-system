<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('sabores', ['visualizar', 'entrada', 'saida']);

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $data = [];
    if (isset($_GET['id']) && !empty($_GET['id'])) {
      $id = $_GET['id'] ?? null;

      if (strpos($id, ',') !== false) {
        $ids = explode(',', $id);
        $ids = array_map(function($id) use ($conn) {
          return mysqli_real_escape_string($conn, $id);
        }, $ids);
        $sql = "SELECT * FROM sabores WHERE id IN (" . implode(',', $ids) . ")";
      } else {
        $id = mysqli_real_escape_string($conn, $id);
        $sql = "SELECT * FROM sabores WHERE id = $id";
      }
      
    } else {
      
      //? Puxa todos os sabores
      $sql = "SELECT * FROM sabores ORDER BY sabor";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar o(s) sabor(es)',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows > 0) {
      $num = $res->num_rows;
      while ($db = $res->fetch_assoc()) {
        if (isset($_GET['id'])) {
          if (strpos($id, ',') === false) {
            $data = $db;
          } else {
            $data[] = $db;
          }
        } else {
          $data[] = $db;
        }
      }

      send([
        'status' => 200,
        'sabores' => $data
      ]);

    } else {
      send([
        'status' => 404,
        'message' => 'Sabor(es) não encontrado(s)'
      ]);
    }

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>