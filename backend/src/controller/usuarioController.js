const usuarioCtrl = {}

const Usuario = require('../models/Usuario')

usuarioCtrl.getUser = async(req, res) =>{
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.postUser = async(req, res) =>{
    const {nombre, apellido, correo, telefono, edad} = req.body;
    const newUser = new Usuario({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        telefono: telefono,
        correo: correo,
    })

    await newUser.save({message: "El usuario se creo correctamente"});
}

usuarioCtrl.getUser = async(req, res) =>{
    
}

usuarioCtrl.getUser = async(req, res) =>{
    
}

usuarioCtrl.getUser = async(req, res) =>{
    
}