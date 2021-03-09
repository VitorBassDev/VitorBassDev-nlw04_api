import { Connection, createConnection, getConnectionOptions } from "typeorm";

//createConnection();

/**
 * CONFIGURAÇÃOS DOS BANCO DE DADOS
 * - BANCO DE DADOS DE TESTE
 * - BANCO DE DADOS DE HOMOLOGAÇÃO
 */
export default async (): Promise<Connection> =>{
  const defaultOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultOptions, {
      /**
       * IF TERNÁRIO
       * - SE A VARIÁVEL DE AMBIENTE FOR A DE TESTE A OPERAÇÃO É FEITA NO BANCO DE DADOS DE TESTE
       */
      database: 
        process.env.NODE_ENV === 'test' 
          ? "./src/database/database.test.sqlite" 
          : defaultOptions.database
    })
  )
}