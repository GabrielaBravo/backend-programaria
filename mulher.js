const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333;
 
function mostraMulher(request, response){
    response.json({
        nome: 'Gabriela Bravo',
        imagem: 'https://avatars.githubusercontent.com/u/32687879?v=4',
        minibio:'Dentista, mãe de Pet e Desenvolvedora'

    })
}
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)