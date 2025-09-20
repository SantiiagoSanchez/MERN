//Este archivo sirve para configurar el servidor con las rutas y más cosas

const express = require('express')
const cors = require('cors')
const app = express();

//Configuracion
//Esto es para decirle que nos guarde una variable llamada port, como segundo parametro le decimos el puerto para que lo ejecute, le pasamos la variable de entorno "PORT", si no tiene una variable "PORT" que ejecute el puerto 4000
app.set('port', process.env.PORT || 4000)

//Middlewares. Funcionalidades para poder decirle al servidor que antes de que ejecute las rutas, primero pase por los middlewares. De esta manera se va a validar las peticiones o configuracion, una vez todo ok, pasa a las rutas

app.use(cors()) //Nos permite hacer peticiones desde un servidor distinto al del servidor de nuestro backend

app.use(express.json()) //Esto es para que cuando hagamos una peticion http, nos devuelve o enviamos json.

//Rutas

app.get('/', (req, res)=>{
    res.send("Bienvenido a mi API Rest full");
})


//Exportamos el app para que en otro lugares del proyecto lo podamos utilizar
module.exports = app;