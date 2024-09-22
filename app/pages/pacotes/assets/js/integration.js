$(document).on('click', '.integration-pacote', function () {

  btn = $(this);
  id = $(this).parent().data('id');
  nome  = $(this).parent().data('name');
  atualIntegration = $(this).parent().data('integration');

  modal = $('#modal');
  modal.find('.modal-title').text(`Integrar pacote no Gestão Click`);
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <p>Selecione abaixo o produto que deseja vincular ao pacote de <b>${nome}</b></p>
    
    <div class="col-12">
      <select class="form-select" id="select-integration" disabled>
        <option>Carregando...</option>
      </select>
    </div>

  `);

  modal.modal('show');

  //? Preenche o select
  $.ajax({
    url: '/api/pacotes/integration/view',
    type: 'GET',
    success: function (data) {

      var pacotes = data.pacotes;
      var options = '<option disabled>Selecione...</option>';

      pacotes.forEach(db => {
        options += `
          <option value="${db.id}">${db.nome}</option>
        `;
      });

      $('#select-integration').html(options);
      $('#select-integration').attr('disabled', false);
      if (atualIntegration != null) {
        $('#select-integration').val(atualIntegration);
      }else {
        $('#select-integration').val($('#select-integration option:first').val());
      }
    },
    error: function (error) {
      console.log(error);
      toast('Erro ao carregar produtos', 'danger');
    }
  });

  //* Salvar
  $('#salvar').click(function () {

    var integration = $('#select-integration').val();

    $(this).html('Salvando...');
    $(this).attr('disabled', true);

    $.ajax({
      url: '/api/pacotes/integration/edit',
      type: 'POST',
      data: {
        id: id,
        integration: integration
      },
      success: function (data) {
        message = data.message;
        toast(message, 'success');
        modal.modal('hide');
        newTable();
      },
      error: function (error) {
        message = error.responseJSON.message;
        console.log(error);
        toast(message, 'danger');
        $('#salvar').html('Salvar');
        $('#salvar').attr('disabled', false);
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