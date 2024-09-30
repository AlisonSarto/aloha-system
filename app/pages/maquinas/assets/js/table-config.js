function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de maquinas, não executa o script
  if ((content === undefined || content != 'maquinas') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Qtd. min. de funcionarios</th>
        <th>Meta hora</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/maquinas/view',
    type: 'GET',
    success: function(data) {

      maquinas = data.maquinas;
      var meta_total = 0;

      //? Passa por cada item do array e adiciona na tabela
      maquinas.forEach(db => {

        if (db.ativo == 'true') {
          ativo = 'table-success';
          meta_total += parseFloat(db.meta);
        }else {
          ativo = 'table-danger';
        }

        tableContent += `
          <tr class="${ativo}">
            <td>${db.nome}</td>
            <td>${db.qtd_funcionarios}</td>
            <td>${db.meta} pcts/h</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-warning me-2 edit-maquina"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-maquina"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
        `;
      });

      tableContent += `
        <tr>
          <td colspan="2" class="text-right">Meta total:</td>
          <td>${meta_total} pcts/h</td>
          <td></td>
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
        <td colspan="99" class="text-center">Nenhuma máquina encontrada</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();