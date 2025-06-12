// Dashboard de Estoque

// Paleta fixa para cada sabor
const coresPorSabor = {
  'Coco': '#3b82f6',        // azul
  'Morango': '#ef4444',     // vermelho
  'Maracujá': '#f59e0b',    // amarelo
  'Melancia': '#ec4899',    // rosa
  'Maçã Verde': '#10b981',  // verde
  'Pêssego': '#fbbf24',     // laranja claro
  'Laranja': '#fb923c',     // laranja
  'Pitaya': '#8b5cf6',      // roxo
  'Limão': '#22d3ee'        // azul claro
};

let sabores = [];
let dados = {
  estoque: {},
  consumoDiario: {},
  estoqueIdeal: {},
  custoUnitario: {},
  historicoConsumo: {}
};
let historicoEntrada = {};
let hoje = new Date();

// Função para processar o retorno do endpoint
function processarDadosAPI(apiData) {
  dados = apiData;
  sabores = Object.keys(dados.estoque || {});
  historicoEntrada = apiData.historicoEntrada || {};
  console.log(historicoEntrada, apiData.historicoEntrada);
  hoje = new Date();
}

// Função para buscar os dados do endpoint
function carregarDados(callback) {
  $.ajax({
    url: '/dashboards/estoque/data/view',
    method: 'GET',
    success: function(apiData) {
      processarDadosAPI(apiData);
      if (callback) callback();
    },
    error: function(xhr, status, error) {
      alert('Erro ao carregar os dados do estoque: ' + error);
    }
  });
}

function calcularDiasCobertura(estoque, consumoDiario) {
  return consumoDiario > 0 ? estoque / consumoDiario : 999;
}
function calcularFaltaParaIdeal(estoqueAtual, estoqueIdeal) {
  return Math.max(0, estoqueIdeal - estoqueAtual);
}
function calcularReposicaoRecomendada(faltaParaIdeal) {
  return Math.max(0, faltaParaIdeal);
}
function calcularEstoqueEmPacotes(estoqueTotal) {
  return estoqueTotal * 28;
}
function calcularValorEstoque() {
  let valorTotal = 0;
  for (const sabor of sabores) {
    valorTotal += dados.estoque[sabor] * dados.custoUnitario[sabor];
  }
  return valorTotal;
}
function getSituacaoEstoque(diasCobertura) {
  if (diasCobertura < 3) return { status: 'Crítico ❌', class: 'status-critical' };
  if (diasCobertura < 7) return { status: 'Baixo ⚠️', class: 'status-warning' };
  return { status: 'OK ✅', class: 'status-ok' };
}

