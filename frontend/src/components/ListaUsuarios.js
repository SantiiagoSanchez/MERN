import React, { useEffect, useState }  from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

const ListaUsuarios = () => {

    const [lista, setLista] = useState([])

    // Esto es para renderizar las API
    useEffect(()=>{
        const getUsuarios = async() =>{
            const res = await axios.get('http://localhost:4000/api/usuarios')
            setLista(res.data) //Data tiene todos los datos de nuestra API
        }
        getUsuarios();
    },[lista])

    const eliminarUsuario = async (id) =>{
        await axios.delete(`http://localhost:4000/api/usuarios/${id}`)
    }

return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {lista.map(list => (
            <div
                key={list._id}
                className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {list.nombre}
                    </h3>
                </div>

                {/* Body */}
                <div className="px-6 py-4 text-gray-700 dark:text-gray-200 space-y-2">
                    <p><span className="font-medium">Apellido:</span> {list.apellido}</p>
                    <p><span className="font-medium">Edad:</span> {list.edad}</p>
                    <p><span className="font-medium">Teléfono:</span> {list.telefono}</p>
                    <p><span className="font-medium">Correo:</span> {list.correo}</p>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end bg-white/50 dark:bg-gray-800/50">
                    <div className="flex space-x-4">
                        <button className="bg-red-400 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg" onClick={()=>{eliminarUsuario(list._id)}}>
                            Eliminar
                        </button>
                        <Link className="bg-yellow-400 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg" to={`/EditarUsuario/${list._id}`}>
                            Editar
                        </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

}

export default ListaUsuarios
