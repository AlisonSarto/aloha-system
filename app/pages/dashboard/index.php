<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('dashboard', 'visualizar');

  $date = new DateTime();
  $producao = [];

  function getFabri() {
    global $conn;
    global $producao;

    $inicio_dia = new DateTime(date("Y-m-01"));
    $fim_dia = new DateTime(date("Y-m-31"));

    $diff = $fim_dia->diff($inicio_dia)->days + 1;

    function addProducao($turno, $qtd) {
      global $producao;

      if (empty($producao[$turno])) {
        $producao[$turno] = $qtd;
      }else {
        $producao[$turno] += $qtd;
      }
    }

    $inicio_dia = $inicio_dia->format('Y-m-d');
    $fim_dia = $fim_dia->format('Y-m-d');

    $sql = "SELECT * FROM entradas WHERE turno_dia BETWEEN '$inicio_dia' AND '$fim_dia'";
    $res = $conn->query($sql);

    while ($db = $res->fetch_assoc()) {
      $turno = $db['turno'];
      $qtd = $db['qtd'];

      addProducao($turno, $qtd);
    }

    $maior = 0;
    $camp_turno = '';
    foreach ($producao as $turno => $total) {
      if ($total > $maior) {
        $maior = $total;
        $camp_turno = $turno;
      }
    }
    arsort($producao);
    

    return [
      'producao' => $producao,
      'camp' => $camp_turno
    ];
  }

  $fabri = getFabri();
  $producao = $fabri['producao'];
  $camp_turno = $fabri['camp'];

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Dashboard - Gelo System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>

  <main class="container-fluid px-4">

    <h1 class="my-4">
      <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" class="mb-2" height="40px">
      Olá, bem-vindo!
    </h1>

    <!-- Produção mês -->
    <div class="card">
      <div class="card-header">
        <i class="fa-solid fa-signal"></i>
        Produção deste mês
      </div>
      <div class="card-body">
        <table class="table">
          <tr>
            <th>Turno</th>
            <th>Produção</th>
          </tr>
          <?php
            foreach ($producao as $turno => $value) {
              if ($turno === $camp_turno) {
                $turno .= ' &#127942;';
              }
              echo "<tr>";
              echo "<td>$turno</td>";
              echo "<td>$value</td>";
              echo "</tr>";
            }
          ?>
        </table>
        Este mês já foram produzidos <b><?php echo array_sum($producao) ?></b> pacotes.
      </div>
    </div>

    <br>

    <!-- Última entrada -->
    <span>Produzindo:</span>
    <?php
      $sql = "SELECT * FROM entradas ORDER BY id DESC LIMIT 1";
      $res = $conn->query($sql);
      $db = $res->fetch_assoc();
      $pacote_id = $db['pacote_id'];

      $sql = "SELECT * FROM pacotes WHERE id = $pacote_id";
      $res = $conn->query($sql);
      $db = $res->fetch_assoc();
      $pacote = $db['sabor'] . ' - ' . $db['marca'];
      $sabor_id = $db['sabor_id'];
      
      $sql = "SELECT * FROM sabores WHERE id = $sabor_id";
      $res = $conn->query($sql);
      $db = $res->fetch_assoc();

      $hex = $db['cor'];

      // converte o hex em rgb
      $hex = ltrim($hex, '#');

      // Verifica se o formato é válido (3 ou 6 caracteres)
      if (strlen($hex) == 3) {
        // Expande o formato curto (#FFF para #FFFFFF)
        $hex = str_repeat($hex[0], 2) . str_repeat($hex[1], 2) . str_repeat($hex[2], 2);
      }

      if (strlen($hex) != 6) {
        die("Formato hexadecimal inválido");
      }

      // Divide a string em componentes RGB
      $r = hexdec(substr($hex, 0, 2));
      $g = hexdec(substr($hex, 2, 2));
      $b = hexdec(substr($hex, 4, 2));

      $cor = "$r, $g, $b, 0.3";

    ?>
    <div class="alert alert-dark" style="background-color: rgba(<?= $cor ?>)" role="alert">
      <?= $pacote ?>
    </div>

    <div class="row">

      <!-- Fabricação Semanal -->
      <div class="col-lg-6">
        <div class="card mb-4">
          <div class="card-header">
            <i class="fa-solid fa-chart-column"></i>
            Fabricação semanal
          </div>
          <div class="card-body">
            <canvas id="fabri" width="100%" height="50"></canvas>
          </div>
          <div class="card-footer">

            <div class="row">
              <div class="col-3">
                <button class="btn btn-primary w-100" id="voltar">
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
              </div>
              <div class="col-6">
                <input type="week" class="form-control" id="week" value="<?= date('Y-\WW') ?>">
              </div>
              <div class="col-3">
                <button class="btn btn-primary w-100" id="proximo">
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Estoque -->
      <div class="col-lg-6">
        <div class="card mb-4">

          <div class="card-header">
            <div class="row align-items-center">
              <div class="text-start w-75">
                <i class="fas fa-chart-column me-1"></i>
                Estoque
              </div>
              <div class="text-end w-25">
                <button class="btn btn-sm btn-success" id="sync">
                  <i class="fa-solid fa-rotate"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="card-body">
            <canvas id="estoque" width="100%" height="50"></canvas>
          </div>
        </div>
      </div>

      <!-- Pontos -->
      <div class="col-lg-6">
        <div class="card mb-4">
          <div class="card-header">
            <i class="far fa-circle-dot"></i>
            Pontos recentes
          </div>
          <div class="card-body">
            <table class="table table-sm">
              <?php
                $sql = "SELECT * FROM funcionarios ORDER BY ativo DESC, turno_id ASC";
                $res = $conn->query($sql);
                
                while ($db = $res->fetch_assoc()) {
                  $color = $db['ativo'] === 'true' ? '#20EE42' : '#949494';
                  $nome = $db['nome'];
                  ?>
                    <tr>
                      <th>
                        <i class="fa-solid fa-circle fa-sm" style="color: <?= $color ?>"></i>
                      </th>
                      <th><?= $nome ?></th>
                    </tr>
                  <?php
                }
              ?>
            </table>
          </div>
        </div>
      </div>
    
    </div>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/libs/chart.js/chart.js"></script>
  <!-- Control -->
  <script src="./assets/js/diaria.js"></script>
  <script src="./assets/js/estoque.js"></script>
  <script src="./assets/js/sync.js"></script>
</body>
</html>