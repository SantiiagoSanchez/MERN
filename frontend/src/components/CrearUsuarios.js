import React, { useState } from "react";
import axios from 'axios'

const CrearUsuarios = () => {

    const valorInicial = {
        nombre: '',
        apellido: '',
        edad: 18,
        telefono:0,
        correo: ''

    }

    const [usuario, setUsuario] = useState(valorInicial) //Nos permite crear una variable de estado, para poder almacenar informacion dentro de la variable.
    
    const capturarDatos = (e) =>{
        const {name, value} = e.target
        setUsuario({...usuario, [name]: value})
    }


    const guardarDatos = async (e) =>{
        e.preventDefault(); //Esto es para que no se recargue la pagina una vez guardar usuario

        //HttpPost

        const newUser = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            telefono: usuario.telefono,
            correo: usuario.correo
        }

        await axios.post('http://localhost:4000/api/usuarios', newUser)

        setUsuario({...valorInicial}) //Esto es para limpiar los inputs
        
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Crear Usuario
            </h2>
            <form onSubmit={guardarDatos}>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Nombre:</label>
                <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su nombre"
                required
                name="nombre"
                value={usuario.nombre}
                onChange={capturarDatos} //Evento para cuando escribamos en la caja de texto, esto captura automaticamente el valor y lo guardamos en la variable de estado
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Apellido:</label>
                <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su apellido"
                required
                name="apellido"
                value={usuario.apellido}
                onChange={capturarDatos}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Edad:</label>
                <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su edad"
                required
                name="edad"
                value={usuario.edad}
                onChange={capturarDatos}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Teléfono:</label>
                <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su teléfono"
                required
                name="telefono"
                value={usuario.telefono}
                onChange={capturarDatos}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-1">Correo:</label>
                <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@example.com"
                required
                name="correo"
                value={usuario.correo}
                onChange={capturarDatos}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
                Guardar Usuario
            </button>
            </form>
        </div>
        </div>
    );
};

export default CrearUsuarios;
