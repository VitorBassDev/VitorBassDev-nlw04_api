import {Request, Response} from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveyUsersRepository";
import { SurveyRepository } from "../repositories/SurveyRepository";
import { UserRepository } from "../repositories/UsersRepository";
import SendMailService from "../services/SendMailService";


class SendMailController{
  async execute (request: Request, response: Response){
    const {email, survey_id} = request.body
    
    const usersRepository       = getCustomRepository(UserRepository)
    const surveysRepository     = getCustomRepository(SurveyRepository)
    const SurveyUsersRepository = getCustomRepository(SurveysUsersRepository)

    const userAlreadExists = await usersRepository.findOne({
      email, 
    })
      if(!userAlreadExists){
        return response.status(400).json({
          error: "User does not exists", 
        })
      }  
    
    const survey = await surveysRepository.findOne({
      id: survey_id, 
      
    })
      if(!survey){
        return response.status(400).json({
          error: "Survey does not exists", 
        })
      }    
    // SALVAR AS INFORMAÇÕES NA TABELA SURVEYuSER
      
    const surveyUser = SurveyUsersRepository.create({
      user_id: userAlreadExists.id,
      survey_id
    })  
    await SurveyUsersRepository.save(surveyUser)

    /**
     * CONFIGURAÇÃO DO ENVIO DO EMAIL
     */
    await SendMailService.execute(email, survey.title, survey.description)

    return response.json(surveyUser);

    // ENVIAR EMAIL PARA O USUÁRIO
  }
}
export {SendMailController}