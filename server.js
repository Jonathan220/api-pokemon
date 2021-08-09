require('dotenv').config() // necessário para poder fazer uso das variáveis de ambiente

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = 3000;
const pokemonRouter = require('./routes/pokemon')
//Utiliza a url presente na variável de ambiente DATABASE_URL para se conectar ao banco
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true } );

const db = mongoose.connection;

//Reporta se houver algum erro na conexão com o banco de dados
db.on('error', (error) => console.error(error))

//Uma vez conectado ao banco de dados display uma mensagem
db.once('open', () => console.log('connected to Database'))

app.use(express.json()); //necessário para aceitar json

app.use('/pokemon', pokemonRouter);
// ativa o servidor na porta dentro da variável port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})