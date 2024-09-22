$(document).on('click', '.edit-meta-producao', function() {

  id = $(this).parent().data('id');

  const modal = $('#modal');
  modal.find('.modal-title').text('Visualizar');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <label class="form-label">Pontuação</label>
        <div class="input-group">
          <input type="number" id="pontuacao" class="form-control">
          <span class="input-group-text">pontos</span>
        </div>
      </div>

    </div>

  `);

  var ativo;

  $.ajax({
    url: '/api/automacoes/meta-producao',
    type: 'GET',
    success: function(data) {
      const db = data.data;
      ativo = db.ativo;
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

  $('#salvar').click(function() {
      
    const pontuacao = $('#pontuacao').val();

    if (pontuacao == '') {
      toast('Preencha todos os campos', 'danger');
      return;
    }

    if (pontuacao < 0) {
      toast('A pontuação deve ser maior ou igual a 0', 'danger');
      return;
    }

    $.ajax({
      url: '/api/automacoes/meta-producao',
      type: 'POST',
      data: {
        pontuacao: pontuacao,
        ativo: ativo
      },
      success: function(data) {
        var message = data.message;
        toast(message, 'success');
        modal.modal('hide');
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

//!!
$(document).on('change', '#switch-meta-producao', function() {
  var checked = $(this).prop('checked');

  var pontuacao;

  $.ajax({
    url: '/api/automacoes/meta-producao',
    type: 'GET',
    success: function(data) {
      const db = data.data;
      pontuacao = db.pontuacao;
      salva();
    },
    error: function(error) {
      console.log(error);
      message = error.responseJSON.message;
      toast(message, 'danger');
    }
  });
  
  function salva() {
    $.ajax({
      url: '/api/automacoes/meta-producao',
      type: 'POST',
      data: {
        ativo: checked,
        pontuacao: pontuacao
      },
      error: function(error) {
        console.log(error);
        message = error.responseJSON.message;
        toast(message, 'danger');
        newTableBonificacao();
      }
    });
  }
  
});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};