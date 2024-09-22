<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('concentrados', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Concentrados - Gelo System</title>
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
      <i class="fas fa-flask me-2"></i>
      Concentrados
    </h1>

    <div class="card mb-4">

      <div class="card-header">
        <i class="fas fa-table me-1"></i>
        Concentrados
      </div>

      <div class="card-body">
        <table id="data-table" data-table="concentrados"></table>
      </div>

    </div>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/assets/js/data-table.js"></script>
  <!-- Controls -->
  <script src="./assets/js/table-config.js"></script>
  <script src="./assets/js/edit.js"></script>
  <script src="./assets/js/mov.js"></script>
</body>
</html>