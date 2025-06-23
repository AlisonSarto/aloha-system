<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  
  //? Puxa os sabores
  $sql = "SELECT * FROM sabores";
  $res = $conn->query($sql);

  if (!$res) {
    send(['status' => 500, 'message' => 'Erro ao conectar ao banco de dados', 'err' => $conn->error]);
  }

  $sabores = [];
  while ($row = $res->fetch_assoc()) {
    $sabores[] = $row['sabor'];
  }

  //? Puxa o estoque
  $sql = "SELECT * FROM pacotes WHERE marca = 'Aloha'";
  $res = $conn->query($sql);

  if (!$res) {
    send(['status' => 500, 'message' => 'Erro ao conectar ao banco de dados', 'err' => $conn->error]);
  }

  $estoque = [];
  while ($row = $res->fetch_assoc()) {
    $sabor = $row['sabor'];
    $qtd = (int) $row['qtd'];
    $estoque[$sabor] = $qtd;
  }

  //? Puxa o consumo diario
  $sql = "SELECT * FROM consumo_diario";
  $res = $conn->query($sql);

  if (!$res) {
    send(['status' => 500, 'message' => 'Erro ao conectar ao banco de dados', 'err' => $conn->error]);
  }

  $consumo_diario = [];
  while ($row = $res->fetch_assoc()) {
    $sabor = $row['sabor'];
    $qtd = $row['qtd'];
    $consumo_diario[$sabor] = $qtd;
  }

  //? Custo unitario
  $custo_unitario = [];
  foreach ($sabores as $sabor) {
    $custo_unitario[$sabor] = 14.00;
  }

  //? Estoque Ideal
  $estoque_ideal_map = [
    'Coco' => 3000,
    'Morango' => 275,
    'Maracujá' => 825,
    'Melancia' => 1100,
    'Maçã Verde' => 275,
    'Pessego' => 275,
    'Limão' => 275,
    'Laranja' => 275,
    'Pitaya' => 275
  ];
  
  $estoque_ideal = [];
  foreach ($sabores as $sabor) {
    $estoque_ideal[$sabor] = $estoque_ideal_map[$sabor] ?? 275;
  }

  //? Historico de consumo
  $token = env('G-CLICK_TOKEN');
  $secret = env('G-CLICK_SECRET');

  $inicio = date('Y-m-d', strtotime('-365 day'));
  $fim = date('Y-m-d');

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

  // Inicializa o array do histórico de consumo
  $historico_consumo = [];
  foreach ($sabores as $sabor) {
    $historico_consumo[$sabor] = [];
    // Gera as datas dos últimos 30 dias
    for ($i = 30; $i >= 0; $i--) {
      $data = date('Y-m-d', strtotime("-$i days"));
      $historico_consumo[$sabor][$data] = 0; // Inicializa com zero consumo
    }
  }
  
  // Processa as vendas para preencher o consumo por sabor e por dia
  foreach ($vendas as $venda) {
    $data_venda = substr($venda['data'], 0, 10); // já está correto
    foreach ($venda['produtos'] as $item) {
      $produto = $item['produto'];
      $nome_completo = $produto['nome_produto'];
      if (isset($mapa_sabores[$nome_completo])) {
        $sabor = $mapa_sabores[$nome_completo];
        if (isset($historico_consumo[$sabor][$data_venda])) {
          $historico_consumo[$sabor][$data_venda] += (int)$produto['quantidade'];
        }
      }
    }
  }
  
  // Transforma para o formato esperado: array de objetos [{data, consumo}, ...]
  foreach ($historico_consumo as $sabor => $dias) {
    $historico_consumo[$sabor] = array_map(function($data, $consumo) {
      return ['data' => $data, 'consumo' => $consumo];
    }, array_keys($dias), $dias);
  }

  //? Sazonalidade: Consumo mensal por sabor (últimos 12 meses)
  $sazonalidade_consumo_mensal = [];
  foreach ($sabores as $sabor) {
    $sazonalidade_consumo_mensal[$sabor] = [];
    // Inicializa os últimos 12 meses com zero
    for ($i = 11; $i >= 0; $i--) {
      $mes = date('Y-m', strtotime("-$i months"));
      $sazonalidade_consumo_mensal[$sabor][$mes] = 0;
    }
  }
  
  // Processa as vendas para preencher o consumo mensal por sabor
  foreach ($vendas as $venda) {
    $mes_venda = substr($venda['data'], 0, 7); // "YYYY-MM"
    foreach ($venda['produtos'] as $item) {
      $produto = $item['produto'];
      $nome_completo = $produto['nome_produto'];
      if (isset($mapa_sabores[$nome_completo])) {
        $sabor = $mapa_sabores[$nome_completo];
        if (isset($sazonalidade_consumo_mensal[$sabor][$mes_venda])) {
          $sazonalidade_consumo_mensal[$sabor][$mes_venda] += (int)$produto['quantidade'];
        }
      }
    }
  }
  
  // Transforma para o formato esperado: array de objetos [{mes, consumo}, ...]
  foreach ($sazonalidade_consumo_mensal as $sabor => $meses) {
    $sazonalidade_consumo_mensal[$sabor] = array_map(function($mes, $consumo) {
      return ['mes' => $mes, 'consumo' => $consumo];
    }, array_keys($meses), $meses);
  }

  //? Historico de entrada
  $sql = "SELECT * FROM pacotes WHERE marca = 'Aloha'";
  $res = $conn->query($sql);

  if (!$res) {
    send(['status' => 500, 'message' => 'Erro ao conectar ao banco de dados', 'err' => $conn->error]);
  }

  $pacotes = [];
  $ids_aloha = [];
  while ($row = $res->fetch_assoc()) {
    $pacotes[$row['id']] = $row['sabor'];
    $ids_aloha[] = $row['id'];
  }

  // Puxa as entradas
  $sql = "SELECT * FROM entradas WHERE pacote_id IN (".implode(',', $ids_aloha).")";
  $res = $conn->query($sql);

  if (!$res) {
    send(['status' => 500, 'message' => 'Erro ao conectar ao banco de dados', 'err' => $conn->error]);
  }

  $historico_entrada = [];
  foreach ($sabores as $sabor) {
    $historico_entrada[$sabor] = [];
  }
  
  // Processa as entradas e agrupa por sabor e data
  while ($row = $res->fetch_assoc()) {
    $pacote_id = $row['pacote_id'];
    $sabor = $pacotes[$pacote_id] ?? null;
    if (!$sabor) continue;
    $data = $row['turno_dia']; // formato 'YYYY-MM-DD'
    $entrada = (int)$row['qtd'];
  
    // Procura se já existe entrada para esse sabor e data
    $found = false;
    foreach ($historico_entrada[$sabor] as &$item) {
      if ($item['data'] === $data) {
        $item['entrada'] += $entrada;
        $found = true;
        break;
      }
    }
    unset($item);
    if (!$found) {
      $historico_entrada[$sabor][] = [
        'data' => $data,
        'entrada' => $entrada
      ];
    }
  }
  
  send([
    'historicoEntrada' => $historico_entrada,
    'sabores' => $sabores,
    'historicoConsumo' => $historico_consumo,
    'estoque' => $estoque,
    'consumoDiario' => $consumo_diario,
    'custoUnitario' => $custo_unitario,
    'estoqueIdeal' => $estoque_ideal,
    'sazonalidadeConsumoMensal' => $sazonalidade_consumo_mensal
  ]);


?>