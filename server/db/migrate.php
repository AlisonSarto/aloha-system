<?php

declare(strict_types=1);

function loadEnv(string $file): void
{
  if (!is_file($file)) {
    return;
  }

  foreach (file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
    $line = trim($line);
    if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
      continue;
    }

    [$key, $value] = explode('=', $line, 2);
    $key = trim($key);
    $value = trim($value);
    if ($value !== '' && (($value[0] ?? '') === '"' || ($value[0] ?? '') === "'")) {
      $value = trim($value, "\"'");
    }
    putenv("{$key}={$value}");
    $_ENV[$key] = $value;
  }
}

$projectRoot = dirname(__DIR__, 2);
loadEnv($projectRoot . '/.env');

$required = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASS'];
foreach ($required as $key) {
  if (getenv($key) === false) {
    fwrite(STDERR, "Variável obrigatória ausente no .env: {$key}\n");
    exit(1);
  }
}

$host   = getenv('DB_HOST');
$dbname = getenv('DB_NAME');
$user   = getenv('DB_USER');
$pass   = getenv('DB_PASS');
$port   = getenv('DB_PORT') ?: '3306';

try {
  $pdo = new PDO(
    "mysql:host={$host};port={$port};dbname={$dbname};charset=utf8mb4",
    $user,
    $pass,
    [
      PDO::ATTR_ERRMODE                => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE     => PDO::FETCH_ASSOC,
      PDO::MYSQL_ATTR_MULTI_STATEMENTS => true,
    ]
  );
} catch (PDOException $e) {
  fwrite(STDERR, "Erro ao conectar no banco: {$e->getMessage()}\n");
  exit(1);
}

$pdo->exec("CREATE TABLE IF NOT EXISTS _migrations (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(255) NOT NULL UNIQUE,
  batch       INT NOT NULL,
  executed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

$dir     = __DIR__ . '/migrations';
$command = $argv[1] ?? 'help';

// ---------- helpers ----------

function listFiles(string $dir): array
{
  if (!is_dir($dir)) {
    fwrite(STDERR, "Pasta de migrations não encontrada: {$dir}\n");
    exit(1);
  }
  $files = array_merge(glob("{$dir}/*.sql") ?: [], glob("{$dir}/*.php") ?: []);
  $files = array_filter($files, fn($f) => !str_contains(basename($f), '.down.'));
  usort($files, fn($a, $b) => strcmp(basename($a), basename($b)));
  return array_values($files);
}

function migrationName(string $file): string
{
  return pathinfo($file, PATHINFO_FILENAME);
}

function executedNames(PDO $pdo): array
{
  return $pdo->query("SELECT name FROM _migrations")->fetchAll(PDO::FETCH_COLUMN);
}

function runMigration(PDO $pdo, string $file): void
{
  if (str_ends_with($file, '.php')) {
    $m = require $file;
    if (!is_array($m) || !isset($m['up']) || !is_callable($m['up'])) {
      throw new RuntimeException(
        "Migration PHP inválida (deve retornar ['up' => callable]): " . basename($file)
      );
    }
    $m['up']($pdo);
  } else {
    $pdo->exec(file_get_contents($file));
  }
}

// ---------- comandos ----------

switch ($command) {

  case 'up':
      $executed = executedNames($pdo);
      $batch    = (int) $pdo->query("SELECT COALESCE(MAX(batch), 0) FROM _migrations")->fetchColumn() + 1;
      $ran      = 0;

      foreach (listFiles($dir) as $file) {
        $name = migrationName($file);
        if (in_array($name, $executed, true)) {
          continue;
        }

        echo "→ aplicando: {$name}\n";
        try {
          runMigration($pdo, $file);
        } catch (Throwable $e) {
          fwrite(STDERR, "\nFALHA em {$name}: {$e->getMessage()}\n");
          fwrite(STDERR, "Migration não foi registrada. Corrija e rode de novo.\n");
          exit(1);
        }

        $pdo->prepare("INSERT INTO _migrations (name, batch) VALUES (?, ?)")
          ->execute([$name, $batch]);
        $ran++;
      }

      echo $ran
        ? "\n✓ {$ran} migration(s) aplicada(s) — batch {$batch}.\n"
        : "\nNada pendente.\n";
      break;

  case 'status':
      $executed = executedNames($pdo);
      $rows = $pdo->query("SELECT name, batch, executed_at FROM _migrations")->fetchAll();
      $meta = [];
      foreach ($rows as $r) {
        $meta[$r['name']] = $r;
      }

      $files = listFiles($dir);
      if (!$files) {
        echo "Nenhuma migration encontrada em {$dir}\n";
           break;
      }

      foreach ($files as $file) {
        $name = migrationName($file);
        if (isset($meta[$name])) {
          printf("  [✓] %-55s batch %d  %s\n",
            $name, $meta[$name]['batch'], $meta[$name]['executed_at']);
        } else {
          printf("  [ ] %-55s pendente\n", $name);
        }
      }
      break;

  case 'baseline':
    $executed = executedNames($pdo);
    $batch    = (int) $pdo->query("SELECT COALESCE(MAX(batch), 0) FROM _migrations")->fetchColumn() + 1;
    $marked   = 0;

    foreach (listFiles($dir) as $file) {
      $name = migrationName($file);
      if (in_array($name, $executed, true)) {
        continue;
      }
      $pdo->prepare("INSERT INTO _migrations (name, batch) VALUES (?, ?)")
        ->execute([$name, $batch]);
      echo "  [baseline] {$name}\n";
      $marked++;
    }

    echo $marked
      ? "\n✓ {$marked} migration(s) marcada(s) como aplicada(s) (sem executar).\n"
      : "\nTodas já estavam registradas.\n";
    break;

  default:
    echo "Uso: php server/db/migrate.php [up|status|baseline]\n\n";
    echo "  up         Aplica todas as migrations pendentes\n";
    echo "  status     Lista aplicadas e pendentes\n";
    echo "  baseline   Marca as migrations atuais como aplicadas SEM executá-las\n";
    echo "             (rode UMA vez no banco legado que já tem as tabelas)\n";
    exit(1);
}
