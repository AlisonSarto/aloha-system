$(document).on('click', '.check', function() {

  var btn = $(this);
  $(this).prop('disabled', true);
  var id = $(this).parent().data('id');

  $.ajax({
    url: '/api/controle_tarefas/checked',
    type: 'POST',
    data: {
      id: id
    },
    success: function() {
      newTable();
    },
    error: function(err) {
      console.log(err);
      btn.prop('disabled', false);
      btn.prop('checked', false);
    }
  });

});