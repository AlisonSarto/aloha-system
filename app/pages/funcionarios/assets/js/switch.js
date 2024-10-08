$(document).on('change', '.ativo', function () {

  var id = $(this).data('id');

  const btn = $(this).parent().find('input');

  //? Se estiver ativando o funcionario, pergunta em qual setor setor colocar ele
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
          <label class="form-label">Setor</label>
          <select class="form-select" id="setor">
            <option selected disabled>Selecione um setor</option>
          </select>
        </div>
      </div>
    `);

    //? Carregar os setores
    $.ajax({
      url: '/api/setores/view',
      type: 'GET',
      success: function (data) {
        setores = data.setores;
        setores.forEach(setor => {
          $('#setor').append(`<option value="${setor.id}">${setor.nome}</option>`);
        });
        modal.modal('show');
      },
      error: function (data) {
        console.log(data);
        toast('Erro ao carregar setores', 'danger');
      }
    });

    $('#salvar').click(function () {
      setor_id = $('#setor').val();
      if (setor_id == 0) {
        toast('Selecione um setor', 'danger');
        return;
      }

      $.ajax({
        url: '/api/funcionarios/switch',
        type: 'POST',
        data: {
          id: id,
          setor_id: setor_id
        },
        success: function () {
          newTable();
          modal.modal('hide');
        },
        error: function (data) {
          toast('Erro ao alterar ativo', 'danger');
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
      setor_id: 0
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