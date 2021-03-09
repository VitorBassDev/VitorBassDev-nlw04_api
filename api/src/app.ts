

import 'reflect-metadata'
import express from 'express'
import { router } from './routes'

// IMPORTAR BANCO DE DADOS
import createConnection from "./database"

createConnection()
const app = express()

// RECEBER DADOS EM JSON
app.use(express.json())

// IMPORTAR AS ROTAS
app.use(router)

export {app};