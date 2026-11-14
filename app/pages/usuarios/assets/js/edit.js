$(document).on('click', '.edit-usuario', function() {

  var botao = $(this);
  var id = botao.parent().data('id');
  botao.html('<i class="fas fa-spinner fa-spin"></i>');
  botao.attr('disabled', true);

  var disabled = botao.parent().parent().find('.delete-usuario').attr('disabled') === 'disabled' ? 'disabled' : '';
  var modal = $('#modal');
  modal.find('.modal-title').text('Editar Usuário');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="card">
      <div class="card-header"><i class="fas fa-user" aria-hidden="true"></i> Informações gerais</div>
      <div class="card-body row g-3">
        <div class="col-md-6">
          <label class="form-label" for="nome">Nome</label>
          <input type="text" id="nome" class="form-control">
        </div>
        <div class="col-md-6">
          <label class="form-label" for="cargo">Cargo</label>
          <select class="form-select" id="cargo" ${disabled}></select>
        </div>
      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header"><i class="fas fa-key" aria-hidden="true"></i> Informações de acesso</div>
      <div class="card-body row g-3">
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

  $.when(
    $.ajax({ url: '/api/cargos/view', type: 'GET' }),
    $.ajax({ url: '/api/usuarios/view', data: { id: id }, type: 'GET' }),
    $.ajax({ url: '/api/fabricas/view', type: 'GET' })
  ).done(function(cargoResponse, usuarioResponse, fabricaResponse) {
    var cargos = cargoResponse[0].cargos || [];
    var usuario = usuarioResponse[0].usuarios;
    var fabricas = fabricaResponse[0].fabricas || [];
    var fabricasUsuario = (usuario.fabricas || []).map(function(fabrica) { return Number(fabrica.id); });

    $.each(cargos, function(i, item) {
      var nomeCargo = $('<div>').text(item.cargo).html();
      $('#cargo').append(`<option value="${item.id}">${nomeCargo}</option>`);
    });
    $('#nome').val(usuario.nome);
    $('#cargo').val(usuario.cargo_id);
    $('#email').val(usuario.email.replace('@aloha.com', ''));
    $('#senha').val(usuario.senha);

    $.each(fabricas, function(i, fabrica) {
      var nomeFabrica = $('<div>').text(fabrica.nome).html();
      var checked = fabricasUsuario.indexOf(Number(fabrica.id)) > -1 ? 'checked' : '';
      $('#fabricas-usuario').append(`
        <div class="form-check">
          <input class="form-check-input fabrica-usuario" type="checkbox" id="fabrica-usuario-${fabrica.id}" value="${fabrica.id}" ${checked}>
          <label class="form-check-label" for="fabrica-usuario-${fabrica.id}">${nomeFabrica}</label>
        </div>
      `);
    });

    botao.html('<i class="fas fa-pen-to-square"></i>');
    botao.attr('disabled', false);
    modal.modal('show');

    $('#salvar').on('click', function() {
      var nome = $('#nome').val().trim();
      var cargo = $('#cargo').val();
      var email = $('#email').val().trim();
      var senha = $('#senha').val();
      var fabricaIds = [];
      $('.fabrica-usuario:checked').each(function() { fabricaIds.push($(this).val()); });

      if (!nome || !cargo || !email || !senha) {
        toast('Preencha todos os campos', 'danger');
        return;
      }
      if (fabricaIds.length === 0) {
        toast('Selecione ao menos uma fábrica para o usuário', 'danger');
        return;
      }

      var fabricasAtuais = (usuario.fabricas || []).map(function(fabrica) { return Number(fabrica.id); }).sort();
      var fabricasNovas = fabricaIds.map(Number).sort();
      var fabricasMudaram = fabricasAtuais.join(',') !== fabricasNovas.join(',');
      if (nome === usuario.nome && cargo == usuario.cargo_id && email === usuario.email.replace('@aloha.com', '') && senha === usuario.senha && !fabricasMudaram) {
        toast('Nada foi alterado', 'danger');
        return;
      }

      var dados = {
        id: id,
        cargo: cargo,
        nome: nome,
        email: email,
        senha: senha,
        fabrica_ids: fabricaIds
      };
      var salvar = $(this);
      salvar.html('<i class="fas fa-spinner fa-spin"></i> Salvando...').attr('disabled', true);
      $.ajax({
        url: '/api/usuarios/edit',
        type: 'POST',
        data: dados,
        success: function(data) {
          modal.modal('hide');
          toast(data.message, 'success');
          newTable();
        },
        error: function(error) {
          var message = error.responseJSON && error.responseJSON.message ? error.responseJSON.message : 'Não foi possível salvar o usuário';
          toast(message, 'danger');
          salvar.text('Salvar').attr('disabled', false);
        }
      });
    });

  }).fail(function(error) {
    var message = error.responseJSON && error.responseJSON.message ? error.responseJSON.message : 'Não foi possível carregar os dados do usuário';
    toast(message, 'danger');
    botao.html('<i class="fas fa-pen-to-square"></i>');
    botao.attr('disabled', false);
  });

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
}
