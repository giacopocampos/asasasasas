import express from 'express'

const app = express()

// req é tudo que veio para a máquina, e resp é tudo que vou mandar para o servidor
app.get('/', (req, resp)=>{

    resp.send('<h1>Olá Bem Vindo!!!!</h1>')

})

app.get('/teste', (req, resp)=>{

    resp.send('<h1>Página de Teste</h1>')

})

app.listen(9000, ()=>{
    console.log('servidor inicializado!!!!')
})
