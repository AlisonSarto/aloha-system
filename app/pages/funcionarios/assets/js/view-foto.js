$(document).on('click', '.view-foto-funcionario', function () {

  btn = $(this);
  id = $(this).parent().data('id');
  nome = $(this).parent().data('name');

  const modal = $('#modal');
  modal.find('.modal-dialog').addClass('modal-lg');
  modal.find('.modal-title').text(`Foto ${nome}`);
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
  `);
  modal.find('.modal-body').html(`
    <img src="/api/funcionarios/view-foto?id=${id}" class="img-fluid">
  `);

  modal.modal('show');

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};