# Criando uma nova página

<hr>

lembre-se: `var [page] = "nome_da_sua_pagina"`

## Adionando uma nova página na slidebar

Particularmente quando vou criar uma nova página, eu gosto de adicionar primeiro na sidebar, para que eu possa ter uma visão geral de como ficará o site, e também para que eu possa navegar entre as páginas.

Para adiconar uma nova página na sidebar, basta adicionar o nome do arquivo na lista de arquivos da sidebar, que fica no arquivo `assets/json/paginas.json`.

```json
{
  "paginas": [

    { "type": "link", "title": "Relatórios", "icon": "chart-area", "path": "relatorios" },

    { "type": "collapse", "title": "Aloha ID", "icon": "face-smile far", "pages": [
      { "type": "link", "title": "Rostos", "icon": "face-smile far", "path": "rostos" },
      { "type": "link", "title": "Pontos", "icon": "circle-dot far", "path": "pontos" },
      { "type": "link", "title": "Marcar Ponto", "icon": "id-badge far", "path": "marcar-ponto" },
    ]}
  ]
}
```

## Criando os arquivos

Para criar uma nova página, basta criar uma nova pasta em `app/pages/[page]/`, como já foi dito anteriormente, dentro dessa pasta, você deve criar um arquivo `index.php` e colocar os CSS e JS que você irá utilizar apenas nessa página na pasta `app/pages/[page]/assets/`.

## Estrutura da página

Nessa pagina temos a importação dos arquivos css e js do `bootstrap`, `fontawesome` e `jquery`, que são essenciais para o site rodar. Além disso, temos o `modal` e o `toast`.
Lembrando que não contém a navbar porque ela é adicionada automaticamente no arquivo `/app/index.html`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>[page] - Gelo System</title>
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
      <i class="fas fa-page me-2"></i>
      [page]
    </h1>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <!-- Controls -->
  <script>
    function toast(text,color) {
      $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
      $('.toast-header').addClass('text-bg-'+color);
      $('.toast-body').text(text);
      $('#toast').toast('show');
    };
    function modal(title,body,footer) {
      $('.modal-title').text(title);
      $('.modal-body').html(body);
      $('.modal-footer').html(footer);
      $('#modal').modal('show');
    };
  </script>
</body>
</html>
```

## Segurança de acesso

Para garantir que apenas quem ter permissão vai acessar sua página, você deve adicionar o seguinte código no início do arquivo `index.php`:

```php
<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('[page]', 'visualizar');

?>
```

## Adicionar a página nos cargos

Os cargos definem quem pode acessar a página, para adicionar a página em um cargo, basta adicionar o nome da página na lista de páginas do cargo, que fica no arquivo `assets/json/cargos.json`.

```json
{
  "cargos"
}
```