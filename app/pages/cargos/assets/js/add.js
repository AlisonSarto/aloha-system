$(document).on('click', '#add-cargo', function() {

  var btn = $(this);
  var modal = $('#modal');
  var modalTitle = modal.find('.modal-title');
  var modalFooter = modal.find('.modal-footer');
  var modalBody = modal.find('.modal-body');

  //? Standby no botão de adicionar
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);
  
  //? Informações do modal
  modal.find('.modal-dialog').addClass('modal-lg');
  modalTitle.text('Adicionar Cargo');
  modalFooter.html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);

  //? Requisição para carregar os cargos
  $.getJSON('/assets/json/cargos.json')
  .done(function(data) {
    var pages = data.cargos;
    var list = createListAdd(pages);

    modalBody.html(`
      <div class="row">
        <div class="col-md-12 mb-3">
          <label class="form-label h5">Nome do Cargo</label>
          <input type="text" class="form-control" id="nome-cargo" placeholder="Nome do Cargo">
        </div>
        <div class="col-md-12">
          <h5>Permissões</h5>
        </div>
        <div class="col-md-12 d-flex flex-row-reverse">
          <button class="btn btn-danger mx-2" id="unchecked-all">
            <i class="fas fa-list-ul"></i>
          </button>
          <button class="btn btn-success" id="checked-all">
            <i class="fas fa-list-check"></i>
          </button>
        </div>
        ${list}
      </div>

      <hr>
      
      <div class="alert alert-warning mt-3" role="alert">
        <i class="fas fa-exclamation-triangle"></i>
        Se o usuário não tiver a permissão de <b>Visualizar</b> ou <b>Gerenciar</b>,
        ele não terá acesso a página.
      </div>
    `);

    modal.modal('show');
    btn.html('<i class="fas fa-plus"></i> Adicionar');
    btn.attr('disabled', false);

    eventListAdd(pages);
  })
  .fail(function(error) {
    console.log(error);
    toast('Erro ao carregar as páginas', 'danger');
    btn.html('<i class="fas fa-plus"></i> Adicionar');
    btn.attr('disabled', false);
  });

  modal.on('hidden.bs.modal', function () {
    modal.find('.modal-dialog').removeClass('modal-lg');
  });

});

//? Cria a lista de permissões
function createListAdd(pages) {
  let html = '';

  $.each(pages, function(key, value) {
    var title = value.title;
    var func = value.func;
    var pageKey = key;

    let list = `
      <tr>
        <th>Todos</th>
        <th class="text-center"><input type="checkbox" id="${pageKey}" class="form-check-input"></th>
      </tr>
    `;

    $.each(func, function(key, value) {
      var minValue = value.toLowerCase();
      var id = `${pageKey}-${minValue}`;
      list += `
        <tr>
          <td>${value}</td>
          <td class="text-center"><input type="checkbox" id="${id}" class="form-check-input ${pageKey}"></td>
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

  return html;
}

//? Eventos como click, salvar, etc...
function eventListAdd(pages) {

  var modal = $('#modal');
  var checkedAllBtn = $('#checked-all');
  var uncheckedAllBtn = $('#unchecked-all');

  //* Fechar modal
  modal.on('hidden.bs.modal', function () {
    modal.find('.modal-dialog').removeClass('modal-lg');
  });

  //* Salvar
  $('#salvar').click(function() {
    var cargo = $('#nome-cargo').val();

    if (cargo === '') {
      toast('Preencha o nome do cargo', 'danger');
      return false;
    }

    var permissoes = {};
    $.each(pages, function(key, value) {
      var pageKey = key;

      if ($(`#${pageKey}`).prop('checked') || $(`#${pageKey}`).prop('indeterminate')) {
        permissoes[pageKey] = [];

        $.each(value.func, function(subKey, subValue) {
          var minValue = subValue.toLowerCase();
          var id = `${pageKey}-${minValue}`;

          if ($(`#${id}`).prop('checked')) {
            permissoes[pageKey].push(`${minValue}`);
          }
        });
      }
    });

    if (Object.keys(permissoes).length === 0) {
      toast('Selecione as permissões', 'danger');
      return false;
    }

    dados = {
      cargo: cargo,
      acess: {
        nome: cargo,
        acess: permissoes
      }
    };

    $.ajax({
      url: '/api/cargos/add',
      type: 'POST',
      data: dados,
      beforeSend: function() {
        $('#salvar').html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
        $('#salvar').attr('disabled', true);
      },
      success: function(data) {
        message = data.message;
        modal.modal('hide');
        toast(message, 'success');
        newTable();
      },
      error: function(error) {
        message = error.responseJSON.message;
        console.log(error);
        toast(message, 'danger');
        $('#salvar').html('Salvar');
        $('#salvar').attr('disabled', false);
      }
    });

  });

  //* Checkboxes
  $.each(pages, function(key, value) {
    var pageKey = key;
    var pageCheckbox = $(`#${pageKey}`);
    var func = value.func;

    pageCheckbox.change(function() {
      var id = $(this).attr('id');

      if (this.checked) {
        $(`.${id}`).prop('checked', true);
      } else {
        $(`.${id}`).prop('checked', false);
      }
    });

    $.each(func, function(key, value) {
      var minValue = value.toLowerCase();
      var funcCheckbox = $(`#${pageKey}-${minValue}`);

      funcCheckbox.change(function() {
        var id = $(this).attr('id');
        var classes = id.split('-')[0];

        if (this.checked) {
          if ($(`.${classes}:checked`).length === $(`.${classes}`).length) {
            $(`#${classes}`).prop('checked', true);
            $(`#${classes}`).prop('indeterminate', false);
          } else {
            $(`#${classes}`).prop('indeterminate', true);
            $(`#${classes}`).prop('checked', false);
          }
        } else {
          if ($(`.${classes}:checked`).length === 0) {
            $(`#${classes}`).prop('checked', false);
            $(`#${classes}`).prop('indeterminate', false);
          } else {
            $(`#${classes}`).prop('indeterminate', true);
            $(`#${classes}`).prop('checked', false);
          }
        }
      });
    });
  });

  checkedAllBtn.click(function() {
    modal.find('.form-check-input').prop('checked', true);
    modal.find('.form-check-input').prop('indeterminate', false);
  });

  uncheckedAllBtn.click(function() {
    modal.find('.form-check-input').prop('checked', false);
    modal.find('.form-check-input').prop('indeterminate', false);
  });

}

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
}