<?php

  function logs($message, $file) {

    global $conn;

    if (is_array($message) === false) {
      echo 'Erro ao criar log';
      return;
    }

    $status = $message['status'] ?? 200;

    if (($status >= 200 && $status < 300) || $status == 404 || $status == 405) {
      return;
    }

    $data = date('Y-m-d H:i:s');
    $message = json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

    //* Simplifica o caminho do arquivo
    $file = str_replace('\\', '/', $file);
    $file = str_replace($_SERVER['DOCUMENT_ROOT'], '', $file);

    $sql = "INSERT INTO logs(mensagem, arquivo, dia) VALUES('$message', '$file', '$data')";
    $res = $conn->query($sql);

  }

?>