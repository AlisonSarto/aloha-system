<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  access('fabricas', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vincular loja - Aloha System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>

  <main class="container-fluid px-4">

    <div class="py-4">
      <a class="text-decoration-none" href="/app/?fabricas" target="_top"><i class="fas fa-arrow-left me-1" aria-hidden="true"></i> Voltar para fábricas</a>
      <h1 class="mt-3 mb-1 d-flex align-items-center"><i class="fas fa-store me-2" aria-hidden="true"></i>Vincular uma loja</h1>
      <p class="text-body-secondary mb-0">Etapa 2 de 2 — escolha qual loja esta fábrica usará no Gestão Click.</p>
    </div>

    <div class="progress mb-4" role="progressbar" aria-label="Etapa da configuração" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="height: 6px;">
      <div class="progress-bar bg-success" style="width: 100%;"></div>
    </div>

    <div id="erro-selecao-loja" class="alert alert-danger d-none" role="alert"></div>

    <section class="card mb-4" aria-labelledby="titulo-lojas">
      <div class="card-header" id="titulo-lojas">Selecione a loja para <strong id="nome-fabrica-pendente">a fábrica</strong></div>
      <div class="card-body">
        <fieldset>
          <legend class="fs-6 text-body-secondary mb-3">As lojas abaixo estão disponíveis para os tokens informados.</legend>
          <div class="row g-3" id="lojas-disponiveis">
            <div class="col-12"><div class="text-body-secondary">Carregando lojas...</div></div>
          </div>
        </fieldset>
        <div class="d-flex flex-column flex-sm-row justify-content-between gap-2 mt-4">
          <button type="button" class="btn btn-outline-secondary order-2 order-sm-1" id="cancelar-fabrica">Cancelar cadastro</button>
          <button type="button" class="btn btn-primary order-1 order-sm-2" id="salvar-fabrica-loja" disabled>Concluir configuração</button>
        </div>
      </div>
    </section>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="./assets/js/loja.js"></script>
</body>
</html>
