import request from 'supertest';
import { app } from '../app';
import createConnection from '../database'
/**
 * TESTE DA CRIAÇÃO DE USUÁRIO
 */

describe("Users", async() =>{
  /**
   * BeroreAll
   * - Cria a conexão co o banco de dados 
   * - Executa a Migration
   */
  beforeAll(async() =>{
    const connection = await createConnection()
    await connection.runMigrations()
  })

  it("Should be able to create a new user",async ()=>{
    const response = await request(app).post("/users").send({
      email: "user@exemple.com",
      name: "User Example"
    })
    expect(response.status).toBe(201);
  })
})