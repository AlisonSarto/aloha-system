<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('mov', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Movimentações Entradas - Gelo System</title>
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
      <i class="fas fa-arrow-right-long me-2"></i>
      Movimentações Entradas
    </h1>

    <div class="card">
      <div class="card-header">
        Filtros
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <label for="inicio" class="form-label">Início</label>
            <input type="date" id="inicio" class="form-control">
          </div>
          <div class="col-md-6">
            <label for="fim" class="form-label">Fim</label>
            <input type="date" id="fim" class="form-control">
          </div>
          <div class="col-md-12">
            <label for="fim" class="form-label">Embaladora</label>
            <select id="embaladora-id" class="form-select">
              <option value="0" selected>Todas</option>
              <option value="1">Embaladora 1</option>
              <option value="2">Embaladora 2</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        Movimentações
      </div>
      <div class="card-body">
        <table id="data-table" data-table="entradas"></table>
      </div>
    </div>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/assets/js/data-table.js"></script>
  <!-- Controls -->
  <script src="./assets/js/table-config.js"></script>

</body>
</html>