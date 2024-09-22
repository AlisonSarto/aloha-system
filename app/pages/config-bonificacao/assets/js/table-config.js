function newTableModo() {

  const tableId = '#data-table-modos';
  var tableContent = '';

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Modo</th>
        <th>Meta</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/modos/view',
    type: 'GET',
    success: function(data) {

      modos = data.modos;

      //? Passa por cada item do array e adiciona na tabela
      modos.forEach(db => {

        if (db.ativo == 'true') {
          style = [
            'table-success',
            'btn-secondary',
            'disabled',
          ];
        }else {
          style = [
            '',
            'btn-success',
            '',
          ];
        }

        tableContent += `
          <tr class="${style[0]}">
            <td>${db.nome}</td>
            <td>${db.meta} pacotes</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}" data-descricao="${db.descricao}">
                <button class="btn btn-sm ${style[1]} me-2 activate-modo" ${style[2]}><i class="fas fa-bolt"></i></button>
                <button class="btn btn-sm btn-primary view-modo"><i class="fas fa-magnifying-glass"></i></button>
                <button class="btn btn-sm btn-warning mx-2 edit-modo"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-modo"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
        `;
      });
      dataTable(tableContent, false, tableId);

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="9" class="text-center">Nenhum modo encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false, tableId);
  }
  
};

function newTableAdvertencia() {

  const tableId = '#data-table-advertencia';
  var tableContent = '';

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Pontuação</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/advertencias/view',
    type: 'GET',
    success: function(data) {

      advertencias = data.advertencias;

      //? Passa por cada item do array e adiciona na tabela
      advertencias.forEach(db => {

        tableContent += `
          <tr>
            <td>${db.nome}</td>
            <td>- ${db.pontuacao}</td>
            <td>
              <div class="d-flex flex-nowrap" data-id="${db.id}" data-name="${db.nome}">
                <button class="btn btn-sm btn-warning me-2 edit-advertencia"><i class="fas fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger delete-advertencia"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
        `;
      });
      dataTable(tableContent, false, tableId);

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="3" class="text-center">Nenhum tipo de advertencia encontrado</td>
      </tr>
    `;
    dataTable(tableContent, false, tableId);
  }
  
};

function newTableBonificacao() {
  
  const tableId = '#data-table-bonificacao';
  var tableContent = '';

  //* Header
  tableContent = `
    <thead>
      <tr>
        <th>Ativo</th>
        <th>Nome</th>
        <th>Ações</th>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/automacoes/meta-producao',
    type: 'GET',
    success: function(data) {

      const db = data.data;

      var checked = db.ativo == 'true' ? 'checked' : '';

      tableContent += `
        <tr>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="switch-meta-producao" role="switch" ${checked}>
            </div>
          </td>
          <td>${db.nome}</td>
          <td>
            <div class="d-flex flex-nowrap"> 
              <button class="btn btn-sm btn-primary info-meta-producao"><i class="fas fa-info-circle"></i></button>
              <button class="btn btn-sm btn-warning edit-meta-producao ms-2"><i class="fas fa-pen-to-square"></i></button>
            </div>
          </td>
        </tr>
      `;

      dataTable(tableContent, false, tableId);

    },
    error: function() {
      returnEmptyTable();
    }
  });

  function returnEmptyTable() {
    tableContent += `
      <tr>
        <td colspan="99" class="text-center">Nenhuma bonificação encontrada</td>
      </tr>
    `;
    dataTable(tableContent, false, tableId);
  }

}

newTableModo();
newTableBonificacao();
newTableAdvertencia();