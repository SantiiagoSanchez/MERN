//Este archivo sirve para configurar el servidor con las rutas y más cosas

const express = require('express')
const cors = require('cors')
const app = express();

//Configuracion
//Esto es para decirle que nos guarde una variable llamada port, como segundo parametro le decimos el puerto para que lo ejecute, le pasamos la variable de entorno "PORT", si no tiene una variable "PORT" que ejecute el puerto 4000
app.set('port', process.env.PORT || 4000)


//Exportamos el app para que en otro lugares del proyecto lo podamos utilizar
module.exports = app;