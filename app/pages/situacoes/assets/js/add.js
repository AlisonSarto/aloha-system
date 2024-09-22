$(document).on('click', '#add-situacao', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  const modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Situação');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`
  
    <div class="card">
      <div class="card-header">
        <i class="fa-solid fa-circle-info"></i>
        Informações
      </div>
      <div class="card-body">

        <div class="row">

          <div class="col-12">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" id="nome">
          </div>

          <div class="col-12">
            <label for="descricao">Grupo</label>
            <select class="form-select" id="grupo">
              <option selected disabled>Selecione...</option>
            </select>
          </div>

        </div>
      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fa-solid fa-plus-minus"></i>
        Tipo
      </div>
      <div class="card-body">

        <div class="row">

          <div class="col-6">
            <button type="button" class="btn btn-success w-100" id="mais">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>

          <div class="col-6">
            <button type="button" class="btn btn-danger w-100" id="menos">
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>

        </div>

      </div>
    </div>

    <br>

    <div class="card">
      <div class="card-header">
        <i class="fa-solid fa-hashtag"></i>
        Pontuação
      </div>
      <div class="card-body">

        <div class="row">

          <div class="col-12">
            <label for="pontuacao">Pontuação</label>
            <input type="number" class="form-control" id="pontuacao">
          </div>

        </div>

      </div>
    </div>

  `);
  
  //? Carregar os grupos no select
  $.ajax({
    url: '/api/grupos-situacoes/view',
    type: 'GET',
    success: function(data) {
      grupos = data.grupos;
      select = $('#grupo');

      grupos.forEach(grupo => {
        select.append(`<option value="${grupo.id}">${grupo.nome}</option>`);
      });

      btn.html('<i class="fas fa-plus"></i> Adicionar');
      btn.attr('disabled', false);
      modal.modal('show');
    },
    error: function(error) {
      btn.html('<i class="fas fa-plus"></i> Adicionar');
      btn.attr('disabled', false);
      message = error.responseJSON.message;
      toast(message, 'danger');
    }
  });

  var tipo;

  $('#mais').click(function() {
    tipo = '+';
    $('#menos').removeClass('btn-danger');
    $('#menos').addClass('btn-secondary');
    $(this).removeClass('btn-secondary');
    $(this).addClass('btn-success');
  });

  $('#menos').click(function() {
    tipo = '-';
    $('#mais').removeClass('btn-success');
    $('#mais').addClass('btn-secondary');
    $(this).removeClass('btn-secondary');
    $(this).addClass('btn-danger');
  });

  //* Salvar
  $('#salvar').click(function() {

    nome = $('#nome').val();
    grupo = $('#grupo').val();
    pontuacao = $('#pontuacao').val();

    if (grupo == null) {
      toast('Selecione um grupo', 'danger');
      return;
    }

    if (tipo == undefined) {
      toast('Selecione um tipo', 'danger');
      return;
    }

    if (pontuacao == '') {
      toast('Informe a pontuação', 'danger');
      return;
    }

    dados = {
      nome: nome,
      grupo: grupo,
      tipo: tipo,
      pontuacao: pontuacao
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({ 
      url: '/api/situacoes/add',
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

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};