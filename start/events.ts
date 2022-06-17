import Event from '@ioc:Adonis/Core/Event'

Event.on('new:user', () => {
   console.log('este es el evento 1')
})

Event.on('findUser:id', () => {
   console.log('este es el evento 2')
})

