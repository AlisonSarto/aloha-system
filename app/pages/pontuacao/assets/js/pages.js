$(document).ready(function() {

  showPage(0, -1);

  $('#proximo').click(function() {

    var page = 0;
    var page_atual = $('.page:visible').index() - 3;
    
    if ($('input[name="tipo"]:checked').val() == undefined) {
      toast('Selecione um tipo de pontuação','danger');
      return;
    }

    page++;
    if (checkPage()) {
      return;
    }

    //* Verifica se alguma situação foi selecionada
    var check = false;
    $('.situacoes').each(function() {
      if ($(this).val() != 0) {
        check = true;
        return;
      }
    });

    if (!check && ($('#input-situacao').val() == '' || $('#input-pontuacao').val() == '')) {
      toast('Selecione uma situação','danger');
      return;
    }

    if ($('textarea#obs').val() == '') {
      toast('Preencha a observação','danger');
      return;
    }

    page++;
    if (checkPage()) {
      return;
    }

    if ($('#funcionarios').val() == null) {
      toast('Selecione um funcionário','danger');
      return;
    }

    page++;
    if (checkPage()) {
      return;
    }

    page++;
    if (checkPage()) {
      return;
    }


    function checkPage() {
      if (page > page_atual) {
        showPage(page);
        return true;
      }else {
        return false;
      }
    }
  });
  
  $('#voltar').click(function() {
    var page = $('.page:visible').index();
    page = page - 3;
    page--;

    showPage(page);
  });

  function getSituacoes(tipo) {

    const accordion = $('#accordion');
    accordion.html('');

    $.ajax({
      url: '/api/situacoes/view',
      type: 'GET',
      success: function(response) {

        var grupos = response.situacoes[tipo];

        if (grupos == undefined) {
          toast('Nenhuma situação encontrada','danger');
          return;
        }

        $.each(grupos, function(grupo_nome, situacoes) {

          accordion.append(`
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${grupo_nome}">
                  ${grupo_nome}
                </button>
              </h2>
              <div id="${grupo_nome}" class="accordion-collapse collapse">
                <div class="accordion-body">
                  
                  <select class="form-select form-select-lg situacoes">
                    <option selected value="0">Selecione...</option>
                    ${situacoes.map(situacao => `<option value="${situacao.nome}(-)${situacao.pontuacao}">${situacao.nome}</option>`).join('')}
                  </select>    

                </div>
              </div>
            </div>
          `);

        });

        accordion.append(`
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#custom">
                Personalizada
              </button>
            </h2>
            <div id="custom" class="accordion-collapse collapse">
              <div class="accordion-body row">

                <div class="col-12">
                  <label class="form-label">Situação</label>
                  <input type="text" class="form-control" id="input-situacao">
                </div>
  
                <div class="col-12">
                  <label class="form-label">Pontuação</label>
                  <input type="number" class="form-control" id="input-pontuacao">
                </div>

              </div>
            </div>
          </div>
        `);

        //? Não deixa mais de uma select selecionado
        $('.situacoes').change(function() {
          var nome = $(this).find('option:selected').text();
          $('textarea').val(nome);

          $('.situacoes').not(this).val(0);
          $('#input-situacao').val('');
          $('#input-pontuacao').val('');
        });

        $('#input-situacao').keyup(function() {
          var nome = $(this).val();
          $('textarea').val(nome);
        });
        
      },
      error: function(response) {
        console.log(response);
      }
    });

    //? Não deixa mais de um accordion aberto
    $('#accordion').on('show.bs.collapse', function () {
      $('#accordion .collapse.show').collapse('hide');
    });
  }

  function getFuncionarios() {
    $.ajax({
      url: '/api/funcionarios/view',
      type: 'GET',
      success: function(response) {
          
        var funcionarios = response.funcionarios;
  
        funcionarios.forEach(funcionario => {
          $('#funcionarios').append(`
            <option value="${funcionario.id}">${funcionario.rosto}</option>
          `);
        });
      },
      error: function(response) {
        console.log(response);
        toast('Nenhum funcionário encontrado','danger');
      }
    });
  }

  function getResumo() {

    var tipo = $('input[name="tipo"]:checked').val();

    var situacao = null;
    var pontuacao = null;
    $('.situacoes').each(function() {
      if ($(this).val() != 0) {
        var value = $(this).val();
        situacao = value.split('(-)')[0];
        pontuacao = value.split('(-)')[1];
        return;
      }
    });

    if (situacao == null) {
      situacao = $('#input-situacao').val();
      pontuacao = $('#input-pontuacao').val();
    }

    pontuacao = tipo + pontuacao;

    var funcionario = $('#funcionarios option:selected').text();
    
    var observacao = $('textarea#obs').val();

    $('#situacao-resumo').val(situacao);
    $('#pontuacao-resumo').val(pontuacao);
    $('#funcionario-resumo').val(funcionario);
    $('#obs-resumo').val(observacao);

  }

  function salvar() {
      
    var tipo = $('input[name="tipo"]:checked').val();

    var situacao = null;
    var pontuacao = null;
    $('.situacoes').each(function() {
      if ($(this).val() != 0) {
        var value = $(this).val();
        situacao = value.split('(-)')[0];
        pontuacao = value.split('(-)')[1];
        return;
      }
    });

    if (situacao == null) {
      situacao = $('#input-situacao').val();
      pontuacao = $('#input-pontuacao').val();
    }

    var funcionario = $('#funcionarios').val();
    
    var observacao = $('textarea#obs').val();

    $('body').html('');
    $('body').addClass('text-bg-secondary hv-100 d-flex justify-content-center align-items-center');
    $('body').html(`
    
      <div class="d-flex flex-column align-items-center">
        <i class="fas fa-spinner fa-spin fa-2x"></i>
        <h1>Salvando...</h1>
      </div>

    `);

    if (tipo == '+') {
      //? Bonificação
      $.ajax({
        url: '/api/bonificacao/attach',
        type: 'POST',
        data: {
          advertencia: observacao,
          pontuacao: pontuacao,
          funcionario: funcionario,
        },
        success: function(response) {
          var message = response.message;
          $('body').removeClass('text-bg-secondary');
          $('body').addClass('text-bg-success');
          $('body').html(`
            <div class="d-flex flex-column align-items-center">
              <i class="fas fa-check-circle fa-2x text-bg-success"></i>
              <h1>${message}</h1>
            </div>
          `);
          setTimeout(function() {
            location.reload();
          }, 1500);
        },
        error: function(error) {
          console.log(error);
          var message = error.responseJSON.message;
          $('body').removeClass('text-bg-secondary');
          $('body').addClass('text-bg-danger');
          $('body').html(`
            <div class="d-flex flex-column align-items-center">
              <i class="fas fa-exclamation-circle fa-2x text-bg-danger"></i>
              <h1>${message}</h1>
            </div>
          `);
        }
      });

    }else {
      //? Advertencia
      $.ajax({
        url: '/api/advertencias/attach',
        type: 'POST',
        data: {
          advertencia: observacao,
          pontuacao: pontuacao,
          funcionario: funcionario,
        },
        success: function(response) {
          var message = response.message;
          $('body').removeClass('text-bg-secondary');
          $('body').addClass('text-bg-success');
          $('body').html(`
            <div class="d-flex flex-column align-items-center">
              <i class="fas fa-check-circle fa-2x text-bg-success"></i>
              <h1>${message}</h1>
            </div>
          `);
          setTimeout(function() {
            location.reload();
          }, 1500);
        },
        error: function(error) {
          console.log(error);
          var message = error.responseJSON.message;
          $('body').removeClass('text-bg-secondary');
          $('body').addClass('text-bg-danger');
          $('body').html(`
            <div class="d-flex flex-column align-items-center">
              <i class="fas fa-exclamation-circle fa-2x text-bg-danger"></i>
              <h1>${message}</h1>
            </div>
          `);
        }
      });
    }

  }

  function showPage(page, page_atual = $('.page:visible').index() - 3) {

    $('#proximo').html('Próximo <i class="fas fa-arrow-right"></i>');
    
    if (page == page_atual) {
      return false;
    }

    if (page < 0) {
      return false;
    }

    if (page == 1) {
      getSituacoes($('input[name="tipo"]:checked').val());
    }

    if (page == 2) {
      getFuncionarios();
    }

    if (page == 3) {
      getResumo();
      $('#proximo').html('Salvar');
    }

    if (page == 4) {
      salvar(); 
    }

    $('.page').hide();
    $('.page').eq(page).show();
  }

});

function toast(text,color) {
  $('.toast-header').removeClass('text-bg-success text-bg-danger text-bg-primary');
  $('.toast-header').addClass('text-bg-'+color);
  $('.toast-body').text(text);
  $('#toast').toast('show');
};