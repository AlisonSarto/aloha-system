<?php

  //? Atualiza o consumo diario de acordo com as vendas do Gestão Click

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';

  $token = env('G-CLICK_TOKEN');
  $secret = env('G-CLICK_SECRET');

  $inicio = date('Y-m-d', strtotime('-30 day'));
  $fim = date('Y-m-d', strtotime('-1 day'));

  // Mapeamento dos nomes completos para nomes amigáveis
  $mapa_sabores = [
    'ALOHA GELO COCO 28 un' => 'Coco',
    'ALOHA GELO MORANGO 28 un' => 'Morango',
    'ALOHA GELO MAÇA VERDE 28 un' => 'Maçã Verde',
    'ALOHA GELO PESSEGO C/ MORANGO 28 un' => 'Pêssego',
    'ALOHA GELO MELANCIA 28 un' => 'Melancia',
    'ALOHA GELO MARACUJÁ 28 un' => 'Maracujá',
    'ALOHA GELO PITAYA 28 un' => 'Pitaya',
    'ALOHA GELO LIMÃO 28 un' => 'Limão',
    'ALOHA GELO LARANJA 28 un' => 'Laranja',
  ];


  $vendas = [];
  $proxima_pagina = 1;

  while ($proxima_pagina !== null) {
    $url = 'https://api.beteltecnologia.com/vendas';
    $headers = [
      "access-token: $token",
      "secret-access-token: $secret"
    ];
    $method = 'GET';
    $data = [
      'data_inicio' => $inicio,
      'data_fim' => $fim,
      'situacao_id' => 3395254,
      'pagina' => $proxima_pagina,
    ];

    $response = curl($url, $headers, $method, $data);

    $proxima_pagina = $response['message']['meta']['proxima_pagina'];

    $vendas = array_merge($vendas, $response['message']['data']);
  }

  $consumo_total = [];
  foreach ($vendas as $venda) {
    $pacotes = $venda['produtos'];

    foreach ($pacotes as $pacote) {
      $pacote = $pacote['produto'];

      $sabor = $pacote['nome_produto'];
      $qtd = (int) $pacote['quantidade'];

      if (!isset($consumo_total[$sabor])) {
        $consumo_total[$sabor] = 0;
      }

      $consumo_total[$sabor] += $qtd;
    }
  }

  $consumo_diario = [];
  foreach ($consumo_total as $sabor => $qtd) {
    $nome_amigavel = isset($mapa_sabores[$sabor]) ? $mapa_sabores[$sabor] : $sabor;
    $consumo_diario[$nome_amigavel] = number_format($qtd / 30, 2, '.', '');
  }
  
  //? Adicona ao banco de dados
  $conn->query("TRUNCATE TABLE consumo_diario");

  foreach ($consumo_diario as $sabor => $qtd) {
    $sabor = $conn->real_escape_string($sabor);
    $qtd = (float) $qtd;

    $sql = "INSERT INTO consumo_diario (sabor, qtd) VALUES ('$sabor', '$qtd')";
    if (!$conn->query($sql)) {
      send(['status' => 500, 'message' => 'Erro ao atualizar o consumo diário', 'err' => $conn->error]);
    }
  }

  send([
    'status' => 200,
    'message' => 'Consumo diário atualizado com sucesso',
    'consumo_diario' => $consumo_diario
  ]);

?>