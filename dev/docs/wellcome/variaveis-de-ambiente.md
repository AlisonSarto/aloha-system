# Variaveis de ambiente

<hr>

## Configurar o ambiente (.env.local)

Antes de começar a desenvolver, você precisa configurar o seu ambiente de desenvolvimento no arquivo `.env.local` na raiz do projeto.

### Arquivos .env
Os arquivos `.env` são responsáveis por armazenar as variáveis de ambiente do projeto. Essas variáveis são utilizadas para definir configurações do projeto, como por exemplo, a conexão com o banco de dados ou apis.
Pode ser criado um arquivo `.env` para cada ambiente, como por exemplo, `.env.local`.

- `.env`: Variáveis de ambiente padrão, usada apenas na produção.
- `.env.local`: Variáveis de ambiente local, usada apenas no ambiente de desenvolvimento.

### Variáveis
```Properties
# Arquivo: .env.local

#* Gelo System
ALOHA_ACESS={true|false}

#* Banco de dados
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

#* BioPass ID
BIO_RUN={true|false}
BIO_TOKEN=
```

##### Gelo System
- `ALOHA_ACESS`: Ativa e desativa o sistema de segurança (login).

##### Banco de dados
- `DB_HOST`: Host do banco de dados.
- `DB_USER`: Usuário do banco de dados.
- `DB_PASS`: Senha do banco de dados.
- `DB_NAME`: Nome do banco de dados.

##### BioPass ID
- `BIO_RUN`: Define se deve rodar a API da BioPass (caso definido como false, não é necessário definir o token).
- `BIO_TOKEN`: Token de acesso do BioPass ID.

## Order de prioridade de leiura dos arquivos .env

Vamos supor que você tenha os seguintes arquivos `.env` rodando no seu projeto:

- `.env`: Variáveis de ambiente padrão, usada apenas na produção.
- `.env.local`: Variáveis de ambiente local, usada apenas no ambiente de desenvolvimento.

Dependendo da configuração do arquivo `server/env.php`, o sistema irá dar prioridade para o arquivo que estiver no topo do array `$envs`, ou seja, se o arquivo `.env.local` estiver no topo do array, ele será o primeiro a ser lido, segue o exemplo:

```PHP
// Arquivo: server/env.php

$env = [
  "Produção" => $_SERVER['DOCUMENT_ROOT'].'/.env', // Prioridade 1
  "Localhost" => $_SERVER['DOCUMENT_ROOT'].'/.env.local', // Prioridade 2
];
```

Nesse caso, o arquivo `.env.local` será o primeiro a ser lido, caso ele não exista, o sistema irá ler o arquivo `.env`, e caso tenha os 2 arquivos, o `.env.local` terá prioridade.

<br>

### Debug de conexão com o banco de dados

Para verificar como está a conexão com o banco de dados, basta acessar [essa página](./debug-db).