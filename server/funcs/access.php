<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/db/connect.php';
  include_once $_SERVER['DOCUMENT_ROOT'].'/server/funcs/fabricas.php';

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
    $tokenAuth = $token == env('TOKEN');

    //? Retorna se o usuário não estiver logado
    if (empty($_SESSION) && !$tokenAuth) {
      err401();
    }

    if ($page !== 'fabricas' && !fabricaVerificarSetup($conn)) {
      send([
        'status' => 428,
        'message' => 'Conclua a configuração inicial da fábrica e da marca',
        'setup_required' => true
      ]);
    }

    if ($tokenAuth) {
      return;
    }

    if ($page === 'contexto') {
      return;
    }

    $cargo = $_SESSION['cargo'];

    if ($page === 'fabricas' && $cargo['nome'] !== 'Admin') {
      err401();
    }

    //? Apenas admin tem accesso a todas as páginas
    if ($cargo['nome'] == 'Admin') {
      if ($page === 'fabricas') return;
    }

    if ($page !== 'fabricas' && $page !== 'contexto') {
      $res = $conn->query("SELECT 1 FROM fabrica_usuarios WHERE usuario_id = " . (int) $_SESSION['id'] . " LIMIT 1");
      if (!$res || $res->num_rows === 0) send(['status' => 403, 'message' => 'Seu usuário não está associado a uma fábrica']);
    }

    if ($cargo['nome'] !== 'Admin' && !hasAccess($conn, $_SESSION['cargo']['id'], $page, $func)) {
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

    if ($page !== 'fabricas' && !fabricaVerificarSetup($conn)) {
      header('Location: /app/?fabricas');
      exit;
    }

    $cargo = $_SESSION['cargo'];

    if ($page === 'fabricas' && $cargo['nome'] !== 'Admin') {
      header('Location: /err/401');
      exit;
    }

    //? Apenas admin tem accesso a todas as páginas
    if ($cargo['nome'] == 'Admin') {
      if ($page === 'fabricas') return;
    }

    if ($page !== 'fabricas' && $page !== 'contexto') {
      $res = $conn->query("SELECT 1 FROM fabrica_usuarios WHERE usuario_id = " . (int) $_SESSION['id'] . " LIMIT 1");
      if (!$res || $res->num_rows === 0) {
        header('Location: /err/401');
        exit;
      }
    }

    if ($cargo['nome'] !== 'Admin' && !hasAccess($conn, $_SESSION['cargo']['id'], $page, $func)) {
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
