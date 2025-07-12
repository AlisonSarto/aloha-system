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

  //*---------- Acess ----------*//

  function acessApi($page, $func) {
    global $_SESSION;

    if (env('ALOHA_ACESS') == 'false') {
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
    
    //? Apenas admin tem acesso a todas as páginas
    if ($cargo['nome'] == 'Admin') {
      return;
    }

    $acess = $_SESSION['cargo']['acess'];

    //? Verifica se o user tem acesso a pelo menos uma função da página
    $acess_page = $acess[$page] ?? null;
    if ($acess_page === null) {
      err401();
    }

    //? Verifica se o user tem acesso a função da página
    if (is_array($func)) {
      $ok = false;
      foreach ($func as $f) {
        if (in_array($f, $acess[$page]) == true) {
          $ok = true;
        }
      }
      if ($ok == false) {
        err401();
      }
    } else {
      if (in_array($func, $acess[$page]) == false) {
        err401();
      }
    }

  }

  function acess($page, $func) {
    global $_SESSION;

    if (env('ALOHA_ACESS') == 'false') {
      return;
    }

    if (empty($_SESSION)) {
      header('Location: /err/401');
      exit;
    }

    $cargo = $_SESSION['cargo'];
    
    //? Apenas admin tem acesso a todas as páginas
    if ($cargo['nome'] == 'Admin') {
      return;
    }

    $acess = $_SESSION['cargo']['acess'];

    //? Verifica se o user tem acesso a pelo menos uma função da página
    if (!$acess[$page]) {
      header('Location: /err/401');
      exit;
    }

    //? Verifica se o user tem acesso a função da página
    if (in_array($func, $acess[$page]) == false) {
      header('Location: /err/401');
      exit;
    }

  }

?>