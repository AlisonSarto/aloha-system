$(document).on('click', '.view-modo', function() {

  id = $(this).parent().data('id');

  const modal = $('#modal');
  modal.find('.modal-title').text('Visualizar Modo de Produção');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Nome</label>
        <input type="text" id="nome" class="form-control" disabled>
      </div>

      <div class="col-12">
        <label class="form-label">Descrição</label>
        <textarea id="descricao" class="form-control" disabled></textarea>
      </div>

      <div class="col-12">
        <label class="form-label">Podução Mínima</label>
        <div class="input-group">
          <input type="number" id="minimo" class="form-control" disabled>
          <span class="input-group-text">pacotes por hora</span>
        </div>
      </div>

      <div class="col-12">
        <label class="form-label">Meta de produção</label>
        <div class="input-group">
          <input type="number" id="meta" class="form-control" disabled>
          <span class="input-group-text">pacotes por hora</span>
        </div>
      </div>

    </div>

  `);

  $.ajax({
    url: '/api/modos/view',
    type: 'GET',
    data: { id: id },
    success: function(data) {
      const modo = data.modos;
      $('#nome').val(modo.nome);
      $('#descricao').val(modo.descricao);
      $('#minimo').val(modo.minimo);
      $('#meta').val(modo.meta);
      modal.modal('show');
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

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};