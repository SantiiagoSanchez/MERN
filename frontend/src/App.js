import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './components/navegacion';
import ListaUsuarios from './components/ListaUsuarios';
import CrearUsuarios from './components/CrearUsuarios';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navegacion />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<ListaUsuarios />} />
          <Route path="/CrearUsuario" element={<CrearUsuarios />} />
          <Route path="/EditarUsuario/:id" element={<ListaUsuarios />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
