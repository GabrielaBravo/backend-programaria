const express = require("express") // aqui estou iniciando o express
const router = express.Router()  // aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid')

const app = express() //aqui estou iniciando o app
app.use(express.json())
const porta = 3333 // aqui estou criando a porta

//aqui estou criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Gabriela Bravo',
        imagem: 'https://avatars.githubusercontent.com/u/32687879?v=4',
        minibio:'Dentista, mãe de Pet e Desenvolvedora'
    },
    {
        id: '2',
        nome: 'Fulaninha',
        imagem: 'https://avatars.githubusercontent.com/u/32687879?v=4',
        minibio:'fufufu'
    },
    {
        id: '3',
        nome: 'aninha',
        imagem: 'https://avatars.githubusercontent.com/u/32687879?v=4',
        minibio:'aninha'
    }
]
 
//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
    }
    
    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
    
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }
    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

//PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}


app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configuerei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configuerei rota PATCH /mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) //configuerei rota DELETE /mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta