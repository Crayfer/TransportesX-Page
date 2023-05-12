import './App.css';
import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';

import HomePage from './pages/HomePage';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
//import Novedades from './pages/Novedades';
import NovedadesPage from './pages/Novedadess';
import Servicios from './pages/Servicios';
import Galeria from './pages/Galeria';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Prueba from './components/layouts/Prueba';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="nosotros" element={<Nosotros />}/>
          <Route path="servicios" element={<Servicios />}/>
          <Route path="galeria" element={<Galeria />}/>
          <Route path="novedades" element={<NovedadesPage />}/>
          <Route path="contacto" element={<Contacto />}/>
        </Routes>
      </BrowserRouter>
      {/*<Prueba />*/}
      <Footer texto="Prop exitoso (^_-)-☆"/>
    </div>
  );
}

export default App;