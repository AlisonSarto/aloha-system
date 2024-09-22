function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de sabores, não executa o script
  if ((content === undefined || content != 'sabores') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Sabor</th>
        <th>Opções</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/sabores/view',
    type: 'GET',
    success: function(data) {
      
      //? Passa por cada item do array e adiciona na tabela
      sabores = data.sabores;
      sabores.forEach(db => {
        tableContent += `
          <tr>
            <td>${db.sabor} ${db.emoji}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.sabor} ${db.emoji}">
                <button class="btn btn-sm btn-primary view-sabor"><i class="fas fa-magnifying-glass"></i></button>
                <button class="btn btn-sm btn-warning mx-2 edit-sabor"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-sabor"><i class="fas fa-trash"></i></button>
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
        <td colspan="2" class="text-center">Nenhum sabor encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();