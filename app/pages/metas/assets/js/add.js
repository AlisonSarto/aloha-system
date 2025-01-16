$(document).on('click', '#add-meta', function() {

  const modal = $('#modal');
  modal.find('.modal-title').text('Adicionar meta');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="col-12">
      <label class="form-label">Quantidade de funcionarios trabalhando</label>
      <input type="number" class="form-control" id="funcionarios">
    </div>

    <div class="col-12">
      <label class="form-label">Meta por hora</label>
      <input type="number" class="form-control" id="meta">
    </div>
    
    <div class="col-12">
      <label class="form-label">Cenário</label>
      <input type="file" class="form-control" id="cenario">
    </div>

    <div class="col-12">
      <img src="" id="preview" class="img-fluid mt-2" style="display:none;">
    </div>

    <div class="col-12" id="maquinasHtml">
      <br>
    </div>

  `);

  var maquinas = [];
  $.ajax({
    url: '/api/maquinas/view',
    type: 'GET',
    success: function(data) {
      maquinas = data.maquinas;

      let maquinasHtml = `
        <table class="table table-bordered" id="maquinas">
          <tr>
            <th>Ativo</th>
            <th>Máquina</th>
            <th>Velocidade</th>
          </tr>
      `;

      maquinas.forEach(function(maquina) {
        maquinasHtml += `
          <tr data-id="${maquina.id}">
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="maquina-${maquina.id}">
              </div>
            </td>
            <td>${maquina.nome}</td>
            <td>
              <input class="form-control form-control-sm" type="number" value="0" id="velocidade-${maquina.id}">
            </td>
          </tr>
        `;
      });

      maquinasHtml += '</table>';

      $('#maquinasHtml').append(maquinasHtml);
      modal.modal('show');
    },
  });

  //? Preview da imagem
  $('#cenario').change(function() {
    var file = $(this)[0].files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#preview').attr('src', e.target.result);
      $('#preview').css('display', 'block');
    }
    reader.readAsDataURL(file);
  });

  //* Salvar
  $('#salvar').click(function() {

    var funcionarios = $('#funcionarios').val();
    var meta = $('#meta').val();
    var maquinasAtivas = [];
    var cenario = $('#preview').attr('src');

    if (cenario == null || cenario == undefined) {
      toast('Selecione uma imagem', 'danger');
      return;
    }

    cenario = cenario.split(',')[1];
    
    maquinas.forEach(function(maquina) {
      var id = maquina.id;
      var ativo = $('#maquina-'+id).prop('checked');
      var velocidade = $('#velocidade-'+id).val();
      if (ativo) {
        maquinasAtivas.push({
          id: id,
          velocidade: velocidade
        });
      }
    });

    if (funcionarios == '' || meta == '') {
      toast('Preencha todos os campos!', 'danger');
      return;
    }

    if (maquinasAtivas.length == 0) {
      toast('Selecione pelo menos uma máquina!', 'danger');
      return;
    }

    dados = {
      funcionarios: funcionarios,
      meta: meta,
      maquinas: maquinasAtivas,
      cenario: cenario
    };

    btn = $(this);
    btn.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
    btn.attr('disabled', true);

    $.ajax({
      url: '/api/metas/add',
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
        console.log(data);
      },
      error: function(error) {
        console.log(error);
        message = error.responseJSON.message;
        $('#salvar').html('Salvar');
        $('#salvar').attr('disabled', false);
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
};