import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link
                className="text-gray-700 dark:text-gray-300 font-bold text-lg"
                to="/"
            >
                Usuarios
            </Link>

            {/* Botón menú móvil */}
            <div className="sm:hidden">
                <button
                type="button"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                </button>
            </div>

            {/* Links desktop */}
            <div className="hidden sm:flex sm:space-x-6 items-center">
                <Link
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                to="/"
                >
                Lista usuarios
                </Link>
                <Link
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                to="/CrearUsuario"
                >
                Crear usuarios
                </Link>
            </div>
            </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
            <div className="sm:hidden px-4 pb-4 space-y-2">
            <Link
                className="block text-gray-700 dark:text-gray-300 py-2 hover:text-blue-500 dark:hover:text-blue-400"
                to="/"
            >
                Lista usuarios
            </Link>
            <Link
                className="block text-gray-700 dark:text-gray-300 py-2 hover:text-blue-500 dark:hover:text-blue-400"
                to="/CrearUsuario"
            >
                Crear usuarios
            </Link>
            </div>
        )}
        </nav>
    );
};

export default Navegacion;