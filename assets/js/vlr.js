$('.vlr').each(function() {
  const valor = parseFloat($(this).text());
  $(this).text(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
});