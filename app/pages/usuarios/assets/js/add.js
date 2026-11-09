$(document).on('click', '#add-usuario', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Usuário');
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
          <label class="form-label" for="nome">Nome</label>
          <input type="text" id="nome" class="form-control">
        </div>

        <div class="col-md-6">
          <label class="form-label" for="cargo">Cargo</label>
          <select class="form-select" id="cargo">
            <option disabled selected></option>
          </select>
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
          <label class="form-label" for="email">E-mail</label>
          <div class="input-group">
            <input type="text" class="form-control" id="email">
            <span class="input-group-text">@aloha.com</span>
          </div>
        </div>

        <div class="col-md-6">
          <label class="form-label" for="senha">Senha</label>
          <input type="text" class="form-control" id="senha">
        </div>

      </div>            
    </div>

    <br>

    <div class="card">
      <div class="card-header"><i class="fas fa-industry me-1" aria-hidden="true"></i> Acesso às fábricas</div>
      <div class="card-body">
        <p class="text-body-secondary">Selecione as fábricas que este usuário poderá acessar.</p>
        <fieldset>
          <legend class="visually-hidden">Fábricas disponíveis para o usuário</legend>
          <div id="fabricas-usuario" class="d-flex flex-wrap gap-3"><span class="text-body-secondary">Carregando fábricas...</span></div>
        </fieldset>
      </div>
    </div>

  `);
  
  //? Carregar cargos no select
  $.getJSON('/api/cargos/view', function(data) {

    cargos = data.cargos;
    $.each(cargos, function(i, item) {
      $('#cargo').append(`
        <option value="${item.id}">${item.cargo}</option>
      `);
    });

    $.ajax({
      url: '/api/fabricas/view',
      type: 'GET',
      success: function(fabricaData) {
        $('#fabricas-usuario').empty();
        if (!fabricaData.fabricas.length) {
          $('#fabricas-usuario').html('<span class="text-body-secondary">Cadastre uma fábrica antes de criar usuários.</span>');
          toast('Cadastre uma fábrica antes de adicionar usuários', 'danger');
        }
        $.each(fabricaData.fabricas, function(i, fabrica) {
          var nomeFabrica = $('<div>').text(fabrica.nome).html();
          $('#fabricas-usuario').append(`
            <div class="form-check">
              <input class="form-check-input fabrica-usuario" type="checkbox" id="fabrica-usuario-${fabrica.id}" value="${fabrica.id}">
              <label class="form-check-label" for="fabrica-usuario-${fabrica.id}">${nomeFabrica}</label>
            </div>
          `);
        });
        modal.modal('show');
        btn.html('<i class="fas fa-plus"></i> Adicionar');
        btn.attr('disabled', false);
      },
      error: function(error) {
        var message = error.responseJSON && error.responseJSON.message ? error.responseJSON.message : 'Não foi possível carregar as fábricas';
        toast(message, 'danger');
        btn.html('<i class="fas fa-plus"></i> Adicionar');
        btn.attr('disabled', false);
      }
    });

    //* Salvar
    $('#salvar').click(function() {

      nome = $('#nome').val();
      cargo = $('#cargo').val();
      email = $('#email').val();
      senha = $('#senha').val();
      fabricaIds = [];
      $('.fabrica-usuario:checked').each(function() { fabricaIds.push($(this).val()); });

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

      if (fabricaIds.length === 0) {
        toast('Selecione ao menos uma fábrica para o usuário', 'danger');
        return;
      }

      dados = {
        nome: nome,
        cargo: cargo,
        email: email,
        senha: senha,
        fabrica_ids: fabricaIds
      };

      btn = $(this);
      btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
      btn.attr('disabled', true);

      $.ajax({
        url: '/api/usuarios/add',
        type: 'POST',
        data: dados,
        beforeSend: function() {
          $('#salvar').html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
          $('#salvar').attr('disabled', true);
        },
        success: function(data) {
          message = data.message;
          modal.modal('hide');
          toast(message, 'success');
          newTable();
        },
        error: function(error) {
          console.log(error);
          message = error.responseJSON.message;
          $('#salvar').html('Salvar');
          $('#salvar').attr('disabled', false);
          toast(message, 'danger');
        }
      });

    });

  });

  //? E-Mail rápido
  $(document).on('keyup', '#nome', function() {
    nome = $(this).val();
    nome = nome.toLowerCase();
    nome = nome.replace(/ /g, '');
    $('#email').val(nome);
  });
  
});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};
