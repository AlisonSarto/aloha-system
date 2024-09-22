$(document).on('click', '.rosto', function() {

  var rostoId = $(this).data('rosto-id');

  $(document).on('aloha-id-captured', function() {

    base64 = $('#aloha-id-img').val();

    $.ajax({
      url: '/api/rostos/verificar',
      type: 'POST',
      data: {
        rosto_id: rostoId,
        img: $('#aloha-id-img').val()
      },
      success: function(data) {
        if (data.status == 200) {
          addPonto(rostoId);
        }else {
          message = data.message;
          toast(message, 'danger');
          setTimeout(function() {
            window.location.reload();
          }, 1500);
        }
      },
      error: function(error) {
        console.log(error);
        message = error.responseJSON.message;
        toast(message, 'danger');
        setTimeout(function() {
          window.location.reload();
        }, 1500);
      }
    });

  });

});

function addPonto(rosto_id) {

  $.ajax({
    url: '/api/pontos/add',
    type: 'POST',
    data: {
      rosto_id: rosto_id
    },
    success: function() {
      toast('Ponto adicionado com sucesso!', 'success');
      setTimeout(function() {
        window.location.reload();
      }, 1500);
    },
    error: function(error) {
      console.log(error);
      message = error.responseJSON.message;
      toast(message, 'danger');
    }
  });

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};