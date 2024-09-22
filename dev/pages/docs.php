<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Gelo System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
</head>
<body>
  
  <main class="container">

    <br>
    <a href="/dev">
      <i class="fas fa-arrow-left me-2"></i>
      Voltar
    </a>

    <div class="my-4" id="markdown-container"></div>

    <br>

  </main>
  
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
  <script>
    $(document).ready(function () {
      var page = window.location.search.replace('?', '');
      $.ajax({
        url: `/dev/docs/${page}.md`,
        dataType: 'text',
        success: function (mdContent) {
          var htmlContent = marked.parse(mdContent);
          $('#markdown-container').html(htmlContent);
          document.title = $('#markdown-container h1').text();
          Prism.highlightAll();
        }
      });
    });
  </script>
</body>
</html>