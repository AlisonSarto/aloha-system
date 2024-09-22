<?php

  //? Delete um ponto

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

      //? Verifica se o ponto existe
      $sql = "SELECT * FROM pontos WHERE id = $id";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao puxar pontos',
          'error' => $conn->error
        ]);
      }elseif ($res->num_rows == 0) {
        send([
          'status' => 404,
          'message' => 'Ponto não encontrado'
        ]);
      }

      $ponto = $res->fetch_assoc();
      $rosto_id = $ponto['rosto_id'];
      $dia = $ponto['dia'];

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
          'message' => 'Erro ao mudar a ordem dos pontos posteriores',
          'error' => $conn->error
        ]);  
      }

      //? Deleta o ponto
      $sql = "DELETE FROM pontos WHERE id = '$id'";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao apagar o ponto',
          'error' => $conn->error
        ]);  
      }

      send([
        'status' => 200,
        'message' => 'Ponto deletado com sucesso'
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