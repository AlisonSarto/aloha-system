$(document).on('click', '.activate-modo', function() {

  id = $(this).parent().data('id');
  var name = $(this).parent().data('name');
  var descricao = $(this).parent().data('descricao');

  //? Tempo de espera em s
  contador = 5;

  //* Mostra modal de confirmação
  $('#modal .modal-title').html(`Ativar o modo ${name}?`);
  $('#modal .modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-success" id="ativar" disabled><i class="fas fa-bolt"></i> Ativar ${contador}s</button>
  `);
  $('#modal .modal-body').html(`
    <p>
      Apenas ative esse modo caso a situação atual seja igual a: <br>
      <strong>${descricao}</strong>
    </p>
  `);
  $('#modal').modal('show');
  
  //* Libera o ativar depois do tempo
  var interval = setInterval(function() {
    
    contador--;
    $('#ativar').html(`<i class="fas fa-bolt"></i> Ativar ${contador}s`);
    if (contador == 0) {
      $('#ativar').prop('disabled', false);
      $('#ativar').html(`<i class="fas fa-bolt"></i> Ativar`);
      clearInterval(interval);
    }

    //? Se fechar o modal para a contagem
    $('#modal').on('hidden.bs.modal', function() {
      clearInterval(interval);
    });

  }, 1000);

  //? Ativa o modo
  $('#ativar').click(function() {

    $.ajax({
      url: `/api/modos/activate`,
      type: 'POST',
      data: {id: id},
      beforeSend: function() {
        $('#ativar').html('<i class="fas fa-spinner fa-spin"></i> Ativando...');
        $('#ativar').attr('disabled', true);
      },
      success: function(data) {
        message = data.message;
        $('#modal').modal('hide');
        newTableModo();
      },
      error: function(error) {
        console.log(error);
        var message = error.responseJSON.message;
        $('#ativar').html('<i class="fas fa-bolt"></i> Ativar');
        $('#ativar').attr('disabled', false);
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
}