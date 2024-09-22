function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de cargos, não executa o script
  if ((content === undefined || content != 'cargos') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Cargo</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/cargos/view',
    type: 'GET',
    success: function(data) {
      
      cargos = data.cargos;

      cargos.forEach(cargo => {

        
        //? Se for o cargo de admin, desabilita os botões
        disabled = '';
        if (cargo.cargo == 'Admin') {
          disabled = 'disabled';
        }

        tableContent += `
          <tr>
            <td>${cargo.cargo}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${cargo.id}" data-name="${cargo.cargo}">
                <button class="btn btn-sm btn-primary view-cargo" ${disabled}><i class="fas fa-magnifying-glass"></i></button>
                <button class="btn btn-sm btn-danger ms-2 delete-cargo" ${disabled}><i class="fas fa-trash"></i></button>
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
        <td colspan="2" class="text-center">Nenhum cargo encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }

};

newTable();