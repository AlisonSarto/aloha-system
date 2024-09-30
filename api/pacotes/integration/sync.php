<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acessApi('pacotes', 'visualizar');

  $token = env('G-CLICK_TOKEN');
  $secret = env('G-CLICK_SECRET');
  $loja_id = (int) env('G-CLICK_LOJA_ID_FABRICA');

  //? Puxa vendas já analizadas
  $sql = "SELECT * FROM vendas_gc";
  $res = $conn->query($sql);
  
  $vendas_analisadas = [];
  while ($db = $res->fetch_assoc()) {
    $vendas_analisadas[] = (int) $db['codigo'];
  }

  //? Verificas quais situações de venda são aceitas
  $url = "https://api.gestaoclick.com/situacoes_vendas";
  $method = 'GET';
  $headers = [
    "access-token: $token",
    "secret-access-token: $secret"
  ];
  $data = [];

  $response = curl($url, $headers, $method, $data);

  if ($response['message']['data'] == 'Não há dados!') {
    send([
      'status' => 404,
      'message' => 'Nenhuma situação de venda encontrada'
    ]);
  }
  
  $data_situacoes = $response['message']['data'];

  $situacoes = [];
  foreach ($data_situacoes as $key => $value) {
    if ($value['lancar'] == 1 || $value['lancar'] == 2) {
      $situacoes[] = $value['id'];
    }
  }

  //? Verifica as vendas do Gestão Click
  function verificar_vendas_gc($pagina = 1) {
    global $token, $secret, $loja_id, $situacoes, $vendas_analisadas, $vendas;

    $url = "https://api.gestaoclick.com/vendas";
    $method = 'GET';
    $headers = [
      "access-token: $token",
      "secret-access-token: $secret"
    ];
    $data = [
      'loja_id' => $loja_id,
      'pagina' => $pagina
    ];

    $response = curl($url, $headers, $method, $data);

    if ($response['message']['data'] == 'Não há dados!') {
      send([
        'status' => 404,
        'message' => 'Nenhuma venda encontrada!'
      ]);
    }

    $data_vendas = $response['message']['data'];
    $proxima_pagina = $response['message']['meta']['proxima_pagina'];

    //* Armazena as vendas
    foreach ($data_vendas as $key => $value) {
      $venda_id = (int) $value['codigo'];
      $situacao_id = (int) $value['situacao_id'];

      if (in_array($venda_id, $vendas_analisadas) && !in_array($situacao_id, $situacoes)) {
        continue;
        // Essa venda já foi lançada mas está em aberto, retornar estoque
      }

      if (!in_array($situacao_id, $situacoes)) {
        continue;
      }

      if (in_array($venda_id, $vendas_analisadas)) {
        continue;
      }

      $vendas[] = [
        'codigo' => $venda_id,
        'produtos' => $value['produtos']
      ];
    }

    if ($proxima_pagina != null) {
      verificar_vendas_gc($proxima_pagina);
    }
    
  }

  $vendas = [];
  verificar_vendas_gc();

  if (count($vendas) == 0) {
    send([
      'status' => 200,
      'message' => 'Nenhuma venda nova encontrada'
    ]);
  }

  //? Da baixa nas vendas novas
  foreach ($vendas as $key => $venda) {

    $venda_id = $venda['codigo'];

    $pedido = $venda['produtos'];
    foreach ($pedido as $key => $value) {
      $pacote = $value['produto'];
      $integration = $pacote['produto_id'];

      if ($integration == "") {
        continue;
      }

      $qtd = $pacote['quantidade'];
      $qtd = explode('.', $qtd);
      $qtd = $qtd[0];

      //* Verifica se está vinculado a um pacote
      $sql = "SELECT * FROM pacotes WHERE integration = $integration";
      $res = $conn->query($sql);

      if ($res->num_rows == 0) {
        continue;
      }

      $db = $res->fetch_assoc();
      $pacote_id = $db['id'];
      $qtd_antiga = $db['qtd'];
      $qtd_final = $qtd_antiga - $qtd;

      //* Atualiza o estoque
      $sql = "UPDATE pacotes SET qtd = qtd - $qtd WHERE integration = $integration";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao dar baixa no estoque',
          'error' => $conn->error
        ]);
      }


      //* Cria a mov
      $now = date('Y-m-d H:i:s');
      $tipo = "Saída - $venda_id";
      $sql = "INSERT INTO mov (tipo, qtd_mov, qtd_final, produto_id, produto_tipo, dia)
              VALUES ('$tipo', $qtd, $qtd_final, $pacote_id, 'pacotes', '$now')";
      $res = $conn->query($sql);

      if ($res === false) {
        send([
          'status' => 500,
          'message' => 'Erro ao criar a movimentação',
          'error' => $conn->error
        ]);
      }

    }

    //* Marca como analizada
    $sql = "INSERT INTO vendas_gc (codigo) VALUES ($venda_id)";
    $res = $conn->query($sql);

    if ($res === false) {
      send([
        'status' => 500,
        'message' => 'Erro ao atualizar a ultima venda analisada',
        'error' => $conn->error
      ]);
    }

  }

  send([
    'status' => 200,
    'message' => 'Vendas lançadas com sucesso!',
  ]);

?>