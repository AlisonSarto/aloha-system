$(document).on('change', '.ativo', function () {

  var id = $(this).data('id');

  $.ajax({
    url: '/api/funcionarios/switch',
    type: 'POST',
    data: {
      id: id
    },
    success: function() {
      newTable();
    },
    error: function(data) {
      toast('Erro ao alterar ativo', 'danger');
      newTable();
      console.log(data);
    }
  });

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};