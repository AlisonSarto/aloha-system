<?php

  if (php_sapi_name() !== 'cli') {
    exit;
  }

  $server = 'http://127.0.0.1';

  $total_tests = 0;
  $total_err = 0;

  function testAPI($config) {
    global $server;
    global $total_tests;
    global $total_err;
    
    $nome = $config['nome'];
    $expected = $config['expected'];

    $url = $server . $config['url'];
    $method = $config['method'];
    $data = $config['data'];

    echo "\033[43m WORK \033[0m ";
    echo "\033[1m$nome\033[0m";

    sleep(1);

    $header = [
      'Content-Type: application/x-www-form-urlencoded; charset=UTF-8'
    ];

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    if ($method === 'POST' || $method === 'PUT') {
      curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
    }

    $response = curl_exec($curl);

    if (curl_errno($curl)) {
      echo 'Erro na requisição cURL: ' . curl_error($curl);
      return;
    }

    $response = json_decode($response, true);

    $status = $response['status'];

    echo "\r";
    if ($status == $expected) {
      echo "\033[42m PASS \033[0m\n";
    }else {
      echo "\033[41m ERRO \033[0m\n";

      $response = json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

      print_r($response);

      echo "\n\n";

      echo "Expected: \033[32m$expected\033[0m\n";
      echo "Received: \033[31m$status\033[0m\n";

      $total_err++;
    }

    $total_tests++;
  }

  function title($title) {
    echo "\033[1;34m===== $title =====\033[0m\n\n";
  }

  function summary() {
    global $total_tests;
    global $total_err;

    echo "\n";

    if ($total_err === 0) {
      $cor = '32';
    }else {
      $cor = '31';
    }

    echo "$total_tests teste(s) finalizado(s) com \033[$cor"."m$total_err\033[0m erro(s)\n\n";
  }

  echo "\n";

?>