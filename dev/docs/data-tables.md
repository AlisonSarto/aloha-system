# Data-Tables

### Esquema

- **/assets/js/data-table.js:** Arquivo base para a criação de tabelas de dados. Ele é responsável por criar a tabela e adicionar os dados nela, junto com uma barra de pesquisa.
- **/app/[page]/assets/js/table-config.js:** Arquivo de configuração da tabela. Ele é responsável por definir os dados que serão exibidos na tabela e as colunas.

### Como implantar no html
```html
<table id="data-table" data-table="[page]"></table>
```
A prop `data-table` é responsável por definir qual arquivo de configuração será utilizado para a tabela. O arquivo de configuração deve estar na pasta `/app/[page]/assets/js/table-config.js`.

### Como criar um arquivo de configuração (forma básica)
```js
//* /app/[page]/assets/js/table-config.js.
function newTable() {

  var content = $('#data-table').data('table');
  var tableHasClass = $('#data-table').hasClass('datatable-table');

  //? Se não for a tabela de [page], não executa o script
  if ((content === undefined || content != '[page]') && tableHasClass == false) {
    return;
  }

  //* Header
  tableContent = `
    <thead>
      <tr>
      </tr>
    </thead>
  `;

  $.ajax({
    url: '/api/[page]/view',
    type: 'GET',
    success: function(data) {

      //? Passa por cada item do array e adiciona na tabela
      [page] = data.[page];
      [page].forEach(db => {
        tableContent += `
          <tr>
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
        <td colspan="2" class="text-center">Nenhum [page] encontrado</td>
      </tr>
    `;
    dataTable(tableContent);
  }
  
};

//? Essa função pode ser usada para criar e/ou atualizar a tabela
newTable();
```