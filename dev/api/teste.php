<?php

  if (php_sapi_name() != 'cli') {
    echo 'Acesse pelo terminal!';
    exit;
  }

  include 'server/curl.php';

  function editEnv($envName, $envValue) {
      
    //* Define as variáveis de ambiente por ordem de prioridade
    $env = [
      "Produção" => '.env',
      "Localhost" => '.env.local',
    ];
    
    //? Verifica se o arquivo existe
    $envFile = null;
    foreach ($env as $type => $file) {
      if (file_exists($file)) {
        $envFile = $file;
        $envType = $type;
        break;
      }
    }

    if (!$envFile) {
      echo "Arquivo .env não encontrado";
      exit;
    }

    $envContent = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    $envData = [];

    foreach ($envContent as $line) {
      if (strpos($line, '#') !== false) {
        continue;
      }
      [$key, $value] = explode('=', $line, 2);
      $envData[$key] = $value;
    }

    if (array_key_exists($envName, $envData)) {
      $envData[$envName] = $envValue;
    } else {
      echo "Variável de ambiente $envName não encontrada no env $envType";
      exit;
    }

    $envContent = '';
    foreach ($envData as $key => $value) {
      $envContent .= "$key=$value\n";
    }

    file_put_contents($envFile, $envContent);

  }

  function testAPI($config) {
    global $err;
    global $contador;

    $nome = $config['nome'];
    $expect_stats = $config['expect_stats'];

    $url = $config['url'];
    $method = $config['method'];
    $data = $config['data'];
    $log = $config['log'] ?? true;

    $api = 'http://127.0.0.1'.$url;

    if ($log === true) {
      echo "\033[1;43;97m TASK \033[0m";
      echo " $nome ";
    }

    $header = ['Content-Type: multipart/form-data'];
    $response = curl($api, $header, $method, $data);
    $response = $response['message'];
  
    $status = $response['status'] ?? null;

    sleep(2);
    echo "\033[2K\r";

    if ($log === false) {
      return;
    }

    //* Tag de PASS ou FAIL
    if ($status == $expect_stats) {

      echo "\033[1;42;97m PASS \033[0m";
      echo " $nome ";

    }else {

      echo "\033[1;41;97m FAIL \033[0m";

      echo " $nome -";
      echo "\033[38;5;240m $url\033[0m";
      echo "\n\n";

      echo "Expected: \033[32m$expect_stats\033[0m\n";
      echo "Received: \033[31m$status\033[0m\n";
      echo "\n";
      
      echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

      $err++;
    }

    echo "\n";
    $contador++;

    return $response;
    
  }

  function title($text) {
    echo "\n";
    echo "\033[1;34m==== $text ====\033[0m\n";
  }

  function question($question, $expect) {
    
    echo "\033[1;33m• $question \033[0m";

    $input = readline();
    $input = trim($input);
    $input = strtolower($input);

    if ($input == $expect) {
      return true;
    }else {
      return false;
    }

  }

  //*-------- TESTES --------*//

  $err = 0;
  $contador = 0;

  echo "\n";

  $exit = question('Isso resetará o banco de dados. Deseja continuar? (s)', 'n');

  if ($exit === true) {
    exit;
  }

  testAPI([
    'nome' => 'Resetar Banco de Dados',
    'log' => false,

    'url' => '/dev/pages/reset-db',
    'method' => 'POST',
    'data' => [
      'reset' => true
    ],

    'expect_stats' => 200,
  ]);
  editEnv('ALOHA_ACESS', 'false');
  editEnv('BIO_RUN', 'false');


  title('Testes de Login');

  testAPI([
    'nome' => 'Fazer login',

    'url' => '/api/login/',
    'method' => 'POST',
    'data' => [
      'email' => 'admin',
      'senha' => '123'
    ],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Bloqueio de login inválido',

    'url' => '/api/login/',
    'method' => 'POST',
    'data' => [
      'email' => 'inesistente',
      'senha' => 'incorreta'
    ],

    'expect_stats' => 401,
  ]);

  title('Testes de Cargos');

  testAPI([
    'nome' => 'Puxar todos cargos',

    'url' => '/api/cargos/view',
    'method' => 'GET',
    'data' => [],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Bloqueio de criação de cargo que já existe',

    'url' => '/api/cargos/add',
    'method' => 'POST',
    'data' => [
      'cargo' => 'Admin',
      'acess' => [
        "nome" => "Admin",
        "acess" => ["rostos" => "visualizar"]
      ]
    ],

    'expect_stats' => 409,
  ]);

  $response = testAPI([
    'nome' => 'Criação de cargo User',

    'url' => '/api/cargos/add',
    'method' => 'POST',
    'data' => [
      'cargo' => 'Cargo User',
      'acess' => [
        "nome" => "Cargo User",
        "acess" => ["rostos" => "visualizar"]
      ]
    ],

    'expect_stats' => 200,
  ]);

  $id = $response['cargo_id'];
  
  testAPI([
    'nome' => 'Puxar cargo criado',

    'url' => '/api/cargos/view',
    'method' => 'GET',
    'data' => [
      'id' => $id
    ],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Deletar cargo criado',

    'url' => '/api/cargos/delete?id='.$id,
    'method' => 'DELETE',
    'data' => [],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Bloqueio de deletar cargo admin',

    'url' => '/api/cargos/delete?id=1',
    'method' => 'DELETE',
    'data' => [],

    'expect_stats' => 403,
  ]);

  $response = testAPI([
    'nome' => 'Criação de cargo para testar nos usuários',

    'url' => '/api/cargos/add',
    'method' => 'POST',
    'data' => [
      'cargo' => 'Cargo User',
      'acess' => [
        "nome" => "Cargo User",
        "acess" => ["rostos" => "visualizar"]
      ]
    ],

    'expect_stats' => 200,
  ]);

  $cargo_id = $response['cargo_id'];

  title('Testes de Usuários');

  testAPI([
    'nome' => 'Puxar todos usuários',

    'url' => '/api/usuarios/view',
    'method' => 'GET',
    'data' => [],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Bloqueio de criação de usuário que já existe',

    'url' => '/api/usuarios/add',
    'method' => 'POST',
    'data' => [
      'nome' => 'Admin',
      'cargo' => 1, // 1 = Admin
      'email' => 'teste',
      'senha' => '123'
    ],

    'expect_stats' => 409,
  ]);

  $response = testAPI([
    'nome' => 'Criação de usuário Admin',

    'url' => '/api/usuarios/add',
    'method' => 'POST',
    'data' => [
      'nome' => 'Teste Admin',
      'cargo' => 1, // 1 = Admin
      'email' => 'testeadmin',
      'senha' => '123'
    ],

    'expect_stats' => 200,
  ]);

  $admin_id = $response['usuario_id'];

  $response = testAPI([
    'nome' => 'Criação de usuário User',

    'url' => '/api/usuarios/add',
    'method' => 'POST',
    'data' => [
      'nome' => 'Teste User',
      'cargo' => $cargo_id, // 1 = Admin
      'email' => 'testeuser',
      'senha' => '123'
    ],

    'expect_stats' => 200,
  ]);

  $user_id = $response['usuario_id'];

  testAPI([
    'nome' => 'Puxar usuário criado',

    'url' => '/api/usuarios/view',
    'method' => 'GET',
    'data' => [
      'id' => $id
    ],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Editar usuário admin criado',

    'url' => '/api/usuarios/edit',
    'method' => 'POST',
    'data' => [
      'id' => $admin_id,
      'nome' => 'Teste Editado',
      'cargo' => 1, // 1 = Admin
      'email' => 'teste',
      'senha' => '123'
    ],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Deletar usuário User criado',

    'url' => '/api/usuarios/delete?id='.$user_id,
    'method' => 'DELETE',
    'data' => [],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Deletar usuário Admin criado',

    'url' => '/api/usuarios/delete?id='.$admin_id,
    'method' => 'DELETE',
    'data' => [],

    'expect_stats' => 200,
  ]);

  testAPI([
    'nome' => 'Bloqueio de editar cargo do último usuário Admin',

    'url' => '/api/usuarios/edit',
    'method' => 'POST',
    'data' => [
      'id' => 1,
      'nome' => 'Admin',
      'cargo' => $cargo_id, // 2 = User
      'email' => 'admin',
      'senha' => '123'
    ],

    'expect_stats' => 403,
  ]);

  testAPI([
    'nome' => 'Bloqueio em deletar o último usuário Admin',

    'url' => '/api/usuarios/delete?id=1',
    'method' => 'DELETE',
    'data' => [],

    'expect_stats' => 403,
  ]);

  //? Exibe um resumo dos testes
  if ($err > 0) {
    echo " \n";
    echo "\033[1m $contador testes finalizados com \033[31m$err\033[0m erros encontrados \033[0m\n";
  }else {
    echo " \n";
    echo "\033[1m $contador testes finalizados com \033[32m0\033[0m erros encontrados \033[0m\n";
  }

  echo "\n";

?>