var myChartEstoque = null; // Variável global para armazenar o gráfico

function newChartEstoque() {

  var ctx = document.getElementById("estoque").getContext('2d');

  var marcas = [];
  var data = [];

  $.ajax({
    url: "/api/charts/estoque",
    type: "GET",
    assync: false,
    success: function (res) {

      marcas = res.marcas;
      data = res.estoque;
      var dataset = [];
      for (var i = 0; i < marcas.length; i++) {
        dataset.push({
          label: marcas[i],
          data: data,
          backgroundColor: data.map(function (item) {
            // Loucura, tranforma hexadecimal em rgba
            var cor = item.cor;
            var rgb = cor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
              , function (m, r, g, b) {
                return r + r + g + g + b + b;
              });
            rgb = rgb.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
            rgb = {
              r: parseInt(rgb[1], 16),
              g: parseInt(rgb[2], 16),
              b: parseInt(rgb[3], 16)
            };
            return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0.4)';
          }),
          borderColor: data.map(function (item) {
            // Loucura, tranforma hexadecimal em rgba
            var cor = item.cor;
            var rgb = cor.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
              , function (m, r, g, b) {
                return r + r + g + g + b + b;
              });
            rgb = rgb.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
            rgb = {
              r: parseInt(rgb[1], 16),
              g: parseInt(rgb[2], 16),
              b: parseInt(rgb[3], 16)
            };
            return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1)';
          }),
          stack: i,
          parsing: {
            yAxisKey: marcas[i]
          },
          borderWidth: 2
        });
      }

      if (myChartEstoque) {
        myChartEstoque.destroy(); // Destruir o gráfico existente se já houver um
      }

      myChartEstoque = new Chart(ctx, {
        type: 'bar',
        data: {
          datasets: dataset,
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: false
            },
          },
        },
      });
    },
  });
}

newChartEstoque();