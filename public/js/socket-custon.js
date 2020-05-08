var socket = io()
        // on: Escuchar infromación del servidor
        socket.on('connect', function(){
            console.log('Conectado al servidor');
        })

        socket.on('disconnect', function(){
            console.log('Se perdio conexion del servidor');
        })


        //emit: Enviar infromación solo al servidor
        socket.emit('enviarMensaje', {
            usuario: 'Jonathan Canales',
            mensaje: 'Hola reportando de HTML'
        }, function(res){      //Funcion que se dispara al ejecutar satisfactoriamente la función  <<============
            console.log('Respuesta del servidor: ',res)
        })

        //on: Escuchar información
        socket.on('bienvenida', function(mensaje){
            console.log('Servidor', mensaje)
        })
