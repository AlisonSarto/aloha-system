$(document).on('click', '.view-usuario', function() {

  id = $(this).parent().data('id');
      
  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);

  //? Puxa os dados do usuário
  $.ajax({
    url: '/api/usuarios/view',
    type: 'GET',
    data: {
      id: id
    },
    success: function(response) {
      creatModal(response.usuarios);
      $('#modal').modal('show');

      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);
    },
    error: function(error) {
      message = error.responseJSON.message;
      console.log(error);
      toast(message,'danger');

      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);
    }
  });

  //? Visualizar senha
  $(document).on('click', '#view-password', function() {
    input = $(this).parent().find('input');
    type = input.attr('type');
    if (type == 'password') {
      input.attr('type', 'text');
      $(this).html('<i class="fas fa-eye-slash"></i>');
    } else {
      input.attr('type', 'password');
      $(this).html('<i class="fas fa-eye"></i>');
    }
  });
  
});

function creatModal(usuario) {

  nome = usuario.nome;
  email = usuario.email.replace('@aloha.com','');
  cargo = usuario.cargo.nome;
  senha = usuario.senha;

  modal = $('#modal');
  modal.find('.modal-title').text('Visualizar Usuário');
  modal.find('.modal-footer').html('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>');
  
  modal.find('.modal-body').html(`

    <div class="card">
      <div class="card-header">
        <i class="fas fa-user"></i>
        Infomações Gerais
      </div>
      <div class="card-body row">

        <div class="col-md-6">
          <label class="form-label">Nome</label>
          <input type="text" class="form-control" value="${nome}" disabled>
        </div>

        <div class="col-md-6">
          <label class="form-label">Cargo</label>
          <input type="text" class="form-control" value="${cargo}" disabled>
        </div>

      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fas fa-key"></i>
        Infomações de Acesso
      </div>
      <div class="card-body row">

        <div class="col-md-6">
          <label class="form-label">E-mail</label>
          <div class="input-group">
            <input type="text" class="form-control" value="${email}" disabled>
            <span class="input-group-text">@aloha.com</span>
          </div>
        </div>

        <div class="col-md-6">
          <label class="form-label">Senha</label>
          <div class="input-group">
            <input type="password" class="form-control" value="${senha}" disabled>
            <a class="input-group-text cursor-pointer" id="view-password"><i class="fas fa-eye"></i></a>
          </div>
        </div>

      </div>            
    </div>

  `);

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};