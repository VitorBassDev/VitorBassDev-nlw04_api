## Aula 01

Please follow the [Installation](https://doc.nuxeo.com/n/b1j) guide.

Running the Nuxeo Platform requires JDK 11, Oracle's JDK or OpenJDK.

Depending on the features you want to use, you may need some third-party software, such as LibreOffice and pdftohtml for document preview or ImageMagick for pictures. The list of third-party software is available in our Admin documentation: [Installing and Setting Up Related Software](https://doc.nuxeo.com/n/Yki).

## Building

Building the Nuxeo Platform requires the following tools:

- Git (obviously)
- Node
- YARN
- Dependencies


Dependencies:

```shell
Express
yarn add express
```
```shell
yarn add express
```
```shell
yarn add @types/express
```
```shell
types/express
npm install typescript -D
```

```shell
yarn ts-node-dev -D

yarn init -y - Inicar projeto

yarn add express - Micro FremWork para criação de | Rotas | Servidor | FramWorks
```


## Aula 02
- Conexão com o banco de dados
- Query Builders
- Criação de Models
- ORM Config - Configurações do Banco de dados

### src/database/index.js
- Exporta o arquivo de banco de dados
- Configuração de Conexão
- Caminho do banco de dados

```shell
npm install sqlite3 --save
```
```shell
yarn add typeorm reflect-metadata
```

### Criação de migrations
- Script do package.json
 -- "typeorm": "ts-node-dev node_modules/typeorm/cli.js"

### src/database/migrations/
- Configuração para criação no diretório padrão `migrations`
- script para criação das migrations
  -- yarn typeorm migrations:create -n CreateUsers

- Rodar a migratio
```shell
  - yarn typeorm migration:run
```
- Desfazer migration
```shell
  - yarn typeorm migration:revert
```

### src/controller/UserController
- Configuração da controller `UserController`
- Configuração da Tipagem do typeScript

```shell

```

### routers.ts
- Configuração da rotas 
- Dividir os serviços das rotas

### Models / entidades

- Configuração da rotas 
- Dividir os serviços das rotas


## Refatoração do código 
  * [] Criar Repositório de Usuário

### scr/repositories/
  - Repositório de Usuários
  [ 
    {
      UsersRepository.ts
    }
  ]


  * [x] Alteração do Controller para o Repositório Criado

```shell

```

```shell

```

# Aula 03

## Migrations

### Migration - Pesquisas (Survey)

  * [X] Criar Migration de Pesquisas (Survey)
  ```shell
    - yarn typeorm migration:create -n CreateSurveys
  ```
  * [X] Executar Migration de Pesquisas (Survey)
  ```shell
    - yarn typeorm migration:run
  ```
  * [X] Criar a Model de Pesquisas (Survey)
  ```shell
    - `src/models/Survey.ts`
  ```
  * [x] Implementar a models pesquisa de acordo com o a migration criada 

  * [x] Criar Controller de pesquisas (survey)
  ```shell
    - `src/controllers/SurveyController.ts`
  ```
  * [x] Implementar a Controller pesquisa para receber os métodos

  * [x] Criar o Repositório de pesquisas (survey)
  ```shell
    - `src/repositories/SurveyController.ts`
  ```
  * [x] Implementar o Repositório pesquisa (survey)

```shell

```
```shell

```
```shell

```

