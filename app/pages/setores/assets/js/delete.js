$(document).on('click', '.delete-setor', function() {
  var id = $(this).parent().data('id');
  $this = $(this);
  setor = $this.parent().data('name');

  //? Tempo de espera em s
  contador = 1;

  //* Mostra modal de confirmação
  $('#modal .modal-title').html('Deletar Setor');
  $('#modal .modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-danger" id="delete" disabled>Deletar ${contador}s</button>
  `);
  $('#modal .modal-body').html(`
    <p>
      Deseja realmente deletar o setor <b>${setor}</b>? <br>
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

  //? Deleta o setor
  $('#delete').click(function() {

    $.ajax({
      url: `/api/setores/delete?id=${id}`,
      type: 'DELETE',
      beforeSend: function() {
        $('#delete').html('<i class="fas fa-spinner fa-spin"></i> Deletando...');
        $('#delete').attr('disabled', true);
      },
      success: function(data) {
        message = data.message;
        $('#modal').modal('hide');
        toast(message, 'success');
        newTable();
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