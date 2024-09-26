$(document).on('click', '.edit-funcionario', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  id = $(this).parent().data('id');

  modal = $('#modal');
  modal.find('.modal-title').text('Editar Funcionário');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Nome</label>
        <input type="text" id="nome" class="form-control" disabled>
      </div>
      
      <div class="col-12">
        <label class="form-label">Turno</label>
        <select id="turno" class="form-select">
          <option selected disabled>Selecione...</option>
        </select>
      </div>
      
      <div class="col-12">
        <label class="form-label">Pontuação</label>
        <input type="number" id="pontuacao" class="form-control">
      </div>

    </div>

  `);

  //? Carregar turnos no select
  $.ajax({
    url: '/api/turnos/view',
    method: 'GET',
    success: function (data) {
      turnos = data.turnos;
      $.each(turnos, function (i, item) {
        $('#turno').append(`
          <option value="${item.id}">${item.nome}</option>
        `);
      });
    },
    error: function (err) {
      console.log(err);
      var message = err.responseJSON.message;
      toast(message, 'danger');
    }
  });

  //? Carregar os dados do funcionário
  $.ajax({
    url: '/api/funcionarios/view',
    data: { id: id },
    method: 'GET',
    success: function (data) {
      funcionario = data.funcionarios;

      $('#nome').val(funcionario.nome);
      $('#turno').val(funcionario.turno_id);
      $('#pontuacao').val(funcionario.pontuacao);

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

    var turno = $('#turno').val();
    var pontuacao = $('#pontuacao').val();

    //? Verifica se mudou alguma coisa em comparação com o banco de dados
    if (turno == funcionario.turno_id && pontuacao == funcionario.pontuacao) {
      toast('Nada foi alterado', 'danger');
      return;
    }

    if (turno == null || turno == undefined) {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    dados = {
      id: id,
      turno: turno,
      pontuacao: pontuacao
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/funcionarios/edit',
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

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};