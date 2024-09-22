//* Tabela Geral
function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de pacotes, não executa o script
  if ((content === undefined || content != 'pacotes') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Sabor</th>
        <th>Quantidade</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/pacotes/view',
    type: 'GET',
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      pacotes = data.pacotes;
      pacotes.forEach(db => {

        //? Caso não tenha integração, mostra badge
        badge = 'd-none';
        if (db.integration === null) {
          badge = '';
        }
        
        tableContent += `
          <tr>
            <td>${db.sabor} - ${db.marca}</td>
            <td>${db.qtd}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.sabor} - ${db.marca}" data-integration="${db.integration}">
                <button class="btn btn-sm btn-warning edit-pacote"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-primary mx-2 integration-pacote position-relative">
                  <i class="fa-solid fa-circle-nodes"></i>
                  <span class="${badge} position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                </button>
                <button class="btn btn-sm btn-success mov-pacote"><i class="fas fa-arrow-right-arrow-left"></i></button>
              </div>
            </td>
          </tr>
        `;
      });
      dataTable(tableContent);

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="3" class="text-center">Nenhum pacotes encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();

//* Tabela Mov
var var_avanco = 0;
function newTableMov(id, avanco = 0, reset = false) {

  if (reset === true) {
    var_avanco = 0;
  }

  var_avanco += avanco;

  //? Define as variaveis
  var limit = 10 + var_avanco;

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Qtd Ajuste</th>
        <th>Qtd Final</th>
        <th>Data</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/pacotes/mov',
    type: 'GET',
    data: {
      id: id,
      limit: limit
    },
    success: function(data) {
      //? Passa por cada item do array e adiciona na tabela
      mov = data.mov;
      mov.forEach(db => {
        
        tipo = db.tipo;

        if (tipo == 'Ajuste (+)' || tipo == 'Entrada') {
          cor = 'success';
        }else {
          cor = 'danger';
        }
        
        var diaHora = db.dia.split(' ');
        var dia = diaHora[0].split('-').reverse().join('/');
        var data = dia + ' ' + diaHora[1];

        tableContent += `
          <tr class="table-${cor}">
            <td>${tipo}</td>
            <td>${db.qtd_mov}</td>
            <td>${db.qtd_final}</td>
            <td>${data}</td>
          </tr>
        `;
      });
      dataTable(tableContent, false, '#data-table-mov');

      //? Verifica tem mais movs
      $.ajax({
        url: '/api/pacotes/mov',
        type: 'GET',
        data: {
          id: id,
          limit: limit * 2
        },
        success: function(data) {
          mov = data.mov;

          if (mov.length == limit * 2 || mov.length > limit) {
            $('#container-load-more').show();
            $('#load-more').removeAttr('disabled');
            $('#load-more').html('Carregar mais');
          } else {
            $('#container-load-more').hide();
          }
        }
      });

    },
    error: function() {
      returnEmptyTableMov();
    }
  });

  function returnEmptyTableMov() {
    tableContent += `
      <tr>
        <td colspan="4" class="text-center">Nenhuma mov encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false, '#data-table-mov');
  }
  
};