/**
 * RESPONSABILIDADES
 * -- UTILIZAÇÃO DOS MÉTODOS DO REPOSITÓRIO DO ORM
 * 
 */

import { EntityRepository, Repository } from "typeorm";
import {User} from "../models/User";

@EntityRepository(User)
class UserRepository extends Repository<User>{}

export {UserRepository}