import 'reflect-metadata'
import express, { json, request, response } from 'express'
import { router } from './routes'

// IMPORTAR BANCO DE DADOS
import "./database"

const app = express()

// RECEBER DADOS EM JSON
app.use(express.json())

// IMPORTAR AS ROTAS
app.use(router)

// START TO SERVER
app.listen(3030, () => {
  console.log(`Server Backend Is running`, 3030)
 });
