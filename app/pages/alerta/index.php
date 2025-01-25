<?php

  include $_SERVER['DOCUMENT_ROOT'].'/server/funcs/acess.php';
  acess('alerta', 'visualizar');

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <title>Alerta - Gelo System</title>
  <link rel="stylesheet" href="/libs/bootstrap/bootstrap.css">
</head>
<body>
  
  <main class="container-fluid px-4">

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <!-- Card Wrapper -->
          <div class="card shadow border-0">
            <div class="card-body">
              <h1 class="h4 text-center text-primary mb-4">Enviar Mensagem</h1>
              
              <!-- Form -->
              <form id="messageForm">
                <div class="mb-3">
                  <label for="messageInput" class="form-label">Digite sua mensagem:</label>
                  <textarea class="form-control" id="messageInput" rows="4" placeholder="Digite sua mensagem aqui..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Enviar</button>
              </form>

              <!-- Feedback -->
              <div id="responseMessage" class="alert mt-3 d-none"></div>
            </div>
          </div>
          <!-- End Card -->
        </div>
      </div>
    </div>

  </main>

  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script src="/libs/jquery/jquery.js"></script>
  <!-- Controls -->
  <script>
    $(document).ready(function () {
      $("#messageForm").on("submit", function (e) {
        e.preventDefault();

        const message = $("#messageInput").val();
        const responseMessage = $("#responseMessage");

        if (!message) {
          responseMessage
            .removeClass("d-none text-success")
            .addClass("text-danger")
            .text("Por favor, digite uma mensagem.");
          return;
        }

        // Enviar a mensagem para o servidor
        $.ajax({
          url: "/api/alerta/send",
          method: "POST",
          data: {
            text: message
          },
          success: function () {
            responseMessage
              .removeClass("d-none text-danger")
              .addClass("text-success")
              .text("Mensagem enviada com sucesso!");
            $("#messageInput").val(""); // Limpar o campo de texto
          },
          error: function (err) {
            console.log(err);
            responseMessage
              .removeClass("d-none text-success")
              .addClass("text-danger")
              .text("Erro ao enviar a mensagem. Tente novamente.");
          }
        });
      });
    });
  </script>
</body>
</html>