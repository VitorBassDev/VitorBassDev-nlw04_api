import 'reflect-metadata'
import express, { request, response } from 'express'

// IMPORTAR BANCO DE DADOS
import "./database"
const app = express()


// ROTA - (RECURSO)
app.get("/", (request, response)=>{
    return response.json({
      Mensagem: "Rota Principal"
    })
})

app.post("/add", (request, response)=>{
  
  const nome = request.body

  return response.json({
    nome,
    Mensagem: "Dados Enviados com Sucesso",
  })
  
})


// START TO SERVER
app.listen(3030, () => {
  console.log(`Server Backend Is Running`, 3030)
 });
