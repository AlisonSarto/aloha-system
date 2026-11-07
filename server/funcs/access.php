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
    global $_SESSION, $conn;

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

    if (!hasAccess($conn, $_SESSION['cargo']['id'], $page, $func)) {
      err401();
    }

  }

  function access($page, $func) {
    global $_SESSION, $conn;

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

    if (!hasAccess($conn, $_SESSION['cargo']['id'], $page, $func)) {
      header('Location: /err/401');
      exit;
    }

  }

  //? Consulta a permissão atual do cargo diretamente no banco
  function hasAccess($conn, $cargoId, $page, $func): bool {
    $functions = is_array($func) ? $func : [$func];
    $page = mysqli_real_escape_string($conn, $page);
    $cargoId = (int) $cargoId;

    foreach ($functions as $function) {
      $function = mysqli_real_escape_string($conn, strtolower($function));
      $sql = "SELECT 1 FROM permissoes
              INNER JOIN cargo_permissoes ON cargo_permissoes.permissao_id = permissoes.id
              WHERE cargo_permissoes.cargo_id = $cargoId
                AND permissoes.pagina = '$page'
                AND permissoes.funcao = '$function'
              LIMIT 1";
      if ($conn->query($sql)?->num_rows > 0) {
        return true;
      }
    }

    return false;
  }

?>
