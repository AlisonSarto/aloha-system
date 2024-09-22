$(document).on('click', '.view-cargo', function() {
  var id = $(this).parent().data('id');
  var btn = $(this);

  btn.html('<i class="fas fa-spinner fa-spin"></i>');

  $.ajax({
    url: '/api/cargos/view',
    type: 'GET',
    data: {
      id: id
    },
    success: function(data) {
      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);

      cargo = data.cargos;
      creatModal(cargo);
    },
    error: function(error) {
      btn.html('<i class="fas fa-magnifying-glass"></i>');
      btn.attr('disabled', false);

      message = error.responseJSON.message;
      console.log(error);
      toast(message, 'danger');
    }
  });

});

//* Funções
function creatModal(cargo) {

  modal = $('#modal');
  modal.find('.modal-title').html('Visualizar Cargo');
  modal.find('.modal-dialog').addClass('modal-lg');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
  `);

  let html = '';
  acess = cargo.acess.acess;

  $.each(acess, function(key, value) {
    var title = key.charAt(0).toUpperCase() + key.slice(1);
    var func = value;

    var list = '';
    $.each(func, function(subKey, subValue) {
      subValue = subValue.charAt(0).toUpperCase() + subValue.slice(1);
      list += `
        <tr>
          <td>${subValue}</td>
          <td>
            <input type="checkbox" class="form-check-input" checked disabled>
          </td>
        </tr>
      `;
    });

    html += `
      <div class="col-md-4">
        <div class="card my-2">
          <div class="card-header fw-bolder">
            ${title}
          </div>
          <div class="card-body p-2">
            <table class="table table-sm table-hover table-bordered">
              ${list}
            </table>
          </div>
        </div>
      </div>
    `;
  });

  modal.find('.modal-body').html(`
  
    <div class="row">
      <div class="col-md-12 mb-3">
        <label class="form-label h5">Nome do Cargo</label>
        <input type="text" class="form-control" value="${cargo.cargo}" disabled>
      </div>
      <div class="col-md-12">
        <h5>Permissões</h5>
      </div>
      ${html}
    </div>
  
  `);

  $('#modal').modal('show');
  $this.html('<i class="fas fa-magnifying-glass"></i>');

}