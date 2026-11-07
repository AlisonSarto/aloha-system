<?php

  //? Retorna um JSON com os dados da navbar

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';

  if (env('ALOHA_ACCESS') === 'false') {
    $_SESSION['cargo']['nome'] = 'Admin';
  }

  if (empty($_SESSION['cargo'])) {
    send([
      'status' => 401,
      'message' => 'Faça login para continuar'
    ]);
  }

	if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $navbar = [];
    $cargo = $_SESSION['cargo'];
    $access = $_SESSION['cargo']['access'] ?? [];
    $admin = $cargo['nome'] == 'Admin' ? true : false;

    //? Dashboard
    if ($admin === true) {
      array_push($navbar,
        [ 'type' => 'link', 'title' => 'Dashboard', 'icon' => 'tachometer-alt', 'path' => 'dashboard' ],
      2);
    }

    //? Admin
    if ($admin === true) {

      array_push($navbar,
        [ 'type' => 'collapse', 'title' => 'Users', 'icon' => 'user', 'pages' => [
          [ 'type' => 'link', 'title' => 'Usuários', 'icon' => 'user', 'path' => 'usuarios' ],
          [ 'type' => 'link', 'title' => 'Cargos', 'icon' => 'user-tie', 'path' => 'cargos' ],
        ]]
      );

    }

    if (env('ALOHA_ACCESS') === 'false') {
      session_destroy();
    }

    send([
      'status' => 200,
      'message' => 'Navbar carregada com sucesso',
      'navbar' => $navbar
    ]);

  }else {
		send([
      'status' => 405,
      'message' => 'Método não aceitado'
    ]);
	}

?>
