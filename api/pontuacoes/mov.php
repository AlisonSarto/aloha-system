<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('pontuacoes', 'mov');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $id = $_GET['id'] ?? null;
    $limit = $_GET['limit'] ?? 100;

    if ($id === null) {
      send([
        'status' => 400,
        'message' => 'ID não informado'
      ]);
    }

    //? Puxa as pontuações de um funcinário
    $sql = "SELECT * FROM mov_pontuacao WHERE funcionario_id = $id ORDER BY dia DESC LIMIT $limit";

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao puxar as movimentações',
        'error' => $conn->error
      ]);
    }elseif ($res->num_rows === 0) {
      send([
        'status' => 404,
        'message' => 'Nenhuma movimentação encontrada'
      ]);
    }

    $pontos = [];
    while ($row = $res->fetch_assoc()) {
      $pontos[] = [
        'tipo' => $row['tipo'],
        'pontuacao_mov' => $row['tipo'] . " " . $row['pontuacao_mov'],
        'pontuacao_final' => $row['pontuacao_final'],
        'obs' => $row['obs'],
        'dia' => date('d/m/Y H:i:s', strtotime($row['dia'])),
      ];
    }

    send([
      'status' => 200,
      'limit' => $limit,
      'message' => 'Movimentações encontrados',
      'mov' => $pontos
    ]);

	} else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>