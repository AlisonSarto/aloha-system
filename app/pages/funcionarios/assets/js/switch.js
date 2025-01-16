$(document).on('change', '.ativo', function () {

  var id = $(this).data('id');

  const btn = $(this).parent().find('input');

  //? Se estiver ativando o funcionario, pergunta em qual maquina maquina colocar ele
  if (btn.prop('checked')) {

    btn.prop('checked', false);
    const modal = $('#modal');

    modal.find('.modal-title').text('Ativar Funcionario');
    modal.find('.modal-footer').html(`
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
      <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
    `);
    modal.find('.modal-body').html(`
      <div class="row">
        <div class="col-12">
          <label class="form-label">Máquina</label>
          <select class="form-select" id="maquina">
            <option selected disabled>Selecione um maquina</option>
          </select>
        </div>
      </div>
    `);

    //? Carregar as maquinas
    $.ajax({
      url: '/api/maquinas/view',
      type: 'GET',
      success: function (data) {
        maquinas = data.maquinas;
        maquinas.forEach(maquina => {
          $('#maquina').append(`<option value="${maquina.id}">${maquina.nome}</option>`);
        });
        modal.modal('show');
      },
      error: function (data) {
        console.log(data);
        toast('Erro ao carregar maquinas', 'danger');
      }
    });

    $('#salvar').click(function () {
      maquina_id = $('#maquina').val();
      if (maquina_id == 0) {
        toast('Selecione um maquina', 'danger');
        return;
      }

      $.ajax({
        url: '/api/funcionarios/switch',
        type: 'POST',
        data: {
          id: id,
          maquina_id: maquina_id
        },
        success: function () {
          newTable();
          modal.modal('hide');
        },
        error: function (data) {
          message = data.responseJSON.message;
          toast(message, 'danger');
          console.log(data);
          modal.modal('hide');
        }
      });

    });

    return;

  }

  $.ajax({
    url: '/api/funcionarios/switch',
    type: 'POST',
    data: {
      id: id,
      maquina_id: 0
    },
    success: function() {
      newTable();
    },
    error: function(data) {
      toast('Erro ao alterar ativo', 'danger');
      newTable();
      console.log(data);
      btn.prop('checked', !btn.prop('checked'));
    }
  });

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};