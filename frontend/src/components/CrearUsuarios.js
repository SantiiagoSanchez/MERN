import React from "react";

const CrearUsuarios = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Crear Usuario
            </h2>
            <form>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Nombre:</label>
                <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su nombre"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Apellido:</label>
                <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su apellido"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Edad:</label>
                <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su edad"
                required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Teléfono:</label>
                <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su teléfono"
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-1">Correo:</label>
                <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@example.com"
                required
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
