<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/env.php';

  $expireTime = 604800;
  session_set_cookie_params($expireTime);
  session_start();

  if (isset($_SESSION['email']) || env('ALOHA_ACESS') === 'false') {

    header("Location: /app");
    exit;

  }else {
    header('Location: /sair');
    exit;
  }

?>