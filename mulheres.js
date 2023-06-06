const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333;

const mulheres = [
    {
        nome: 'Gabriela Bravo',
        imagem: 'https://avatars.githubusercontent.com/u/32687879?v=4',
        minibio:'Dentista, mãe de Pet e Desenvolvedora'
    },
    {
        nome: 'Fulaninha',
        imagem: 'https://avatars.githubusercontent.com/u/32687879?v=4',
        minibio:'fufufu'
    },
    {
        nome: 'aninha',
        imagem: 'https://avatars.githubusercontent.com/u/32687879?v=4',
        minibio:'aninha'
    }
]
 
function mostraMulheres(request, response) {
    response.json(mulheres)
}
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)