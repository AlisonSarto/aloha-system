function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de funcionarios, não executa o script
  if ((content === undefined || content != 'funcionarios') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Trabalhando</th>
        <th>Nome</th>
        <th>Setor</th>
        <th>Turno</th>
        <th>Pontos</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/funcionarios/view',
    type: 'GET',
    success: function(data) {

      var funcionarios = data.funcionarios;
      var total_funcionarios = 0;

      //? Passa por cada item do array e adiciona na tabela
      funcionarios.forEach(db => {
        if (db.ativo == 'true') {
          db.ativo = [
            'table-success',
            'checked'
          ];
          total_funcionarios++;
        }else {
          db.ativo = [
            'table-secondary',
            ''
          ];
        }
        if (db.setor == null) {
          db.setor = 'Não definido';
        }
        tableContent += `
          <tr class="${db.ativo[0]}">
            <td>
              <div class="form-check form-switch ativo" data-id="${db.id}">
                <input class="form-check-input" type="checkbox" role="switch" ${db.ativo[1]}>
              </div>
            </td>
            <td>${db.nome}</td>
            <td>${db.setor}</td>
            <td>${db.turno}</td>
            <td>${db.pontuacao}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-success mov-funcionario"><i class="fas fa-arrow-right-arrow-left"></i></button>
                <button class="btn btn-sm btn-warning mx-2 edit-funcionario"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-funcionario"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
        `;
      });

      tableContent += `
        <tr>
          <td colspan="5" class="text-right">Total de funcionarios trabalhando:</td>
          <td>${total_funcionarios}</td>
        </tr>
      `;

      dataTable(tableContent);

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="99" class="text-center">Nenhum funcionario encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

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
        <th>Pontuação Mov</th>
        <th>Pontuação Final</th>
        <th>Obs</th>
        <th>Data</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/pontuacoes/mov',
    type: 'GET',
    data: {
      id: id,
      limit: limit
    },
    success: function(data) {
      //? Passa por cada item do array e adiciona na tabela
      var mov = data.mov;

      mov.forEach(db => {
        
        var tipo = db.tipo;

        if (tipo == '+') {
          cor = 'success';
        }else if (tipo == '-'){
          cor = 'danger';
        }

        tableContent += `
          <tr class="table-${cor}">
            <td>${db.pontuacao_mov}</td>
            <td>${db.pontuacao_final}</td>
            <td>${db.obs}</td>
            <td>${db.dia}</td>
          </tr>
        `;
      });
      dataTable(tableContent, false, '#data-table-mov');

      //? Verifica se tem mais movs
      $.ajax({
        url: '/api/pontuacoes/mov',
        type: 'GET',
        data: {
          id: id,
          limit: limit + 1
        },
        success: function(data) {
          mov = data.mov;

          if (mov.length > limit) {
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
        <td colspan="99" class="text-center">Nenhuma mov encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false, '#data-table-mov');
  }
  
};