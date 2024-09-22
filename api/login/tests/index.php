<?php

  include 'server/tests/config.php';

  title('Login');

  testAPI([
    'nome' => 'Login com sucesso',

    'url' => '/api/login/',
    'method' => 'POST',
    'data' => [
      'email' => 'admin',
      'senha' => '123',
    ],

    'expected' => 200,
  ]);

  testAPI([
    'nome' => 'Login com erro',

    'url' => '/api/login/',
    'method' => 'POST',
    'data' => [
      'email' => 'que não existe',
      'senha' => 'totalmente errada',
    ],

    'expected' => 401,
  ]);

  summary();

?>