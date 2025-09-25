import React, { useState } from "react";
import axios from 'axios'

const CrearUsuarios = () => {

    const valorInicial = {
        nombre: '',
        apellido: '',
        edad: '',
        telefono:'',
        correo: ''

    }

    const [usuario, setUsuario] = useState(valorInicial) //Nos permite crear una variable de estado, para poder almacenar informacion dentro de la variable.
    const [mensajeExito, setMensajeExito] = useState(false);


    const capturarDatos = (e) =>{
        const {name, value} = e.target
        setUsuario({...usuario, [name]: value})
    }


const guardarDatos = async (e) => {
    e.preventDefault();

    const newUser = {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        edad: parseInt(usuario.edad),
        telefono: parseInt(usuario.telefono),
        correo: usuario.correo
    };

    try {
        await axios.post('http://localhost:4000/api/usuarios', newUser);
        setUsuario({ ...valorInicial });
        console.log("Formulario reseteado:", valorInicial);
    } catch (error) {
        console.error("Error al guardar el usuario", error);
    }
};


    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <div className="w-full max-w-lg bg-white/30 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 tracking-wide">
                Crear Usuario
            </h2>
            <form onSubmit={guardarDatos} className="space-y-5">
                {/* Nombre */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        required
                        placeholder="Ingrese su nombre"
                        value={usuario.nombre}
                        onChange={capturarDatos}
                        className="w-full px-4 py-2 bg-white/60 dark:bg-gray-900/30 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Apellido */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        required
                        placeholder="Ingrese su apellido"
                        value={usuario.apellido}
                        onChange={capturarDatos}
                        className="w-full px-4 py-2 bg-white/60 dark:bg-gray-900/30 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Edad */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Edad:</label>
                    <input
                        type="number"
                        name="edad"
                        required
                        placeholder="Ingrese su edad"
                        value={usuario.edad}
                        onChange={capturarDatos}
                        className="w-full px-4 py-2 bg-white/60 dark:bg-gray-900/30 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Teléfono */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Teléfono:</label>
                    <input
                        type="tel"
                        name="telefono"
                        required
                        placeholder="Ingrese su teléfono"
                        value={usuario.telefono}
                        onChange={capturarDatos}
                        className="w-full px-4 py-2 bg-white/60 dark:bg-gray-900/30 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Correo */}
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">Correo:</label>
                    <input
                        type="email"
                        name="correo"
                        required
                        placeholder="example@example.com"
                        value={usuario.correo}
                        onChange={capturarDatos}
                        className="w-full px-4 py-2 bg-white/60 dark:bg-gray-900/30 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Botón */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
                >
                    Guardar Usuario
                </button>
            </form>
        </div>
    </div>
);
};

export default CrearUsuarios;
