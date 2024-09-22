<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Debug Banco de Dados</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
</head>
<body>
  
  <main class="container">

    <br>
    <a href="/dev">
      <i class="fas fa-arrow-left me-2"></i>
      Voltar
    </a>

    <h1 class="my-4">
      Status do Banco de Dados
    </h1>

    <hr>

    <h2 class="my-3">Conexão</h2>

    <?php

      include $_SERVER['DOCUMENT_ROOT'].'/server/db/connect.php';
          
      if ($conn->connect_errno) {
        echo "
          <b class='text-danger'>Erro na conexão</b> <br>
          <b>Código do erro:</b> $conn->connect_errno <br>
          <b>Descrição do erro:</b> $conn->connect_error <br>
        ";
      }else {
        echo "
          <b class='text-success'>Conectado com sucesso</b> <br>
          <b>Servidor:</b> $conn->host_info <br>
          <b>Versão do servidor:</b> $conn->server_info <br>
          <b>Versão do protocolo:</b> $conn->protocol_version <br>
          <b>Versão do cliente:</b> $conn->client_info <br>
          <b>Versão do protocolo:</b> $conn->client_version <br>
        ";
      }

    ?>

    <!-- mostra as tabelas do banco de dados -->
    <h2 class="my-3">Tabelas</h2>

    <?php

      $sql = "SHOW TABLES";
      $result = $conn->query($sql);
      $db = env('DB_NAME');

      if ($result->num_rows == 0) {
        echo "Nenhuma tabela encontrada";
      } else {

        // Acordion com as tabelas
        echo "
          <div class='accordion' id='accordion'>
        ";

        // Mostra as tabelas
        while ($row = $result->fetch_assoc()) {
          $table = $row['Tables_in_'.$db];
          echo "
            <div class='accordion-item'>
              <h2 class='accordion-header' id='heading-$table'>
                <button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse-$table'>
                  $table
                </button>
              </h2>
              <div id='collapse-$table' class='accordion-collapse collapse' data-bs-parent='#accordion'>
                <div class='accordion-body'>
                  <div class='table-responsive'>
                    <table class='datatable-table'>
          ";

          // Faz o cabeçalho da tabela
          $sql = "SHOW COLUMNS FROM $table";
          $res = $conn->query($sql);
          echo "<thead><tr>";
          while ($row = $res->fetch_assoc()) {
            echo "<th>".$row['Field']."</th>";
          }
          echo "</tr></thead>";

          // Faz o corpo da tabela
          $sql = "SELECT * FROM $table ORDER BY id DESC";
          $res = $conn->query($sql);

          echo "<tbody>";

          while ($row = $res->fetch_assoc()) {
            echo "<tr>";
            foreach ($row as $key => $value) {
              echo "<td>$value</td>";
            }
            echo "</tr>";
          }

          echo "</table></div></div></div></div>";
        }
        
      }

    ?>


    <br>

  </main>
  
  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
</body>
</html>