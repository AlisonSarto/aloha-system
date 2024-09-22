$(document).ready(function() {

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/js/serviceWorker.js');
  }

  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        verificar();
      }else {
        console.error('Permissão de notificação negada');
      }
    });
  }else {
    verificar();
  }
  
  //? Exibe a notificação
  function notificar(titulo, descricao) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification(titulo, {
          body: descricao,
          icon: '/assets/imgs/favicon.ico',
        });
      });
    }
  }

  //? Verifica se há novas notificações
  function verificar() {
    $.ajax({
      url: '/api/controle_tarefas/view',
      method: 'GET',
      success: function() {

        $.ajax({
          url: '/api/notificacoes/view',
          method: 'GET',
          success: function(response) {
            setTimeout(verificar, 60000);

            if (response.novas_notificacoes == false) {
              return;
            }
      
            const notificacoes = response.notificacoes;
      
            notificacoes.forEach(notificacao => {
              notificar(notificacao.titulo, notificacao.mensagem);
            });
      
          }
        });
  
      },
    });
  }

});