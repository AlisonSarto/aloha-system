<?php

  //? Retorna um JSON com os dados da navbar

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';

  if (env('ALOHA_ACESS') === 'false') {
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
    $acess = $_SESSION['cargo']['acess'] ?? [];
    $admin = $cargo['nome'] == 'Admin' ? true : false;

    //? Dashboard
    if ($admin === true) {
      array_push($navbar,
        [ 'type' => 'link', 'title' => 'Dashboard', 'icon' => 'tachometer-alt', 'path' => 'dashboard' ],
      2);
    }
    
    //? Lançar
    if (isset($acess['entrada']) || isset($acess['saida']) || $admin) {

      $collapse = [ 'type' => 'collapse', 'title' => 'Lançar', 'icon' => 'mobile-screen-button', 'pages' => []];
      
      // Entrada
      if (isset($acess['entrada']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Entrada', 'icon' => 'arrow-right-long', 'path' => 'entrada' ],
        );
      }

      array_push($navbar, $collapse);

    }
    
    //? Pontuações
    if (isset($acess['pontuacoes']) || $admin) {

      $collapse = [ 'type' => 'collapse', 'title' => 'Pontuações', 'icon' => 'gift', 'pages' => []];

      //* Pontuação
      if (isset($acess['pontuacao']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Pontuação', 'icon' => 'star', 'path' => 'pontuacao' ],
        );
      }
      
      //* Situações
      if (isset($acess['situacoes']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Situações', 'icon' => 'clipboard', 'path' => 'situacoes' ],
        );
      }
      
      //* Situações
      if (isset($acess['grupo-situacoes']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Grupos Situações', 'icon' => 'notes-medical', 'path' => 'grupos-situacoes' ],
        );
      }

      array_push($navbar, $collapse);

    }

    //? Fabricação	
    if (isset($acess['pacotes']) || $admin) {
        
      $collapse = [ 'type' => 'collapse', 'title' => 'Fabricação', 'icon' => 'gears', 'pages' => []];

      // Funcionários
      if (isset($acess['funcionarios']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Funcionários', 'icon' => 'users', 'path' => 'funcionarios' ],
        );
      }
      
      // Máquinas
      if (isset($acess['funcionarios']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Máquinas', 'icon' => 'gears', 'path' => 'maquinas' ],
        );
      }

      // Entradas
      array_push($collapse['pages'],
        [ 'type' => 'link', 'title' => 'Entradas', 'icon' => 'arrow-right-long', 'path' => 'mov-entradas' ],
      );

      array_push($navbar, $collapse);
    }

    //? Estoque
    if (isset($acess['pacotes']) || $admin) {

      $collapse = [ 'type' => 'collapse', 'title' => 'Estoque', 'icon' => 'boxes-stacked', 'pages' => []];
      
      // Pacotes
      if (isset($acess['pacotes']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Pacotes', 'icon' => 'cube', 'path' => 'pacotes' ],
        );
      }
      
      // Outros
      if ($admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Embalagens', 'icon' => 'tape', 'path' => 'embalagens' ],
          [ 'type' => 'link', 'title' => 'Concentrados', 'icon' => 'flask', 'path' => 'concentrados' ],
        );
      }

      array_push($navbar, $collapse);

    }

    //? Admin
    if ($admin === true) {
      
      array_push($navbar,
        [ 'type' => 'collapse', 'title' => 'Users', 'icon' => 'users', 'pages' => [
          [ 'type' => 'link', 'title' => 'Usuários', 'icon' => 'user', 'path' => 'usuarios' ],
          [ 'type' => 'link', 'title' => 'Cargos', 'icon' => 'user-tie', 'path' => 'cargos' ],
        ]]
      );
      array_push($navbar,
        [ 'type' => 'collapse', 'title' => 'Configurações', 'icon' => 'cog', 'pages' => [

          // [ 'type' => 'header', 'title' => 'Estoque'],
          [ 'type' => 'link', 'title' => 'Sabores', 'icon' => 'blender', 'path' => 'sabores' ],
          [ 'type' => 'link', 'title' => 'Marcas', 'icon' => 'flag', 'path' => 'marcas' ],
          [ 'type' => 'link', 'title' => 'Turnos', 'icon' => 'user-clock', 'path' => 'turnos' ],

        ]],
      );

    }

    if (env('ALOHA_ACESS') === 'false') {
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