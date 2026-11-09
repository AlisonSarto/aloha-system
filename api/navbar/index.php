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
    $setupCompleto = fabricaVerificarSetup($conn);

    if ($setupCompleto === false) {
      if ($admin) {
        $configuracoes = [
          [ 'type' => 'link', 'title' => 'Fábricas', 'icon' => 'industry', 'path' => 'fabricas' ],
          [ 'type' => 'link', 'title' => 'Marcas', 'icon' => 'tags', 'path' => 'marcas' ]
        ];
        if (!empty($_SESSION['fabrica_pendente'])) {
          $configuracoes[] = [ 'type' => 'link', 'title' => 'Selecionar loja', 'icon' => 'store', 'path' => 'fabricas/loja' ];
        }
        $navbar[] = [ 'type' => 'collapse', 'title' => 'Configurações', 'icon' => 'cog', 'pages' => $configuracoes ];
      }
      send([
        'status' => 200,
        'message' => 'Configuração inicial pendente',
        'setup_required' => true,
        'navbar' => $navbar
      ]);
    }

    //? Dashboard
    if ($admin === true) {
      array_push($navbar,
        [ 'type' => 'link', 'title' => 'Dashboard', 'icon' => 'tachometer-alt', 'path' => 'dashboard' ]
      );
    }

    //? Admin
    if ($admin === true) {

      array_push($navbar,
        [ 'type' => 'collapse', 'title' => 'Usuários', 'icon' => 'user', 'pages' => [
          [ 'type' => 'link', 'title' => 'Usuários', 'icon' => 'user', 'path' => 'usuarios' ],
          [ 'type' => 'link', 'title' => 'Cargos', 'icon' => 'user-tie', 'path' => 'cargos' ],
        ]]
      );

    }

    //? Configurações
    if ($admin === true) {
      $configuracoes = [
        [ 'type' => 'link', 'title' => 'Fábricas', 'icon' => 'industry', 'path' => 'fabricas' ],
        [ 'type' => 'link', 'title' => 'Marcas', 'icon' => 'tags', 'path' => 'marcas' ]
      ];
      if (!empty($_SESSION['fabrica_pendente'])) {
        $configuracoes[] = [ 'type' => 'link', 'title' => 'Selecionar loja', 'icon' => 'store', 'path' => 'fabricas/loja' ];
      }
      $navbar[] = [ 'type' => 'collapse', 'title' => 'Configurações', 'icon' => 'cog', 'pages' => $configuracoes ];
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
