const {Schema, model} = require('mongoose')

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: Number
},
{
    timestamps: true //Esto es para almacenar automaticamente cuando se creo el documento, y cuando se actualizo el documento
})

module.exports = model('Usuario', usuarioSchema)