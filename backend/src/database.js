//Aca vamos a definir la cadena de conexion a la base de datos

const mongoose = require('mongoose')

//Cadena de conexion
//Si existe una variable de entorno MONGODB_URI la usamos, sino usamos localhost
const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            : 'mongodb://localhost/dbtest'

mongoose.connect(URI)

const conection = mongoose.connection;

conection.once('open', ()=>{
    console.log('La base de datos a sido conectada: ', URI)
}) 