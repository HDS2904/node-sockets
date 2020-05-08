//IMPORTACIONES
const { io } = require('../server')

//ACCIONES CON EL FRONT-END y BACKEND
io.on('connection', (client) => {   //Reporta la conexion de usuario

    client.emit('bienvenida', { //Envio (emit)
        usuario:'Adm Jonathan',
        mensaje: 'Bienvenido a este espacio'
    })

    client.on('disconnect', () => {     //usando la variable anterior del usuario verifica la desconexion de usuario
        console.log('Se desconecto el usuario')
    })

    client.on('enviarMensaje', (mensaje, callback) => { //Escucha (on) 
        console.log(mensaje)
        
        //asignando mensaje a la referencia de la funcion segun el exito
        if(mensaje.usuario){
            client.broadcast.emit('bienvenida', `Se agrego ha: ${mensaje.usuario}`)     //BROADCAST: envia mensaje a todos los usuarios
            callback({
                resp: 'se ejecuto bien'
            })
        }else {
            callback({
                resp: 'se ejecuto mal el disparo'
            })
        }
    })
    //nota: callback es referencia de la funcion de confirmacion del emisor
})

