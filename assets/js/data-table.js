function dataTable(tableContent, search = true, tableId = '#data-table') {

  var table = $(`${tableId}`);
  var id = tableId.replace('#', '');

  //? Tabela já foi criada
  if (table.hasClass('datatable-table')) {
    table.html(tableContent);
    return;
  }

  if (search === false) {
    table.replaceWith(`
      <div class="data-table">

        <div class="table-responsive">
          <table class="datatable-table" id="${id}">
            ${tableContent}
          </table>
        </div>

      </div>
    `);
  }else {
    table.replaceWith(`
      <div class="data-table">

        <div class="row mb-3">
          <div class="col-md-3 ms-auto">
            <input type="text" class="form-control" id="table-search" placeholder="Pesquisar...">
          </div>
        </div>

        <div class="table-responsive">
          <table class="datatable-table" id="${id}">
            ${tableContent}
          </table>
        </div>

      </div>
    `);
    
    $('#table-search').on('keyup', function() {

      var value = $(this).val().toLowerCase();
  
      if (value.indexOf(', ') > -1) {
        value = value.split(', ');
      }else if (value.indexOf(',') > -1) {
        value = value.split(',');
      }
  
      //? Filtra
      $('.data-table table tbody tr').filter(function() {
          
        if (Array.isArray(value)) {
          $(this).toggle($(this).text().toLowerCase().indexOf(value[0]) > -1 && $(this).text().toLowerCase().indexOf(value[1]) > -1);
        } else {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        }
  
      });
  
    });
  }

};