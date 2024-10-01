$(document).on('click', '.edit-meta', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  id = $(this).parent().data('id');

  modal = $('#modal');
  modal.find('.modal-title').text('Editar meta');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="col-12">
      <label class="form-label">Quantidade de funcionarios trabalhando</label>
      <input type="number" class="form-control" id="funcionarios">
    </div>

    <div class="col-12">
      <label class="form-label">Meta por hora</label>
      <input type="number" class="form-control" id="meta">
    </div>

    <div class="col-12">
      <label class="form-label">Cenário da meta</label>
      <textarea class="form-control" id="cenario" rows="6"></textarea>
    </div>

  `);

  //? Carregar os dados do meta
  $.ajax({
    url: '/api/metas/view',
    data: { id: id },
    method: 'GET',
    success: function (data) {
      const meta = data.metas;

      $('#cenario').val(meta.cenario);
      $('#funcionarios').val(meta.qtd_funcionarios);
      $('#meta').val(meta.meta);

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

    cenario = $('#cenario').val();
    funcionarios = $('#funcionarios').val();
    meta = $('#meta').val();

    dados = {
      id: id,
      cenario: cenario,
      funcionarios: funcionarios,
      meta: meta
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/metas/edit',
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