const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o Banco de Dados iniciou')

        await mongoose.connect(process.env.MONGO_URL) //string de conexão com MongoDb

        console.log('Conexão com o Banco de Dados feito com Sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados