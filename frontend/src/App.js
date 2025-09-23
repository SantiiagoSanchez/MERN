
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navegacion from './components/navegacion'
import ListaUsuarios from './components/ListaUsuarios';
import CrearUsuarios from './components/CrearUsuarios';

function App() {
  return (
    <div className="">
      <Navegacion></Navegacion>
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<ListaUsuarios/>}></Route>
          <Route path="/CrearUsuario" element={<CrearUsuarios/>}></Route>
          <Route path="/EditarUsuario/:id" element={<ListaUsuarios/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
