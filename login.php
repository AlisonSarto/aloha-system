<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Gelo System</title>
  <link rel="shortcut icon" href="/assets/imgs/favicon.ico" type="image/x-icon">
  <link href="/libs/bootstrap/bootstrap.css" rel="stylesheet">
</head>
<body class="text-center d-flex justify-content-center align-items-center" style="background:#1d2a35;height:100vh">
  
  <div class="card border-0 m-4" style="max-width:400px">

    <div class="card-header d-flex justify-content-center" style="background:#04AA6D">
      <img src="/assets/imgs/logo.png" class="img-fluid" alt="Gelo System" width="220">
    </div>

    <div class="card-body p-4">

      <h1>Login</h1>
      <hr>

      <div>

        <div class="input-group mb-3">
          <div class="input-group-text">
            <i class="far fa-circle-user fa-lg"></i>
          </div>
          <input type="text" class="form-control" id="email">
        </div>
        
        <div class="input-group">
          <div class="input-group-text">
            <i class="fas fa-lock"></i>
          </div>
          <input type="password" class="form-control" id="senha">
        </div>

        <br>

        <input type="button" class="btn btn-success mb-3 w-100" id="submit" value="Entrar">

      </div>
    </div>
  </div>

  <!-- Toast -->
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header text-bg-success">
        <img src="/assets/imgs/favicon.ico" class="rounded icone me-2" width="27">
        <strong class="me-auto">Gelo System</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body"></div>
    </div>
  </div>

  <script src="/libs/jquery/jquery.js"></script>
  <script src="/libs/bootstrap/bootstrap.js"></script>
  <script src="/libs/font-aweresome/font-aweresome.js"></script>
  <script>
    $(document).ready(function() {

      toast('Bem vindo ao Gelo System!','success');

      $('#email').focus();

      $('input').keypress(function(e) {
        if (e.which == 13) {
          $('#submit').click();
        }
      });

      $('#submit').click(function() {
        var email = $('#email').val();
        var senha = $('#senha').val();

        if (email === "" || senha === "") {
          toast('Preencha todos os campos','danger');
        }else {
          $('#submit').prop('disabled', true);
          $('#submit').val('Entrando...');

          $.ajax({
            url: '/api/login/',
            type: 'POST',
            data: {
              email: email,
              senha: senha
            },
            success: function(data) {
              if (data.status == 200) {
                toast(data.message,'success');
                $('#submit').val('Redirecionando...');
                window.location.href = '/';
              }else {
                $('#submit').val('Entrar');
                $('#submit').prop('disabled', false);
              }
            },
            error: function(xhr) {

              var errorData = JSON.parse(xhr.responseText);
              var errorMessage = errorData.message;

              toast(errorMessage,'danger');
              $('#submit').val('Entrar');
              $('#submit').prop('disabled', false);

            }
          });
        }
      });
      
      function toast(text,color) {
        $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
        $('.toast-header').addClass('text-bg-'+color);
        $('.toast-body').text(text);
        $('#liveToast').toast('show');
      }

    });
  </script>
</body>
</html>