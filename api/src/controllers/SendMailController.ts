import {Request, Response} from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveyUsersRepository";
import { SurveyRepository } from "../repositories/SurveyRepository";
import { UserRepository } from "../repositories/UsersRepository";
import SendMailService from "../services/SendMailService";
import {resolve} from "path"
 

class SendMailController{
  async execute (request: Request, response: Response){
    const {email, survey_id} = request.body
    
    const usersRepository       = getCustomRepository(UserRepository)
    const surveysRepository     = getCustomRepository(SurveyRepository)
    const SurveyUsersRepository = getCustomRepository(SurveysUsersRepository)

    const user = await usersRepository.findOne({
      email, 
    })
      if(!user){
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

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      user_id: user.id,
      link: process.env.URL_MAIL
    }      
  
    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs")

    // VERIFICAR SE O USUÁRIO JÁ POSSÚI PESQUISA CADASTRADA
    const surveyUserAlreadyExists = await SurveyUsersRepository.findOne({
      where: [{user_id: user.id}, {value: null}]
    })

    if(surveyUserAlreadyExists){
      await SendMailService.execute(email, survey.title, variables, npsPath)
      return response.json(surveyUserAlreadyExists)

    }

    // SALVAR AS INFORMAÇÕES NA TABELA SURVEYuSER
    const surveyUser = SurveyUsersRepository.create({
      user_id: user.id,
      survey_id
    })  
    await SurveyUsersRepository.save(surveyUser)

    /**
     * CONFIGURAÇÃO DO ENVIO DO EMAIL
     */

    await SendMailService.execute(email, survey.title, variables, npsPath)

    return response.json(surveyUser);

    // ENVIAR EMAIL PARA O USUÁRIO
  }
}
export {SendMailController}