<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/db/connect.php';

  $expireTime = 604800;
  session_set_cookie_params($expireTime);
  session_start();

  function err401() {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(401);
    $data = [
      'status' => 401,
      'message' => 'Você não tem permissão executar essa ação!'
    ];
    echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
  }

  //*---------- Access ----------*//

  function accessApi($page, $func) {
    global $_SESSION;

    if (env('ALOHA_ACCESS') == 'false') {
      return;
    }

    //? Acesso a API com token
    $headers = getallheaders();
    $token = $headers['token'] ?? null;

    if ($token == env('TOKEN')) {
      return;
    }

    //? Retorna se o usuário não estiver logado
    if (empty($_SESSION)) {
      err401();
    }

    $cargo = $_SESSION['cargo'];

    //? Apenas admin tem accesso a todas as páginas
    if ($cargo['nome'] == 'Admin') {
      return;
    }

    $access = $_SESSION['cargo']['access'];

    //? Verifica se o user tem accesso a pelo menos uma função da página
    $access_page = $access[$page] ?? null;
    if ($access_page === null) {
      err401();
    }

    //? Verifica se o user tem accesso a função da página
    if (is_array($func)) {
      $ok = false;
      foreach ($func as $f) {
        if (in_array($f, $access[$page]) == true) {
          $ok = true;
        }
      }
      if ($ok == false) {
        err401();
      }
    } else {
      if (in_array($func, $access[$page]) == false) {
        err401();
      }
    }

  }

  function access($page, $func) {
    global $_SESSION;

    if (env('ALOHA_ACCESS') == 'false') {
      return;
    }

    if (empty($_SESSION)) {
      header('Location: /err/401');
      exit;
    }

    $cargo = $_SESSION['cargo'];

    //? Apenas admin tem accesso a todas as páginas
    if ($cargo['nome'] == 'Admin') {
      return;
    }

    $access = $_SESSION['cargo']['access'];

    //? Verifica se o user tem accesso a pelo menos uma função da página
    if (!$access[$page]) {
      header('Location: /err/401');
      exit;
    }

    //? Verifica se o user tem accesso a função da página
    if (in_array($func, $access[$page]) == false) {
      header('Location: /err/401');
      exit;
    }

  }

?>
