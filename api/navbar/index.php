<?php

  //? Retorna um JSON com os dados da navbar

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';

	function send($message) {
    logs($message, __FILE__);
		header('Content-Type: application/json;');
		http_response_code($message['status'] ?? 200);
    echo json_encode($message, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
	}

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

    //? Dash
    if ($admin === true) {
      array_push($navbar,
        [ 'type' => 'link', 'title' => 'Dashboard', 'icon' => 'tachometer-alt', 'path' => 'dashboard' ],
      2);
    }

    //? Aloha ID
    $acess['aloha-id'] = $acess['aloha-id'] ?? null;
    if (isset($acess['aloha-id']) || $admin) {

      $acess['aloha-id'] = $acess['aloha-id'] ?? [];

      $collapse = [ 'type' => 'collapse', 'title' => 'Aloha ID', 'icon' => 'face-smile far', 'pages' => []];
      
      // Gerenciar
      if (in_array('gerenciar', $acess['aloha-id']) || $admin) {

        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Rostos', 'icon' => 'face-smile far', 'path' => 'rostos' ]
        );
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Pontos', 'icon' => 'circle-dot far', 'path' => 'pontos' ]
        );

      }
      
      // Verificar
      if (in_array('verificar', $acess['aloha-id']) || $admin) {

        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Marcar Ponto', 'icon' => 'id-badge far', 'path' => 'marcar-ponto' ]
        );

      }

      array_push($navbar, $collapse);
      
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

    //? Tarefas
    if (isset($acess['tarefas']) || $admin) {
        
      $collapse = [ 'type' => 'collapse', 'title' => 'Tarefas', 'icon' => 'clipboard', 'pages' => []];
      
      // Tarefas
      if (isset($acess['tarefas']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Tarefas', 'icon' => 'list-check', 'path' => 'tarefas' ],
        );
      }

      // Gerentes
      if (isset($acess['gerentes']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Gerentes', 'icon' => 'user-tie', 'path' => 'gerentes' ],
        );
      }

      // Configurações
      if (isset($acess['tarefas']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Configurações', 'icon' => 'gear', 'path' => 'config-tarefas' ],
        );
      }

      array_push($navbar, $collapse);
    }
    
    //? Bonificação
    if (isset($acess['bonificacao']) || $admin) {

      $collapse = [ 'type' => 'collapse', 'title' => 'Bonificação', 'icon' => 'gift', 'pages' => []];
      
      //* Funcionários
      if (isset($acess['funcionarios']) || $admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Funcionários', 'icon' => 'users', 'path' => 'funcionarios' ],
        );
      }

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
      
      //* Configurações
      if ($admin) {
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Configurações', 'icon' => 'cog', 'path' => 'config-bonificacao' ],
        );
      }

      array_push($navbar, $collapse);

    }

    //? Fabricação	
    if (isset($acess['pacotes']) || $admin) {
        
        $collapse = [ 'type' => 'collapse', 'title' => 'Fabricação', 'icon' => 'gears', 'pages' => []];
        
        // Controle
        array_push($collapse['pages'],
          [ 'type' => 'link', 'title' => 'Controle', 'icon' => 'flag-checkered', 'path' => 'controle' ],
        );

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