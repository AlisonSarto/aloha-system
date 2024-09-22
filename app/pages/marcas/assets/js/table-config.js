function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de marcas, não executa o script
  if ((content === undefined || content != 'marcas') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Logo</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/marcas/view',
    type: 'GET',
    success: function(data) {
      
      //? Passa por cada item do array e adiciona na tabela
      marcas = data.marcas;
      marcas.forEach(db => {
        tableContent += `
          <tr>
            <td>${db.nome}</td>
            <td>
              <img src="${db.logo}" class="img-thumbnail" width="100px">
            </td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-primary view-marca"><i class="fas fa-magnifying-glass"></i></button>
                <button class="btn btn-sm btn-warning mx-2 edit-marca"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-marca"><i class="fas fa-trash"></i></button>
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
        <td colspan="4" class="text-center">Nenhuma marca encontrada</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();