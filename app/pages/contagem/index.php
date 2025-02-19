<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('contagem', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Contagem - Gelo System</title>
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
      <i class="fas fa-calculator me-2"></i>
      Contagem de pacotes
    </h1>

    <br>

    <div id="pacotes"></div>

    <br>

    <!-- 2 btn, um de avançar e outro de retornar -->
    <div class="d-flex justify-content-between">
      <button id="btn-voltar" class="btn btn-secondary">
        <i class="fas fa-arrow-left me-2"></i>
        Voltar
      </button>
      <button id="btn-avancar" class="btn btn-primary">
        Avançar
        <i class="fas fa-arrow-right ms-2"></i>
      </button>
    </div>
    
    <!-- um botão centralizado verde finalizar-->
    <div class="d-flex justify-content-center">
      <button id="btn-finalizar" class="btn btn-success w-100" style="display:none">
        <i class="fas fa-check me-2"></i>
        Finalizar
      </button>
    </div>

    <br><br>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <!-- Controls -->
  <script src="./assets/js/control.js"></script>
</body>
</html>