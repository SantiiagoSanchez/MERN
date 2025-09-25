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

    await newUser.save();
    res.status(201).json({ message: "El usuario se creó correctamente" });
}

usuarioCtrl.getUserbyId = async(req, res) =>{
    const usuario = await Usuario.findById(req.params.id) //En nuestro modelo buscamos por id
    res.json(usuario)
}

usuarioCtrl.deleteUser = async(req, res) =>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message: "El usuario ha sido eliminado"})
}

usuarioCtrl.putUser = async(req, res) =>{
    const {nombre, apellido, correo, telefono, edad} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        correo,
        telefono
    })

    res.status(201).json({ message: "El usuario se creó correctamente" });
}

module.exports = usuarioCtrl;