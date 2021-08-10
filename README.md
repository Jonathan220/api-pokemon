<h1 align="center"> API teste de pokemon  </h1>

## Descrição do projeto

<p align=justify>API de teste construida para praticar o uso de express com mongodb e mongoose</p>

![Badge](https://img.shields.io/node/v/dotenv?style=for-the-badge) ![Badge](https://img.shields.io/static/v1?label=javasxript&message=express&color=green&style=for-the-badge&logo=JAVASCRIPT) ![Badge](https://img.shields.io/static/v1?label=mongodb&message=mongoose&color=orange&style=for-the-badge&logo=MONGODB)

### Principais funcionalidades

- CRUD de pokemon em um banco de dados
  - Cadastro do nome, número e tipo do pokemon em no mongodb
  - Listar todos os pokemon da tabela
  - atualizar um pokemon através do seu nome
  - remover um pokemon através do seu nome
  - atualizar um pokemon através da busca do nome do pokemon

> Status do Projeto: Concluído :heavy_check_mark:

### Como rodar a aplicação

No terminal do seu computador clone o projeto:

```
git clone git@github.com:Jonathan220/api-pokemon.git
```

Entre na pasta do projeto

```
cd api-pokemon
```

Instale as dependencias

```
npm install express mongoose
```

Instale o dotenv para criar as variáveis de ambiente

```
npm install --save-dev dotenv
```

Crie o arquivo .env para colocar as variáveis de ambiente

```
touch .env
```

Dentro do arquivo .env coloque a variável de ambiente e o valor de acordo com o seu banco de dados

```
DATABASE_URL=endereço do banco de dados
```

Execute a api

```
npm start
```

Para testar as rotas faça uso do programa insomnia ou postman

- [Insomnia](https://insomnia.rest)
- [Postman](https://www.postman.com)

### Linguagens, dependencias e libs utilizadas

- [javascript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [express](http://expressjs.com/pt-br/)
- [mongodb](https://www.mongodb.com)
- [mongoose](https://mongoosejs.com)

### Modelo do banco de dados

#### Pokemon

##### Tabela

| número | nome      | tipo            |
| ------ | --------- | --------------- |
| 1      | Bulbasaur | Planta/Venenoso |

##### JSON

```
    numero: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
        default: "normal"
    }
```
