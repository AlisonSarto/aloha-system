# [Aloha System](https://system.alohagelos.com.br/)

## Instalar e rodar o sistema

Rodar o Aloha System em sua máquina local é uma tarefa extremamente simples.

### Dependências globais

Você precisa ter duas principais dependências instaladas:

- Docker
- Docker compose

### Rodar o projeto

Copie `.env.example` para `.env` e preencha as credenciais do banco. O arquivo `.env` é usado pela aplicação, pelo Docker Compose e pelo runner de migrations.

docker compose up --build -d

Depois que o banco estiver saudável, aplique as migrations:

`docker compose exec app php server/db/migrate.php up`

ou mais simples:

`make migrate`

### Permissões

As permissões novas usam o formato `recurso.ação`, por exemplo:

```json
["usuarios.view", "usuarios.create", "produtos.*"]
```

`recurso.*` libera todas as ações daquele recurso. O arquivo `server/funcs/access.php` mantém compatibilidade com cargos antigos e oferece:

```php
access('usuarios', 'view');
requireAccess('usuarios', 'edit');
accessApi('usuarios', 'delete');
```
