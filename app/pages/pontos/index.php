<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('aloha-id', 'gerenciar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Pontos - Gelo System</title>
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
      <i class="far fa-circle-dot me-2"></i>
      Ponto
    </h1>

    <div class="d-grid gap-2 d-md-flex justify-content-md-center">
      <button class="btn btn-primary mb-3" id="add-ponto"><i class="fas fa-plus"></i> Adicionar</button>
    </div>

    <div class="accordion">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#filtro">
            <i class="fas fa-filter me-2"></i>
            Filtros
          </button>
        </h2>
        <div id="filtro" class="accordion-collapse collapse show" data-bs-parent=".accordion">
          <div class="accordion-body">
            <div class="row">

              <div class="col-12">
                <label class="form-label">Rosto</label>
                <select class="form-select" id="rostos"></select>
              </div>

              <div class="col-6">
                <label class="form-label">Inicio</label>
                <input type="date" class="form-control" id="inicio">
              </div>

              <div class="col-6">
                <label class="form-label">Fim</label>
                <input type="date" class="form-control" id="fim">
              </div>

            </div>
          </div>
      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="far fa-circle-dot"></i>
        Pontos
      </div>
      <div class="card-body">

        <table id="data-table" data-table="pontos"></table>

        <div class="text-center mt-3" id="container-load-more" style="display:none">
          <button class="btn btn-primary" id="load-more">
            Carregar mais <i class="fas fa-plus"></i>
          </button>
        </div>

      </div>
    </div>

  </main>

  <br>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/assets/js/data-table.js"></script>
  <!-- Controls -->
  <script src="./assets/js/table-config.js"></script>
  <script src="./assets/js/filtros.js"></script>
  <script src="./assets/js/add.js"></script>
  <script src="./assets/js/delete.js"></script>
</body>
</html>