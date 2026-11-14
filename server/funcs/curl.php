<?php

  function curl($url, $header, $method, $data) {

    $header[] = 'Content-Type: application/json; charset=UTF-8';

    if ($method === 'GET') {

      if (!empty($data)) {
        $url = $url . '?' . http_build_query($data);
      }

    }else {

      $data = json_encode($data);

    }

    $curl = curl_init();
    $options = [
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_SSL_VERIFYPEER => true,
      CURLOPT_SSL_VERIFYHOST => 2,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => $method,
      CURLOPT_HTTPHEADER => $header,
    ];
    if ($method !== 'GET') {
      $options[CURLOPT_POSTFIELDS] = $data;
    }
    curl_setopt_array($curl, $options);

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        
      return [
        'message' => 'Erro cURL #'.$err,
        'isJson' => false
      ];

    }

    return $response;

  }

?>
