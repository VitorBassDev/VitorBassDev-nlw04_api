import {Request, Response} from "express";
import { getCustomRepository, getRepository } from "typeorm";
import {User} from "../models/User"
import { UserRepository } from "../repositories/UsersRepository";

class UserController{
  async create(request: Request, response: Response){
    const {name, email} = request.body
    
    /**
     * Responsbailidade do Controller
    const usersRepository = getRepository(User);
     * 
    */
    
    /**
     * Responsabilidade do Repositório
     */
    const usersRepository = getCustomRepository(UserRepository)

    // NÃO SALVAR USUÁRIO COM O MESMO ENDEREÇO DE EMAIL
    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if(userAlreadyExists){
      return response.status(400).json({
        error: "User Already Exists !"
      })
    }

    const user = usersRepository.create({
      name, email
    })

    await usersRepository.save(user)

    return response.status(201).json(user)
  }
}

export {UserController}

