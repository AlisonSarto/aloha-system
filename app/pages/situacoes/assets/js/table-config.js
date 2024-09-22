function newTableMais() {

  var tableContent = '';

  $.ajax({
    url: '/api/situacoes/view',
    type: 'GET',
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      tipos = data.situacoes;

      if (tipos['+'] == undefined) {
        returnEmptyTable();
        return;
      }
      
      $.each(tipos['+'], function(grupo_nome, situacoes) {
        tableContent += `
          <tr>
            <td colspan="99"><b>${grupo_nome}</b></td>
          </td>
        `;

        $.each(situacoes, function(i, situacao) {
          tableContent += `
            <tr>
              <td>${situacao.nome}</td>
              <td>
                <div class="d-flex flex-nowrap" data-id="${situacao.id}" data-name="${situacao.nome}">
                  <button class="btn btn-sm btn-primary view-situacao me-2"><i class="fas fa-magnifying-glass"></i></button>
                  <button class="btn btn-sm btn-danger delete-situacao"><i class="fas fa-trash"></i></button>
                </div>
              </td>
            </tr>
          `;
        });
      });

      dataTable(tableContent, false, '#data-table-mais');

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="2" class="text-center">Nenhuma situação positiva encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false, '#data-table-mais');
  }
  
};

function newTableMenos() {
  
    var tableContent = '';
  
    $.ajax({
      url: '/api/situacoes/view',
      type: 'GET',
      success: function(data) {
  
        //? Passa por cada item do array e adiciona na tabela
        tipos = data.situacoes;
  
        if (tipos['-'] == undefined) {
          returnEmptyTable();
          return;
        }
        
        $.each(tipos['-'], function(grupo_nome, situacoes) {
          tableContent += `
            <tr>
              <td colspan="99"><b>${grupo_nome}</b></td>
            </td>
          `;
  
          $.each(situacoes, function(i, situacao) {
            tableContent += `
              <tr>
                <td>${situacao.nome}</td>
                <td>
                  <div class="d-flex flex-nowrap" data-id="${situacao.id}" data-name="${situacao.nome}">
                    <button class="btn btn-sm btn-primary view-situacao me-2"><i class="fas fa-magnifying-glass"></i></button>
                    <button class="btn btn-sm btn-danger delete-situacao"><i class="fas fa-trash"></i></button>
                  </div>
                </td>
              </tr>
            `;
          });
        });
  
        dataTable(tableContent, false, '#data-table-menos');
  
      },
      error: function() {
        returnEmptyTable();
      }
    });
  
    function returnEmptyTable() {
      tableContent += `
        <tr>
          <td colspan="2" class="text-center">Nenhuma situação negativa encontrado</td>
        </tr>
      `;
      dataTable(tableContent, false, '#data-table-menos');
    }
    
  }

function newTable() {
  newTableMais();
  newTableMenos();
}

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();