<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';

  if (isset($_POST['reset']) && $_POST['reset'] == true) {
    
    $sql = "SHOW TABLES";
    $res = $conn->query($sql);
    $erros = [];

    if ($res->num_rows > 0) {
      //? Passa por todas as tabelas e deleta
      while ($row = $res->fetch_assoc()) {
        $table = $row["Tables_in_" . env('DB_NAME')];
        $sql_drop = "DROP TABLE $table";
        if ($conn->query($sql_drop) === FALSE) {
          $erros[] = "Erro ao deletar a tabela $table: " . $conn->error;
        }
      }
    }

    //? Cria as tabelas
    $sql = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/dev/db/create.sql');
    if ($conn->multi_query($sql) === FALSE) {
      $erros[] = "Erro ao criar as tabelas: " . $conn->error;
    }

    if ($erros === []) {
      send([
        'status' => 200,
        'message' => 'Banco de dados reiniciado com sucesso!',
      ]);
    } else {
      send([
        'status' => 500,
        'message' => 'Erro ao reiniciar o banco de dados!',
        'erros' => $erros,
      ]);
    }

  }

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Criar Banco de Dados</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>
  
  <main class="container">

    <!-- Modal -->
    <div class="modal fade" id="modal" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>

    <br>
    <a href="/dev">
      <i class="fas fa-arrow-left me-2"></i>
      Voltar
    </a>

    <h1 class="mt-4">
      Criar Banco de Dados
    </h1>

    <hr>

    <div class="alert alert-danger mt-2" role="alert">
      <i class="fas fa-exclamation-triangle"></i>
      Atenção! Ao clicar em <b>Criar</b> você irá apagar todos os dados atuais do banco de dados!
    </div>
    <div class="alert alert-primary mt-2" role="alert">
      <i class="fas fa-info-circle"></i>
      Após reiniciar o banco de dados, você terá que logar com: <br>
      <b>E-mail:</b> admin@aloha.com <br>
      <b>Senha:</b> 123
    </div>

    <div class="d-grid gap-2 col-md-2 mx-auto">
      <button class="btn btn-primary" id="reset">Criar</button>
    </div>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script>
    $(document).ready(function() {
      //* Confirma com o modal
      $('#reset').click(function() {

        //? Tempo de espera em s
        contador = 2;

        $('#modal .modal-title').html('Criar banco de dados');
        $('#modal .modal-body').html('Tem certeza que deseja criar um novo banco de dados? <br> <b>Todos os dados atuais serão apagados!</b>');
        $('#modal .modal-footer').html(`
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit" class="btn btn-primary" id="confirm" disabled>Criar ${contador}s</button>
        `);
        $('#modal').modal('show');

        //* Libera o deletar depois do tempo
        var interval = setInterval(function() {
          
          contador--;
          $('#confirm').html(`Criar ${contador}s`);
          if (contador == 0) {
            $('#confirm').prop('disabled', false);
            $('#confirm').html(`Criar`);
            clearInterval(interval);
          }

          //? Se fechar o modal para a contagem
          $('#modal').on('hidden.bs.modal', function() {
            clearInterval(interval);
          });

        }, 1000);

        $('#confirm').click(function() {
          
          $.ajax({
            url: '/dev/pages/create-db',
            type: 'POST',
            data: {reset: true},
            beforeSend: function() {
              $('#confirm').prop('disabled', true);
              $('#confirm').html(`Criando...`);
            },
            success: function() {
              $('#modal .modal-title').html('Sucesso!');
              $('#modal .modal-body').html('Banco de dados criado com sucesso!');
              $('#modal .modal-footer').html(`
                <a href="/dev" class="btn btn-secondary">Voltar</a>
              `);
              $('#confirm').prop('disabled', false);
              $('#confirm').html(`Criar`);
            },
            error: function() {
              $('#confirm').prop('disabled', false);
              $('#confirm').html(`Criar`);
            }
          });

        });
      });
    });
  </script>
</body>
</html>