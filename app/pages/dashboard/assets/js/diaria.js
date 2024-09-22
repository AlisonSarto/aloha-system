$(document).ready(function () {

  var ctx = document.getElementById("fabri");
  var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: []
    }
  });

  // Atualiza o gráfico
  updateChart();

  // Evento para atualizar o gráfico
  $("#week").change(function () {
    updateChart();
  });

  $("#voltar").click(function () {
    var week = $("#week").val().replace("-W", "-");
    var week_n = parseInt(week.split("-")[1]);
    var year = parseInt(week.split("-")[0]);

    if (week_n > 1) {
      week_n--;
    } else {
      week_n = 52;
      year--;
    }

    if (week_n < 10) {
      week_n = "0" + week_n;
    }

    var weekYear = year + "-W" + week_n;
    $("#week").val(weekYear);
    updateChart();
  });

  // Evento para avançar uma semana
  $("#proximo").click(function () {
    var week = $("#week").val().replace("-W", "-");
    var week_n = parseInt(week.split("-")[1]);
    var year = parseInt(week.split("-")[0]);

    if (week_n < 52) {
      week_n++;
    } else {
      week_n = 1;
      year++;
    }

    if (week_n < 10) {
      week_n = "0" + week_n;
    }

    var weekYear = year + "-W" + week_n;
    $("#week").val(weekYear);
    updateChart();
  });

  function updateChart() {

    var week = $("#week").val().replace("-W", "-");

    const colors = [
      '54, 162, 235',
      '255, 99, 132',
      '153, 102, 255',
      '255, 159, 64'
    ];

    $.ajax({
      url: "/api/charts/fabri",
      method: "GET",
      async: false,
      data: {
        week: week
      },
      success: function (res) {
        turnos = res.turnos;
        data = res.chart;
      },
      error: function (error) {
        turnos = [];
        data = [];
      }
    });

    var dataset = [];

    var cor_index = 0;
    for (var i = 0; i < turnos.length; i++) {
      dataset.push({
        label: turnos[i],
        lineTension: 0.3,
        borderWidth: 2,
        borderColor: 'rgba(' + colors[cor_index] + ', 1)',
        backgroundColor: 'rgba(' + colors[cor_index] + ', 0.4)',
        data: data,
        parsing: {
          yAxisKey: turnos[i]
        },
      });

      if (cor_index < colors.length - 1) {
        cor_index++;
      } else {
        cor_index = 0;
      }
    }

    barChart.data.datasets = dataset;
    barChart.update();
  }

});
