import Event from '@ioc:Adonis/Core/Event'

export default class UserRepository {
   constructor(){}

   async index (){
      Event.emit('new:user','')
      return 'hola desde repository'
   }

   async getUserById(){
      Event.emit('findUser:id','')
      return 'user encontrado'
   }
}