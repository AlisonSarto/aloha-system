$(document).on('click', '#add-meta', function() {

  const modal = $('#modal');
  modal.find('.modal-title').text('Adicionar meta');
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
  modal.modal('show');

  //* Salvar
  $('#salvar').click(function() {

    var cenario = $('#cenario').val();
    var funcionarios = $('#funcionarios').val();
    var meta = $('#meta').val();

    if (cenario == '' || funcionarios == '' || meta == '') {
      toast('Preencha todos os campos!', 'danger');
      return;
    }

    dados = {
      cenario: cenario,
      funcionarios: funcionarios,
      meta: meta
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/metas/add',
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