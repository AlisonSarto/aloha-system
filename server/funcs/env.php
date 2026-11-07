<?php

  function env($envName) {

    // No Docker, as variáveis do .env já são injetadas no processo do Apache.
    // Isso permite manter o arquivo .env protegido contra leitura pelo usuário web.
    $processValue = getenv($envName);
    if ($processValue === false && $envName === 'ALOHA_ACCESS') {
      $processValue = getenv('ALOHA_ACESS');
    }
    if ($processValue === false && $envName === 'ALOHA_ACESS') {
      $processValue = getenv('ALOHA_ACCESS');
    }
    if ($processValue !== false) {
      return $processValue;
    }

    $root = dirname(__DIR__, 2);
    $env = [".env" => $root.'/.env'];
    
    //? Verifica se o arquivo existe
    $envFile = null;
    foreach ($env as $type => $file) {
      if (file_exists($file)) {
        $envFile = $file;
        $envType = $type;
        break;
      }
    }

    if (!$envFile || !is_readable($envFile)) {
      echo "Arquivo .env não encontrado";
      exit;
    }

    $envContent = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    $envData = [];

    foreach ($envContent as $line) {
      $line = trim($line);
      if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
        continue;
      }
      [$key, $value] = explode('=', $line, 2);
      $envData[trim($key)] = trim($value, " \t\"'");
    }

    if (array_key_exists($envName, $envData)) {
      return $envData[$envName];
    } else {
      echo "Variável de ambiente $envName não encontrada no env $envType";
      exit;
    }
    
  }

?>
