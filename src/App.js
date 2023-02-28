import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarprin from './layout/Navbarprin';
import Header from './layout/Header';
import Home from './pages/Home';
import Registro from './pages/Registro'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buscapropiedad from './pages/Buscapropiedad';
import Vistapropietario from './pages/Vistapropietario';
import Vistaalumno from './pages/Vistaalumno';

import PageLayoutpublico from './pages/PageLayoutpublico';

import Context from "./context/Context";
const { Provider } = Context;

function App() {
  return (
    <div>
     { /* Utilizamos elcomponente */ }
     <Provider>
     <BrowserRouter>         
          <Header />
          { /*<Navbarprin/>*/ }
          <Routes>
            <Route path="/" element={<PageLayoutpublico/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/registro" element={<Registro/>} />
            <Route path="/buscapropiedad" element={<Buscapropiedad/>} />
            <Route path="/vistapropietario/:id" element={<Vistapropietario/>} />
            <Route path="/vistaalumno/:id" element={<Vistaalumno/>} />           
          </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
