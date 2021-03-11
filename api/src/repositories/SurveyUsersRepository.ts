/**
 * RESPONSABILIDADES
 * -- UTILIZAÇÃO DOS MÉTODOS DO REPOSITÓRIO DO ORM
 * 
 */

import { EntityRepository, Repository } from "typeorm";
import {SurveyUser} from "../models/ServerUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser>{}

export {SurveysUsersRepository}