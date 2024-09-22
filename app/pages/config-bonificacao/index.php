<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('advertencias', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Configuração Bonificação - Gelo System</title>
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
      <i class="fas fa-cog me-2"></i>
      Configuração Bonificação
    </h1>

    <div class="card mb-4">

      <div class="card-header">
        <i class="fas fa-gears me-1"></i>
        Automações
      </div>

      <div class="card-body">
        <table id="data-table-bonificacao"></table>
      </div>

    </div>

    <div class="card mb-4">

      <div class="card-header">
        <i class="fas fa-sliders me-1"></i>
        Modos de Produção
      </div>

      <div class="card-body">
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button class="btn btn-primary mb-3" id="add-modo"><i class="fas fa-plus"></i> Adicionar</button>
        </div>
        <table id="data-table-modos"></table>
      </div>

    </div>

    <br>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/assets/js/data-table.js"></script>
  <!-- Controls -->
  <script src="./assets/js/table-config.js"></script>
  <!--  -->
  <script src="./assets/js/add-modo.js"></script>
  <script src="./assets/js/view-modo.js"></script>
  <script src="./assets/js/edit-modo.js"></script>
  <script src="./assets/js/delete-modo.js"></script>
  <script src="./assets/js/activate-modo.js"></script>
  <!--  -->
  <script src="./assets/js/view-meta-producao.js"></script>
  <script src="./assets/js/edit-meta-producao.js"></script>
</body>
</html>