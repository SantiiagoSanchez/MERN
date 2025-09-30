const Usuario = require('../models/Usuario');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { nombre, apellido, correo, telefono, edad } = req.body;

        const newUser = new Usuario({ nombre, apellido, correo, telefono, edad });
        await newUser.save();

        res.status(201).json({ message: "Usuario creado correctamente", user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);

        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
    try {
        const { nombre, apellido, correo, telefono, edad } = req.body;

        const updatedUser = await Usuario.findByIdAndUpdate(
            req.params.id,
            { nombre, apellido, correo, telefono, edad },
            { new: true } // Devuelve el usuario actualizado
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json({ message: "Usuario actualizado correctamente", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await Usuario.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
};

// Exportar controladores
module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
