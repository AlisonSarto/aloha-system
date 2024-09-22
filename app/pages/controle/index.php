<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('controle', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Controle - Gelo System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>
  
  <main class="container-fluid px-4">

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

    <!-- Toast -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="toast" class="toast" role="alert">
        <div class="toast-header text-bg-success">
          <img src="/assets/imgs/favicon.ico" class="rounded icone me-2" width="27">
          <strong class="me-auto">Gelo System</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body"></div>
      </div>
    </div>

    <h1 class="py-4 d-flex align-items-center">
      <i class="fas fa-flag-checkered me-2"></i>
      Controle Fabricação
    </h1>

    <div class="alert alert-dark" role="alert" id="alert">
      <i class="fas fa-info-circle me-2"></i>
      A situação atual da fabricação é: <b id="situacao"></b>
    </div>

    <button type="button" id="iniciar" class="btn btn-lg btn-success w-100 mb-3 controle" style="display:none">
      <i class="fas fa-flag-checkered me-2"></i>
      Iniciar Fabricação
    </button>

    <button type="button" id="pausar" class="btn btn-lg btn-warning w-100 mb-3 controle" style="display:none">
      <i class="fas fa-pause me-2"></i>
      Pausar Fabricação
    </button>

    <button type="button" id="retomar" class="btn btn-lg btn-success w-100 mb-3 controle" style="display:none">
      <i class="fas fa-play me-2"></i>
      Retomar Fabricação
    </button>

    <button type="button" id="parar" class="btn btn-lg btn-danger w-100 mb-3 controle" style="display:none">
      <i class="fas fa-stop me-2"></i>
      Parar Fabricação
    </button>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <!--  -->
  <script src="./assets/js/botoes.js"></script>
</body>
</html>