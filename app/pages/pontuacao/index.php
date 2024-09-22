<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('pontuacao', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Pontuação - Gelo System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
  <link rel="stylesheet" href="./assets/css/boxes.css">
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
      <i class="fas fa-star me-2"></i>
      Pontuação
    </h1>

    <div class="page" name="tipo">

      <h1 class="text-center">Tipo de pontuação</h1>

      <br>

      <div class="row">

        <div class="col-6 col-md-3 m-auto text-center">
          <input type="radio" name="tipo" class="box-input" id="bonificacao" value="+">
          <label for="bonificacao" class="box box-marcas m-1 text-center p-5 text-bg-success">
            <i class="fas fa-gift fa-2xl"></i>
          </label>
        </div>
        
        <div class="col-6 col-md-3 m-auto text-center">
          <input type="radio" name="tipo" class="box-input" id="advertencia" value="-">
          <label for="advertencia" class="box box-marcas m-1 text-center p-5 text-bg-danger">
            <i class="fas fa-bell fa-2xl"></i>
          </label>
        </div>

      </div>

    </div>

    <div class="page" name="situacao">

      <h1 class="text-center">Situação</h1>

      <br>

      <div class="accordion" id="accordion"></div>

      <br>

      <label class="form-label">Observação</label>
      <textarea class="form-control" id="obs" placeholder="Descreva a situação pela qual o funcionário está recebendo essa bonificação/advertencia"></textarea>

    </div>

    <div class="page" name="funcinario">

      <h1 class="text-center">Funcionário</h1>

      <br>

      <div class="row">

        <div class="col-12 col-12">
          <label class="form-label">Funcionário</label>
          <select class="form-select form-select-lg" id="funcionarios">
            <option selected disabled>Selecione...</option>
          </select>
        </div>

      </div>

    </div>

    <div class="page" name="resumo">

      <h1 class="text-center">Resumo</h1>

      <br>

      <div class="row">

        <div class="col-12 col md-6">
          <label class="form-label">Situação</label>
          <input type="text" class="form-control" id="situacao-resumo" readonly>
        </div>
      
        <div class="col-12 col md-6">
          <label class="form-label">Pontuação</label>
          <input type="text" class="form-control" id="pontuacao-resumo" readonly>
        </div>

        <div class="col-12 col md-6">
          <label class="form-label">Funcionário</label>
          <input type="text" class="form-control" id="funcionario-resumo" readonly>
        </div>

        <div class="col-12 col md-6">
          <label class="form-label">Observação</label>
          <textarea type="text" class="form-control" id="obs-resumo" readonly></textarea>
        </div>

      </div>
    
    </div>

    <div class="page" name="salvar" id="page-salvar">

      <h1 class="text-center">Salvar</h1>

    </div>

    <br><br>
    <div id="controle">

      <div class="d-flex justify-content-between mx-3">
        <button class="btn btn-secondary" id="voltar">
          <i class="fas fa-arrow-left"></i>
          Voltar
        </button>
        <button class="btn btn-secondary" id="proximo">
          Próximo
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>

    </div>


  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/assets/js/data-table.js"></script>
  <!-- Controls -->
  <script src="./assets/js/pages.js"></script>
  <script src="./assets/js/add-advertencia.js"></script>
  <script src="./assets/js/add-bonificacao.js"></script>
</body>
</html>