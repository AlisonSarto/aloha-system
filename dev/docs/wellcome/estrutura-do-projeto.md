# Estrutura do projeto

<hr>

## Sobre cada pasta da raiz do projeto

### `app`

Dentro dessa pasta temos 2 coisas muito importantes:

- `app/pages/`: Aqui ficam as páginas do projeto, cada página tem sua própria pasta, e dentro dela temos os arquivos HTML, CSS e JavaScript específicos daquela página.

- `app/index.html`: Esse é o arquivo que roda o front-end do projeto, nele temos um `iframe` que é responsável por carregar as páginas do projeto, de acordo com a navegabilidade do usuário pela slidebar, tudo isso sem precisar recarregar a página.

Resaltando que as pastas dentro de `app/pages/` tem o mesmo nome das páginas do projeto, por exemplo, a página `usuarios` tem sua pasta `app/pages/usuarios/`, e dentro dela temos o arquivo `index.php` que é a página em si, os arquivos CSS e JavaScript específicos daquela página, e a pasta `app/pages/usuarios/assets/` que contém os arquivos estáticos daquela página.

**Destaque especial para as rotas do arquivo `app/index.html`:** Como a página roda um `iframe` que carrega as páginas do projeto, é necessário definir as rotas para cada página, que é feita da seguinte forma:

- `app/?usuarios` -> Carrega a página `app/pages/usuarios/`.

Caso a rota não seja definida, o sistema irá redirecionar o usuário para a página `home`.

### `api`

A pasta `api` contém os arquivos da API REST do projeto, que é responsável por fazer a comunicação entre o servidor e o front-end usando o JSON como formato de dados.

Vale resaltar que a estrutura das pastas é semelhante da pasta `app`, ou seja, temos a pasta `api/` que as funções de cada página, por exemplo: `api/usuarios/` que contém arquivos como `view.php`, `add.php`, `delete.php`, `edit.php`.

### `assets`

A pasta `assets` contém os arquivos estáticos do projeto, como por exemplo as imagens, os arquivos CSS e os arquivos JavaScript. (vale lembrar que os arquivos CSS e JavaScript específicos de cada página ficam dentro da pasta `pages`, aqui temos apenas os universais).


### `err`

A pasta `err` contém os arquivos de erro do projeto, como por exemplo o `404.html` que é a página de erro 'Página não encontrada'.

### `libs`

A pasta `libs` contém as bibliotecas que são utilizadas no projeto, como por exemplo o `Bootstrap` e o `jQuery`.

### `server`

A pasta `server` contém o código do servidor, que é responsável por fazer a comunicação entre o banco de dados e a API REST, funções de autenticação, cron-jobs, etc.

### `dev`

A pasta `dev` contém os arquivos de desenvolvimento do projeto, como por exemplo a documentação, os arquivos de configuração do servidor, e essa página que você está vendo, resaltando que essa pasta não é enviada para o servidor, ela é apenas para desenvolvimento.

## Arquivos importantes na raiz do projeto

### `.htaccess`

O arquivo `.htaccess` tem apenas uma função, mas que é de extrema importância, ele é responsável por não permitir a visualização dos arquivos `.env` pelo cliente, deixando assim o projeto mais seguro.

### `index.php`

O arquivo `index.php` redireciona o cliente para a página inicial do projeto, que é a página `login` se ele não estiver logado, ou a página `home` se ele estiver logado.

### `sair.php`

O arquivo `sair.php` é responsável por fazer o logout do usuário, ou seja, ele destrói a sessão do usuário e redireciona ele para a página `login`.

### `login.php`

O arquivo `login.php` é responsável por fazer o login do usuário, ou seja, ele cria uma sessão para o usuário e redireciona ele para a página `home`.
Lembrando que ele não faz a autenticação do usuário, essa função é feita pelo servidor, atravez da API REST `api/login/`.