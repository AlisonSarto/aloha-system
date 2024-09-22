$(document).on('click', '.delete-turno', function() {
  var id = $(this).parent().data('id');
  var turno = $(this).parent().data('name');

  //? Tempo de espera em s
  contador = 2;

  //* Mostra modal de confirmação
  $('#modal .modal-title').html('Deletar turno');
  $('#modal .modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-danger" id="delete" disabled>Deletar ${contador}s</button>
  `);
  $('#modal .modal-body').html(`
    <p>
      Deseja realmente deletar o turno <b>${turno}</b>? <br>
      <b>Obs:</b> O histórico de entradas desse turno não será deletado.
    </p>
  `);
  $('#modal').modal('show');
  
  //* Libera o deletar depois do tempo
  var interval = setInterval(function() {
    
    contador--;
    $('#delete').html(`Deletar ${contador}s`);
    if (contador == 0) {
      $('#delete').prop('disabled', false);
      $('#delete').html(`Deletar`);
      clearInterval(interval);
    }

    //? Se fechar o modal para a contagem
    $('#modal').on('hidden.bs.modal', function() {
      clearInterval(interval);
    });

  }, 1000);

  //? Deleta o usuário
  $('#delete').click(function() {

    $.ajax({
      url: `/api/turnos/delete?id=${id}`,
      type: 'DELETE',
      beforeSend: function() {
        $('#delete').html('<i class="fas fa-spinner fa-spin"></i> Deletando...');
        $('#delete').attr('disabled', true);
      },
      success: function(data) {
        message = data.message;
        newTable();
        $('#modal').modal('hide');
        toast(message, 'success');
      },
      error: function(error) {
        console.log(error);
        var message = error.responseJSON.message;
        $('#delete').html('Deletar');
        $('#delete').attr('disabled', false);
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