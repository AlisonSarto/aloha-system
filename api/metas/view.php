<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('metas', 'visualizar');
  
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $data = [];

    if (isset($_GET['id'])) {

      //? Puxa um meta específico
      $id = $_GET['id'];
      $sql = "SELECT * FROM metas WHERE id = $id";
    } else {
      
      //? Puxa todos os metas
      $sql = "SELECT * FROM metas ORDER BY qtd_funcionarios DESC";
    }

    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao consultar as metas',
        'error' => $conn->error
      ]);
    }

    if ($res->num_rows == 0) {
      send([
        'status' => 404,
        'message' => 'meta(s) não encontrado(s)'
      ]);
    }

    $data = [];
    while ($db = $res->fetch_assoc()) {
      $db['cenario'] = '/api/metas/view-cenario?id='.$db['id'];
      $data[] = $db;
    }

    $sql = "SELECT * FROM maquinas";
    $res = $conn->query($sql);
    $maquinas_data = [];
    while ($db = $res->fetch_assoc()) {
      $maquinas_data[] = $db;
    }

    //? Passa por todas as metas e adiciona as máquinas
    foreach ($data as $key => $meta) {

      $maquinas = json_decode($meta['maquinas'], true); //ex: [{"id": "8", "velocidade": "12"}, ...]
      $data[$key]['maquinas'] = json_decode($meta['maquinas'], true);
      
      foreach ($maquinas as $key2 => $maquina) {
        $maquina_id = $maquina['id'];
        $maquina = $maquinas_data[array_search($maquina_id, array_column($maquinas_data, 'id'))];
        $maquinas[$key2] = $maquina;
        $data[$key]['maquinas'][$key2]['nome'] = $maquina['nome'];
      }

      // $data[$key]['maquinas'] = $maquinas;
    }

    send([
      'status' => 200,
      'metas' => $data,
    ]);

	} else {
		send([
      'status' => 404,
      'message' => 'Não encontrado'
    ]);
	}

?>