function atualizarKPIs() {
  const estoqueTotal = Object.values(dados.estoque).reduce((a, b) => a + b, 0);
  $('#estoque-total').text(estoqueTotal.toLocaleString('pt-BR'));
  const maiorEstoqueSabor = sabores.reduce((a, b) => dados.estoque[a] > dados.estoque[b] ? a : b);
  $('#maior-estoque-sabor').text(maiorEstoqueSabor);
  $('#maior-estoque-qtd').text(`${dados.estoque[maiorEstoqueSabor].toLocaleString('pt-BR')} pacotes`);
  const menorEstoqueSabor = sabores.reduce((a, b) => dados.estoque[a] < dados.estoque[b] ? a : b);
  $('#menor-estoque-sabor').text(menorEstoqueSabor);
  $('#menor-estoque-qtd').text(`${dados.estoque[menorEstoqueSabor].toLocaleString('pt-BR')} pacotes`);
  const diasCobertura = sabores.map(sabor => calcularDiasCobertura(dados.estoque[sabor], dados.consumoDiario[sabor]));
  const mediaCobertura = diasCobertura.reduce((a, b) => a + b, 0) / diasCobertura.length;
  $('#dias-cobertura').text(mediaCobertura.toFixed(1));
  const reposicaoTotal = sabores.reduce((total, sabor) => {
    const falta = calcularFaltaParaIdeal(dados.estoque[sabor], dados.estoqueIdeal[sabor]);
    return total + calcularReposicaoRecomendada(falta);
  }, 0);
  $('#reposicao-necessaria').text(reposicaoTotal.toLocaleString('pt-BR'));
  const estoquePacotes = calcularEstoqueEmPacotes(estoqueTotal);
  $('#estoque-pacotes').text(Math.floor(estoquePacotes).toLocaleString('pt-BR'));
  const valorEstoque = calcularValorEstoque();
  $('#valor-estoque').text(`R$ ${valorEstoque.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  const dataAtual = new Date();
  $('#current-date').text(
    dataAtual.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
  );
  $('#last-update').text(dataAtual.toLocaleTimeString('pt-BR'));
}

function atualizarTabelaIndicadores() {
  const $tbody = $('#tabela-indicadores');
  $tbody.empty();
  const saboresOrdenados = [...sabores].sort((a, b) => dados.consumoDiario[b] - dados.consumoDiario[a]);
  sabores.forEach(sabor => {
    const estoque = dados.estoque[sabor];
    const consumoDiario = dados.consumoDiario[sabor];
    const diasCobertura = calcularDiasCobertura(estoque, consumoDiario);
    const estoqueIdeal = dados.estoqueIdeal[sabor];
    const faltaParaIdeal = calcularFaltaParaIdeal(estoque, estoqueIdeal);
    const situacao = getSituacaoEstoque(diasCobertura);
    $tbody.append(`
      <tr class="border-b hover:bg-gray-50">
        <td class="py-3 px-4 font-medium">${sabor}</td>
        <td class="py-3 px-4 text-right">${estoque.toLocaleString('pt-BR')}</td>
        <td class="py-3 px-4 text-right">${consumoDiario.toLocaleString('pt-BR')}</td>
        <td class="py-3 px-4 text-right">${diasCobertura.toFixed(1)}</td>
        <td class="py-3 px-4 text-right">${estoqueIdeal.toLocaleString('pt-BR')}</td>
        <td class="py-3 px-4 text-right">${faltaParaIdeal.toLocaleString('pt-BR')}</td>
        <td class="py-3 px-4 text-center">
          <span class="px-2 py-1 rounded-full text-xs font-medium ${situacao.class}">
            ${situacao.status}
          </span>
        </td>
      </tr>
    `);
  });
}

function atualizarAlertasRecomendacoes() {
  const $alertasContainer = $('#alertas-container');
  $alertasContainer.empty();
  const saboresCriticos = sabores.filter(sabor => {
    const diasCobertura = calcularDiasCobertura(dados.estoque[sabor], dados.consumoDiario[sabor]);
    return diasCobertura < 3;
  });
  if (saboresCriticos.length > 0) {
    $alertasContainer.append(`
      <div class="p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
        <div class="flex items-center">
          <div class="flex-shrink-0 text-red-500">⚠️</div>
          <div class="ml-3">
            <p class="text-sm text-red-700 font-medium">Estoque crítico para os seguintes sabores:</p>
            <ul class="mt-1 text-sm text-red-600 list-disc list-inside">
              ${saboresCriticos.map(sabor => {
                const dias = calcularDiasCobertura(dados.estoque[sabor], dados.consumoDiario[sabor]).toFixed(1);
                return `<li>${sabor} - apenas ${dias} dias de cobertura</li>`;
              }).join('')}
            </ul>
          </div>
        </div>
      </div>
    `);
  }
  const $sugestaoContainer = $('#sugestao-producao');
  $sugestaoContainer.empty();
  sabores.forEach(sabor => {
    const falta = calcularFaltaParaIdeal(dados.estoque[sabor], dados.estoqueIdeal[sabor]);
    if (falta > 0) {
      const diasCobertura = calcularDiasCobertura(dados.estoque[sabor], dados.consumoDiario[sabor]);
      const situacao = getSituacaoEstoque(diasCobertura);
      $sugestaoContainer.append(`
        <div class="p-4 rounded-lg border ${diasCobertura < 3 ? 'border-red-300 bg-red-50' : diasCobertura < 5 ? 'border-yellow-300 bg-yellow-50' : 'border-gray-200'}">
          <div class="font-medium">${sabor}</div>
          <div class="text-2xl font-bold mt-1">${falta.toLocaleString('pt-BR')}</div>
          <div class="text-sm text-gray-500">unidades a produzir</div>
          <div class="mt-2 text-xs ${situacao.class} rounded-full px-2 py-1 inline-block">${situacao.status}</div>
        </div>
      `);
    }
  });
  if ($sugestaoContainer.children().length === 0) {
    $sugestaoContainer.html(`
      <div class="p-4 bg-green-50 text-green-700 rounded-lg">
        Todos os estoques estão em níveis adequados. Não há necessidade de produção hoje.
      </div>
    `);
  }
}

// Função utilitária para formatar datas como DD/MM
function formatarDataDDMM(data) {
  const d = new Date(data);
  const dia = String(d.getDate()).padStart(2, '0');
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  return `${dia}/${mes}`;
}

function criarGraficos() {
  // 1. Gráfico de barras horizontais - Estoque atual por sabor
  const ctxEstoque = document.getElementById('estoque-por-sabor').getContext('2d');
  const estoqueData = sabores.map(sabor => dados.estoque[sabor]);
  const estoqueColors = sabores.map(sabor => coresPorSabor[sabor] || '#999');
  if (window.graficoEstoque) window.graficoEstoque.destroy();
  window.graficoEstoque = new Chart(ctxEstoque, {
    type: 'bar',
    data: {
      labels: sabores,
      datasets: [{
        label: 'Estoque Atual',
        data: estoqueData,
        backgroundColor: estoqueColors,
        borderColor: estoqueColors,
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { beginAtZero: true, grid: { display: true, drawBorder: false } },
        y: { grid: { display: false, drawBorder: false } }
      }
    }
  });

  // 2. Gráfico de linha - Consumo diário por sabor (últimos 7 dias por padrão)
  atualizarGraficoConsumoDiario(7);

  // 3. Gráfico de linha - Projeção de ruptura de estoque
  const ctxProjecao = document.getElementById('projecao-ruptura').getContext('2d');
  const datasets = [];
  sabores.forEach((sabor) => {
    const estoque = dados.estoque[sabor];
    const consumoDiario = dados.consumoDiario[sabor];
    const diasAteRuptura = Math.ceil(calcularDiasCobertura(estoque, consumoDiario));
    const data = [];
    for (let i = 0; i <= diasAteRuptura; i++) {
      data.push({ x: i, y: Math.max(0, estoque - (consumoDiario * i)) });
    }
    const color = coresPorSabor[sabor] || '#999';
    datasets.push({
      label: sabor,
      data: data,
      borderColor: color,
      backgroundColor: color + '33',
      tension: 0.1,
      pointRadius: 0,
      pointHoverRadius: 5
    });
  });
  if (window.graficoProjecao) window.graficoProjecao.destroy();
  window.graficoProjecao = new Chart(ctxProjecao, {
    type: 'line',
    data: { datasets: datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: { display: true, text: 'Dias a partir de hoje' },
          ticks: { stepSize: 1 }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Unidades em estoque' }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: function (context) { return `Dia ${context[0].parsed.x}`; },
            label: function (context) { return `${context.dataset.label}: ${context.parsed.y.toLocaleString('pt-BR')} unidades`; }
          }
        }
      }
    }
  });

  // 4. Gráfico de colunas empilhadas - Entrada e saída por dia
  const ctxEntradaSaida = document.getElementById('entrada-saida').getContext('2d');
  const ultimosDias = [], entradasPorDia = [], saidasPorDia = [];
  for (let i = 14; i >= 0; i--) {
    const data = new Date();
    data.setDate(hoje.getDate() - i);
    const dataStr = data.toISOString().split('T')[0];
    ultimosDias.push(formatarDataDDMM(dataStr));
    let entradaTotal = 0, saidaTotal = 0;
    sabores.forEach(sabor => {
      const entradaDia = (historicoEntrada[sabor] || []).find(e => e.data === dataStr);
      if (entradaDia) entradaTotal += entradaDia.entrada;
      const saidaDia = (dados.historicoConsumo[sabor] || []).find(c => c.data === dataStr);
      if (saidaDia) saidaTotal += saidaDia.consumo;
    });
    entradasPorDia.push(entradaTotal);
    saidasPorDia.push(saidaTotal);
  }
  if (window.graficoEntradaSaida) window.graficoEntradaSaida.destroy();
  window.graficoEntradaSaida = new Chart(ctxEntradaSaida, {
    type: 'bar',
    data: {
      labels: ultimosDias,
      datasets: [
        { label: 'Entrada (Produção)', data: entradasPorDia, backgroundColor: '#3b82f6', stack: 'Stack 0' },
        { label: 'Saída (Consumo)', data: saidasPorDia, backgroundColor: '#ef4444', stack: 'Stack 1' }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: 'Data (DD/MM)' } },
        y: { beginAtZero: true, title: { display: true, text: 'Unidades' } }
      }
    }
  });

  // 5. Gráfico de pizza - Distribuição percentual do estoque
  const ctxDistribuicao = document.getElementById('distribuicao-estoque').getContext('2d');
  const estoqueTotal = Object.values(dados.estoque).reduce((a, b) => a + b, 0);
  const coresSabores = sabores.map(sabor => coresPorSabor[sabor] || '#999');
  if (window.graficoDistribuicao) window.graficoDistribuicao.destroy();
  window.graficoDistribuicao = new Chart(ctxDistribuicao, {
    type: 'pie',
    data: {
      labels: sabores,
      datasets: [{
        data: sabores.map(sabor => dados.estoque[sabor]),
        backgroundColor: coresSabores,
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw;
              const percentage = ((value / estoqueTotal) * 100).toFixed(1);
              return `${context.label}: ${value.toLocaleString('pt-BR')} (${percentage}%)`;
            }
          }
        }
      }
    }
  });

  // 6. Gráfico de sazonalidade (usando dados reais do backend)
  const ctxSazonalidade = document.getElementById('sazonalidade').getContext('2d');
  let meses = [];
  if (
    dados.sazonalidadeConsumoMensal &&
    sabores.length > 0 &&
    Array.isArray(dados.sazonalidadeConsumoMensal[sabores[0]])
  ) {
    // Extrai os meses do primeiro sabor, no formato "YYYY-MM"
    meses = dados.sazonalidadeConsumoMensal[sabores[0]].map(m => {
      const [ano, mes] = m.mes.split('-');
      // Retorna "Jan", "Fev", etc.
      return [
        'Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'
      ][parseInt(mes, 10) - 1];
    });
  }
  const datasetsSazonalidade = sabores.map((sabor) => {
    const dadosMensais = (dados.sazonalidadeConsumoMensal && dados.sazonalidadeConsumoMensal[sabor])
      ? dados.sazonalidadeConsumoMensal[sabor].map(m => m.consumo)
      : [];
    const color = coresPorSabor[sabor] || '#999';
    return {
      label: sabor,
      data: dadosMensais,
      borderColor: color,
      backgroundColor: color + '33',
      tension: 0.3,
      fill: false
    };
  });
  if (window.graficoSazonalidade) window.graficoSazonalidade.destroy();
  window.graficoSazonalidade = new Chart(ctxSazonalidade, {
    type: 'line',
    data: { labels: meses, datasets: datasetsSazonalidade },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Consumo mensal' } }
      }
    }
  });
  
  $('#loading-overlay').fadeOut(300);
}

function atualizarGraficoConsumoDiario(dias) {
  const ctxConsumo = document.getElementById('consumo-diario').getContext('2d');
  if (window.graficoConsumo) window.graficoConsumo.destroy();
  const labels = [];
  for (let i = dias; i >= 0; i--) {
    const data = new Date();
    data.setDate(hoje.getDate() - i);
    labels.push(formatarDataDDMM(data));
  }
  const datasets = sabores.map((sabor) => {
    const data = [];
    for (let i = dias; i >= 0; i--) {
      const data_dia = new Date();
      data_dia.setDate(hoje.getDate() - i);
      const dataStr = data_dia.toISOString().split('T')[0];
      const consumoDia = (dados.historicoConsumo[sabor] || []).find(c => c.data === dataStr);
      data.push(consumoDia ? consumoDia.consumo : 0);
    }
    const color = coresPorSabor[sabor] || '#999';
    return {
      label: sabor,
      data: data,
      borderColor: color,
      backgroundColor: color + '33',
      tension: 0.3,
      fill: false
    };
  });
  window.graficoConsumo = new Chart(ctxConsumo, {
    type: 'line',
    data: { labels: labels, datasets: datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: 'Data (DD/MM)' } },
        y: { beginAtZero: true, title: { display: true, text: 'Unidades consumidas' } }
      }
    }
  });
  $('.periodo-btn').each(function () {
    if (parseInt($(this).data('days')) === dias) {
      $(this).removeClass('bg-blue-100 text-blue-800').addClass('bg-blue-600 text-white');
    } else {
      $(this).removeClass('bg-blue-600 text-white').addClass('bg-blue-100 text-blue-800');
    }
  });
}

function inicializarDashboard() {
  carregarDados(function() {
    atualizarKPIs();
    atualizarTabelaIndicadores();
    atualizarAlertasRecomendacoes();
    criarGraficos();
    $('#refresh-btn').on('click', function () {
      $('#loading-overlay').fadeIn(300);
      carregarDados(function() {
        atualizarKPIs();
        atualizarTabelaIndicadores();
        atualizarAlertasRecomendacoes();
        criarGraficos();
        $('#loading-overlay').fadeOut(300);
      });
    });
    $(document).on('click', '.periodo-btn', function () {
      const dias = parseInt($(this).data('days'));
      atualizarGraficoConsumoDiario(dias);
    });
  });
}

$(document).ready(inicializarDashboard);