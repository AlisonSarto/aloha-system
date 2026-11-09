<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  access('fabricas', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Marcas - Aloha System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>

  <main class="container-fluid px-4">

    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 py-4">
      <div>
        <h1 class="mb-1 d-flex align-items-center"><i class="fas fa-tags me-2" aria-hidden="true"></i>Marcas</h1>
        <p class="text-body-secondary mb-0">Associe cada marca aos grupos de produtos da fábrica no Gestão Click.</p>
      </div>
      <button type="button" class="btn btn-primary align-self-start align-self-md-center" id="add-marca" disabled>
        <i class="fas fa-plus me-1" aria-hidden="true"></i> Adicionar marca
      </button>
    </div>

    <div id="mensagem-marcas" class="alert alert-info" role="status" aria-live="polite">
      Escolha uma fábrica para carregar as marcas e os grupos disponíveis.
    </div>

    <section class="card mb-4" aria-labelledby="titulo-filtro-fabrica">
      <div class="card-body row g-3 align-items-center">
        <div class="col-12 col-md-7 col-lg-5">
          <label for="fabrica-marcas" id="titulo-filtro-fabrica" class="form-label fw-semibold">Fábrica</label>
          <select class="form-select" id="fabrica-marcas"><option value="">Carregando fábricas...</option></select>
        </div>
        <div class="col-12 col-md-5 col-lg-7 text-body-secondary" id="ajuda-fabrica-marcas">
          Os grupos são carregados usando a integração desta fábrica.
        </div>
      </div>
    </section>

    <div class="row g-3" id="marcas-lista" aria-live="polite">
      <div class="col-12"><div class="card"><div class="card-body text-center text-body-secondary py-4">Selecione uma fábrica.</div></div></div>
    </div>

    <div class="mt-4" id="produtos-lista" aria-live="polite"></div>

    <div class="modal fade" id="modal-marca" tabindex="-1" aria-labelledby="titulo-modal-marca" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <h2 class="modal-title fs-5" id="titulo-modal-marca">Adicionar marca</h2>
              <div class="small text-body-secondary" id="subtitulo-modal-marca"></div>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <div id="erro-marca" class="alert alert-danger d-none" role="alert"></div>
            <div class="mb-3">
              <label for="nome-marca" class="form-label">Nome da marca</label>
              <input type="text" class="form-control" id="nome-marca" maxlength="100" required>
            </div>
            <fieldset>
              <legend class="fs-6 fw-semibold">Grupos de produtos</legend>
              <p class="form-text">Cada categoria usa um grupo. Você pode selecionar o mesmo grupo em mais de uma categoria.</p>
              <div class="row g-3">
                <div class="col-12 col-md-4">
                  <label for="grupo-pacotes" class="form-label">Produtos finais (pacotes)</label>
                  <select class="form-select grupo-produto" id="grupo-pacotes" required><option value="">Selecione um grupo</option></select>
                </div>
                <div class="col-12 col-md-4">
                  <label for="grupo-bobinas" class="form-label">Matéria-prima (bobinas)</label>
                  <select class="form-select grupo-produto" id="grupo-bobinas" required><option value="">Selecione um grupo</option></select>
                </div>
                <div class="col-12 col-md-4">
                  <label for="grupo-concentrados" class="form-label">Matéria-prima (concentrados)</label>
                  <select class="form-select grupo-produto" id="grupo-concentrados" required><option value="">Selecione um grupo</option></select>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="salvar-marca">Adicionar marca</button>
          </div>
        </div>
      </div>
    </div>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="./assets/js/index.js"></script>
</body>
</html>
