$(document).on('click', '.edit-usuario', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  id = $(this).parent().data('id');

  //? Verifica é o último usuário admin
  if ($(this).parent().parent().find('.delete-usuario').attr('disabled') == 'disabled') {
    disabled = 'disabled';
  } else {
    disabled = '';
  }

  modal = $('#modal');
  modal.find('.modal-title').text('Editar Usuário');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="card">
      <div class="card-header">
        <i class="fas fa-user"></i>
        Infomações Gerais
      </div>
      <div class="card-body row">

        <div class="col-md-6">
          <label class="form-label">Nome</label>
          <input type="text" id="nome" class="form-control">
        </div>
          
        <div class="col-md-6">
          <label class="form-label">Cargo</label>
          <select class="form-select" id="cargo" ${disabled}></select>
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
            <input type="text" class="form-control" id="email">
            <span class="input-group-text">@aloha.com</span>
          </div>
        </div>

        <div class="col-md-6">
          <label class="form-label">Senha</label>
          <input type="text" class="form-control" id="senha">
        </div>

      </div>            
    </div>

  `);

  //? Carregar cargos no select
  $.ajax({
    url: '/api/cargos/view',
    method: 'GET',
    success: function (data) {
      cargos = data.cargos;
      $.each(cargos, function (i, item) {
        $('#cargo').append(`
          <option value="${item.id}">${item.cargo}</option>
        `);
      });
    },
    error: function (err) {
      console.log(err);
      message = err.responseJSON.message;
      toast(message, 'danger');
    }
  });

  //? Carregar os dados do usuário
  $.ajax({
    url: '/api/usuarios/view',
    data: { id: id },
    method: 'GET',
    success: function (data) {
      usuario = data.usuarios;

      $('#nome').val(usuario.nome);
      $('#cargo').val(usuario.cargo_id);
      $('#email').val(usuario.email.replace('@aloha.com', ''));
      $('#senha').val(usuario.senha);

      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
      modal.modal('show');
    },
    error: function (err) {
      console.log(err);
      message = err.responseJSON.message;
      toast(message, 'danger');
      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    }
  });

  //* Salvar
  $('#salvar').click(function () {

    nome = $('#nome').val();
    cargo = $('#cargo').val();
    email = $('#email').val();
    senha = $('#senha').val();

    //? Verifica se mudou alguma coisa em comparação com o banco de dados
    if (nome == usuario.nome && cargo == usuario.cargo_id && email == usuario.email.replace('@aloha.com', '') && senha == usuario.senha) {
      toast('Nada foi alterado', 'danger');
      return;
    }

    if (cargo == null || cargo == undefined) {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    if (nome == '' || cargo == '' || email == '' || senha == '') {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    if (nome == ' ' || cargo == ' ' || email == ' ' || senha == ' ') {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    dados = {
      id: id,
      cargo: cargo,
      nome: nome,
      email: email,
      senha: senha
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/usuarios/edit',
      type: 'POST',
      data: dados,
      beforeSend: function () {
        $('#salvar').html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
        $('#salvar').attr('disabled', true);
      },
      success: function (data) {
        message = data.message;
        modal.modal('hide');
        toast(message, 'success');
        newTable();
      },
      error: function (error) {
        console.log(error);
        message = error.responseJSON.message;
        $('#salvar').html('Salvar');
        $('#salvar').attr('disabled', false);
        toast(message, 'danger');
      }
    });

  });

  //? E-Mail rápido
  $(document).on('keyup', '#nome', function () {
    nome = $(this).val();
    nome = nome.toLowerCase();
    nome = nome.replace(/ /g, '');
    $('#email').val(nome);
  });

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};