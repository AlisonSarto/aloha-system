<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/access.php';
  access('fabricas', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fábricas - Aloha System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>

  <main class="container-fluid px-4">

    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 py-4">
      <div>
        <h1 class="mb-1 d-flex align-items-center"><i class="fas fa-industry me-2" aria-hidden="true"></i>Fábricas</h1>
        <p class="text-body-secondary mb-0">Conecte cada fábrica ao Gestão Click e escolha a loja vinculada.</p>
      </div>
      <button type="button" class="btn btn-primary align-self-start align-self-md-center" id="add-fabrica">
        <i class="fas fa-plus me-1" aria-hidden="true"></i> Adicionar fábrica
      </button>
    </div>

    <div id="mensagem-configuracao" class="alert alert-info" role="status" aria-live="polite">
      Cada fábrica possui sua própria integração e pode ter várias marcas.
    </div>

    <section class="card mb-4" aria-labelledby="titulo-fabricas">
      <div class="card-header" id="titulo-fabricas"><i class="fas fa-list me-1" aria-hidden="true"></i> Fábricas cadastradas</div>
      <div class="card-body table-responsive">
        <table class="table table-striped align-middle mb-0">
          <caption class="visually-hidden">Fábricas e lojas vinculadas</caption>
          <thead><tr><th scope="col">Fábrica</th><th scope="col">Loja Gestão Click</th><th scope="col">Ações</th></tr></thead>
          <tbody id="fabricas-lista"><tr><td colspan="3" class="text-center text-body-secondary">Carregando fábricas...</td></tr></tbody>
        </table>
      </div>
    </section>

    <div class="modal fade" id="modal-adicionar-fabrica" tabindex="-1" aria-labelledby="titulo-modal-adicionar" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <div class="small text-primary fw-semibold text-uppercase mb-1">Etapa 1 de 2</div>
              <h2 class="modal-title fs-5" id="titulo-modal-adicionar">Conectar uma fábrica</h2>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <p class="text-body-secondary">Informe o nome e as credenciais. Vamos validá-las antes de mostrar as lojas disponíveis.</p>
            <div id="erro-adicionar-fabrica" class="alert alert-danger d-none" role="alert"></div>
            <div class="mb-3">
              <label for="novo-nome-fabrica" class="form-label">Nome da fábrica</label>
              <input type="text" class="form-control" id="novo-nome-fabrica" maxlength="100" autocomplete="organization" required>
            </div>
            <div class="mb-3">
              <label for="novo-access-token" class="form-label">Access token</label>
              <input type="password" class="form-control" id="novo-access-token" autocomplete="new-password" required>
            </div>
            <div>
              <label for="novo-secret-access-token" class="form-label">Secret access token</label>
              <input type="password" class="form-control" id="novo-secret-access-token" autocomplete="new-password" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="validar-fabrica">
              Validar e continuar <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modal-editar-fabrica" tabindex="-1" aria-labelledby="titulo-modal-editar" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5" id="titulo-modal-editar">Editar fábrica</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body">
            <div id="erro-editar-fabrica" class="alert alert-danger d-none" role="alert"></div>
            <input type="hidden" id="editar-fabrica-id">
            <div class="row g-3">
              <div class="col-12">
                <label for="editar-nome-fabrica" class="form-label">Nome da fábrica</label>
                <input type="text" class="form-control" id="editar-nome-fabrica" maxlength="100" required>
              </div>
              <div class="col-12 col-md-6">
                <label for="editar-access-token" class="form-label">Novo access token</label>
                <input type="password" class="form-control" id="editar-access-token" autocomplete="new-password">
              </div>
              <div class="col-12 col-md-6">
                <label for="editar-secret-access-token" class="form-label">Novo secret access token</label>
                <input type="password" class="form-control" id="editar-secret-access-token" autocomplete="new-password">
              </div>
              <div class="col-12 form-text">Deixe os tokens vazios para manter as credenciais atuais.</div>
              <div class="col-12 col-md-8">
                <label for="editar-loja-fabrica" class="form-label">Loja vinculada</label>
                <select class="form-select" id="editar-loja-fabrica"></select>
              </div>
              <div class="col-12 col-md-4 d-flex align-items-end">
                <button type="button" class="btn btn-outline-primary w-100" id="carregar-lojas-edicao">Atualizar lojas</button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" id="salvar-edicao-fabrica">Salvar alterações</button>
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
