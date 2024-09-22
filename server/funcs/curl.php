<?php

  function curl($url, $header, $method, $data) {

    $header[] = 'Content-Type: application/json; charset=UTF-8';

    if ($method === 'GET') {

      $url = $url . '?' . http_build_query($data);

    }else {

      $data = json_encode($data);

    }

    $curl = curl_init();
    curl_setopt_array($curl, [
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_SSL_VERIFYPEER => false,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => $method,
      CURLOPT_POSTFIELDS => $data,
      CURLOPT_HTTPHEADER => $header,
    ]);

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        
      return [
        'message' => 'Erro cURL #'.$err,
        'isJson' => false
      ];

    }

    curl_close($curl);

    //* Verifica se é um JSON
    if (strpos($response, '{') === false) {

      return [
        'message' => $response,
        'isJson' => false
      ];

    }else {

      $response = json_decode($response, true);
      return [
        'message' => $response,
        'isJson' => true
      ];

    }

  }

?>