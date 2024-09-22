# Base Ajax

## Ajax
O Ajax é uma técnica de desenvolvimento web que permite a comunicação assíncrona entre o navegador e o servidor. Com o Ajax, é possível enviar e receber dados em segundo plano, **sem precisar recarregar a página**.

### GET
Com o GET, é possível recuperar e/ou enviar dados do servidor.
```js
$.ajax({
  url: '/api/...',
  type: 'GET',
  data: {
    id: 1
  },
  beforeSend: function() {
  },
  success: function(response) {
  },
  error: function(error) {
  }
});
```

### POST
Com o POST, é possível enviar dados para o servidor, de forma mais segura.
```js
$.ajax({
  url: '/api/...',
  type: 'POST',
  data: {
    id: 1
  },
  beforeSend: function() {
  },
  success: function(response) {
  },
  error: function(error) {
  }
});
```

### DELETE
Com o DELETE, é possível deletar dados do servidor.
```js
$.ajax({
  url: `/api/...${id}`,
  type: 'DELETE',
  beforeSend: function() {
  },
  success: function(response) {
  },
  error: function(error) {
  }
});
```