import request from 'supertest';
import { app } from '../app';
import createConnection from '../database'
/**
 * TESTE DA CRIAÇÃO DE Surveys
 */

describe("Surveys", async() =>{
  /**
   * BeroreAll
   * - Cria a conexão co o banco de dados 
   * - Executa a Migration
   */
  beforeAll(async() =>{
    const connection = await createConnection()
    await connection.runMigrations()
  })

  it("Should be able to create a new survey",async ()=>{
    const response = await request(app).post("/surveys").send({
      title: "title@exemple.com",
      description: "Description Example"
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
  })

  /*
  it("Should be able to get all survey",async ()=>{
    
    await request(app).post("/surveys").send({
      title: "title@exemple2.com",
      description: "Description Example2",
    })

    const response = await request(app).get("/surveys")
    expect(response.body.length).toBe(2)
  })
  */
})