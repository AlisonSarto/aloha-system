$(document).on('click', '.info-meta-producao', function() {

  id = $(this).parent().data('id');

  const modal = $('#modal');
  modal.find('.modal-title').text('Visualizar');
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
        <label class="form-label">Pontuação</label>
        <div class="input-group">
          <input type="number" id="pontuacao" class="form-control" disabled>
          <span class="input-group-text">pontos por pacote</span>
        </div>
      </div>

    </div>

  `);

  $.ajax({
    url: '/api/automacoes/meta-producao',
    type: 'GET',
    success: function(data) {
      const db = data.data;
      $('#nome').val(db.nome);
      $('#descricao').val(db.descricao);
      $('#pontuacao').val(db.pontuacao);
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