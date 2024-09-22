$(document).on('click', '#sync', function () {

  $(this).html('<i class="fa-solid fa-rotate fa-spin"></i>');
  $(this).attr('disabled', true);

  $.ajax({
    url: '/api/pacotes/integration/sync',
    type: 'GET',
    success: function () {
      newChartEstoque();
      $('#sync').html('<i class="fa-solid fa-check fa-bounce"></i>');
      $('#sync').attr('disabled', false);
      setTimeout(() => {
        $('#sync').html('<i class="fa-solid fa-rotate"></i>');
      }, 2000);
    },
    error: function (err) {
      var message = err.responseJSON.message;
      toast(message, 'danger');
      $(this).html('<i class="fa-solid fa-sync"></i>');
      $(this).attr('disabled', false);
    }
  });

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};