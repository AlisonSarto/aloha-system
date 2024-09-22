$(document).on('click', '.edit-concentrado', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  
  id = $(this).parent().data('id');
  sabor = $(this).parent().data('name');

  modal = $('#modal');
  modal.find('.modal-title').text(`Editar concentrado de ${sabor}`);
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);

  $.ajax({
    url: '/api/concentrados/view',
    type: 'GET',
    data: {
      id: id
    },
    success: function(data) {
      qtd = data.concentrados.qtd;

      modal.find('.modal-body').html(`
        <div class="row">

          <div class="col-12 mb-3">
            <label class="form-label">Função</label>
            <select class="form-select" id="funcao">
              <option value="final" selected>Definir a quantidade atual</option>
              <option value="adicionar">Adicionar da quantidade atual</option>
              <option value="remover">Remover da quantidade atual</option>
            </select>
          </div>

          <hr>

          <div class="col-12">
            <label class="form-label">Quantidade</label>
            <div class="input-group">
              <input class="form-control" id="qtd" value="${qtd}" onclick="$(this).select()">
              <span class="input-group-text">g</span>
            </div>
          </div>
            
        </div>
      `);
      modal.modal('show');
      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    },
    error: function(error) {
      console.log(error);
      toast(error.responseJSON.message, 'danger');
      btn.html('<i class="fas fa-pen-to-square"></i>');
      btn.attr('disabled', false);
    }
  });

  $('#salvar').click(function() {

    novaQtd = $('#qtd').val() ?? -1;
    funcao = $('#funcao').val();   

    if (novaQtd === qtd && funcao === 'final') {
      toast('A quantidade não pode ser a mesma', 'danger');
      return;
    }

    if (novaQtd < 0) {
      toast('Quantidade inválida', 'danger');
      return;
    }

    if (novaQtd == 0 && funcao !== 'final') {
      toast('Quantidade inválida', 'danger');
      return;
    }

    if (funcao === 'adicionar') {
      novaQtd = parseInt(qtd) + parseInt(novaQtd);
    } else if (funcao === 'remover') {
      novaQtd = parseInt(qtd) - parseInt(novaQtd);
    }

    var btnSalvar = $(this);
    btnSalvar.prop('disabled', true);
    btnSalvar.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');

    $.ajax({
      url: '/api/concentrados/edit',
      type: 'POST',
      data: {
        id: id,
        qtd: novaQtd
      },
      success: function(data) {
        message = data.message;
        toast(message, 'success');

        newTable();
        modal.modal('hide');
      },
      error: function(error) {
        console.log(error);
        toast(error.responseJSON.message, 'danger');
        
        btnSalvar.prop('disabled', false);
        btnSalvar.html('Salvar');
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