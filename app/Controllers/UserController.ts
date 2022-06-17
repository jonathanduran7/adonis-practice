import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserRepository from 'App/Repository/UserRepository'

export default class UserController {

   private userRepository = new UserRepository()

   constructor() { }

   public async index() {
      return this.userRepository.index()
   }

   public async findUser() {
      return this.userRepository.getUserById()
   }
}
