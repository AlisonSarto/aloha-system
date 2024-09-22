$(document).on('click', '#add-ponto', function() {

  btn = $(this);
  btn.html('<i class="fas fa-spinner fa-spin"></i> Carregando...');
  btn.attr('disabled', true);

  modal = $('#modal');
  modal.find('.modal-title').text('Adicionar Ponto');
  modal.find('.modal-footer').html(`
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
    <button type="button" class="btn btn-primary" id="salvar">Salvar</button>
  `);
  modal.find('.modal-body').html(`

    <div class="row">

      <div class="col-12">
        <div class="form-group">
          <label class="form-label">Rosto</label>
          <select class="form-select" id="add-rosto">
            <option selected disabled>Selecione...</option>
          </select>
        </div>
      </div>
    
      <div class="col-12">
        <div class="form-group">
          <label for="nome">Dia</label>
          <input type="datetime-local" class="form-control" id="dia">
        </div>
      </div>
    
    </div>

  `);

  $.ajax({
    url: '/api/rostos/view',
    type: 'GET',
    success: function(response) {
      rostos = response.rostos;
      rostos.forEach(rosto => {
        $('#add-rosto').append('<option value="'+rosto.id+'">'+rosto.nome+'</option>');
      });
      modal.modal('show');
      btn.attr('disabled', false);
      btn.html('<i class="fas fa-plus"></i> Adicionar Ponto');
    },
    error: function(error) {
      toast(error.responseJSON.message, 'danger');
    }
  });

  $('#salvar').click(function() {
      
      rosto = $('#add-rosto').val();
      dia = $('#dia').val().replace('T', ' ');
      btnSalvar = $(this);

      btnSalvar.html('<i class="fas fa-spinner fa-spin"></i> Salvando...');
      btnSalvar.attr('disabled', true);

      if (rosto == null) {
        toast('Selecione um rosto', 'danger');
        btnSalvar.html('Salvar');
        btnSalvar.attr('disabled', false);
        return;
      }

      if (dia == '') {
        toast('Selecione um dia', 'danger');
        btnSalvar.html('Salvar');
        btnSalvar.attr('disabled', false);
        return;
      }
  
      $.ajax({
        url: '/api/pontos/add',
        type: 'POST',
        data: {
          rosto_id: rosto,
          dia: dia
        },
        success: function(response) {
          toast(response.message, 'success');

          $('#rostos').val($('#add-rosto').val());
          newTable();
          
          modal.modal('hide');
          
          btnSalvar.html('Salvar');
          btnSalvar.attr('disabled', false);
          
        },
        error: function(error) {
          console.log(error);
          toast(error.responseJSON.message, 'danger');
          btnSalvar.html('Salvar');
          btnSalvar.attr('disabled', false);
        }
      });
  
    }

  );
  
});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};