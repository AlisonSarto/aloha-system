$(document).on('click', '.mov-embalagem', function () {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i>');
  btn.attr('disabled', true);
  id = $(this).parent().data('id');
  sabor = $(this).parent().data('name');

  modal = $('#modal');
  modal.find('.modal-title').text(`Movimentação ${sabor}`);
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
  `);
  modal.find('.modal-body').html(`
    <table id="data-table-mov" data-table="mov"></table>

    <div class="text-center mt-3" id="container-load-more" style="display:none">
      <button class="btn btn-primary" id="load-more">
        Carregar mais
      </button>
    </div>
  `);

  modal.modal('show');

  newTableMov(id, 0, true);

  btn.html('<i class="fas fa-arrow-right-arrow-left"></i>');
  btn.attr('disabled', false);

  $('#load-more').click(function() {
    newTableMov(id, 10);
  });

});

function toast(text, color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-' + color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};