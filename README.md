# [Aloha System](https://system.alohagelos.com.br/)

## Instalar e rodar o sistema

Rodar o Aloha System em sua máquina local é uma tarefa extremamente simples.

### Dependências globais

Você precisa ter duas principais dependências instaladas:

- Docker
- Docker compose

### Rodar o projeto

Copie `.env.example` para `.env` e preencha as credenciais do banco. O arquivo `.env` é usado pela aplicação, pelo Docker Compose e pelo runner de migrations. Os dados persistentes ficam em `.volumes/db` (MySQL) e `.volumes/uploads` (fotos).

docker compose up --build -d

Depois que o banco estiver saudável, aplique as migrations:

`docker compose exec app php server/db/migrate.php up`

ou mais simples:

`make migrate`

## Deploy no servidor

O workflow `.github/workflows/deploy.yml` publica a branch `main` no servidor por SSH e também pode ser iniciado manualmente pelo GitHub Actions. Ele prepara e compila o commit antes da troca, cria um dump do banco, testa a restauração em um MySQL temporário e guarda uma cópia dos dados locais e fotos antes de atualizar o serviço. As migrations pendentes são executadas durante o deploy.

O deploy usa a pasta `~/Dev/aloha-system/`, o projeto Docker Compose `aloha-system` e mantém os dados em `.volumes/`: banco em `.volumes/db/` e fotos em `.volumes/uploads/`. Na primeira atualização, ele migra o banco existente de `.db/` e as fotos antigas de `uploads/`. O projeto é isolado do `aloha-app` no mesmo servidor.

Configure estes secrets no GitHub Environment `production` (podem ser compartilhados com o repositório `aloha-app`):

- `DEPLOY_HOST`
- `DEPLOY_PORT`
- `DEPLOY_USER`
- `DEPLOY_SSH_PRIVATE_KEY` — chave privada de deploy
- `DEPLOY_SSH_KNOWN_HOSTS` — chave pública do servidor previamente verificada

Os backups do banco, das fotos e do `.env` ficam em `~/Dev/aloha-system-backups/`; cada deploy preserva também o diretório de código anterior em `~/Dev/aloha-system.rollback-*`.
