$(document).on('click', '#add-modo', function() {

  const modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Modo de Produção');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Nome</label>
        <input type="text" id="nome" class="form-control">
      </div>

      <div class="col-12">
        <label class="form-label">Descrição</label>
        <textarea id="descricao" class="form-control" placeholder="Descreva a situação onde se deve usar esse modo"></textarea>
      </div>

      <div class="col-12">
        <label class="form-label">Podução Mínima</label>
        <div class="input-group">
          <input type="number" id="minimo" class="form-control">
          <span class="input-group-text">pacotes por hora</span>
        </div>
      </div>

      <div class="col-12">
        <label class="form-label">Meta de produção</label>
        <div class="input-group">
          <input type="number" id="meta" class="form-control">
          <span class="input-group-text">pacotes por hora</span>
        </div>
      </div>

    </div>

  `);

  modal.modal('show');
  
  //* Salvar
  $('#salvar').click(function() {

    nome = $('#nome').val();
    descricao = $('#descricao').val();
    minimo = $('#minimo').val();
    meta = $('#meta').val();

    if (nome == '' || descricao == '' || meta == '') {
      toast('Preencha todos os campos!', 'danger');
      return false;
    }

    if (meta <= 0) {
      toast('A meta deve ser maior que zero!', 'danger');
      return false;
    }

    if (minimo <= 0) {
      toast('A produção mínima deve ser maior que zero!', 'danger');
      return false;
    }

    dados = {
      nome: nome,
      descricao: descricao,
      minimo: minimo,
      meta: meta
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/modos/add',
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
        newTableModo();
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