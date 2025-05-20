import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaPrincipal from './paginas/pagina_principal.tsx';
import Explore from './paginas/explore.tsx';
import GameDetail from './paginas/gameDetail.tsx';
import Cart from './paginas/cart.tsx';
import Login from './paginas/login';
import Registro from './paginas/Registro';
import EnviarCodigo from './paginas/EnviarCodigo';
import NuevaContra from './paginas/NuevaContra';
import Catalogo from './paginas/pagina_principal';
import Configuracion from './paginas/configuracion.tsx';
import MayorVal from './paginas/mayorvalor.tsx';
import Masvendi from './paginas/masvendi.tsx';
import Adminpag from './paginas/adminpag.tsx';
import Categories from './paginas/categories';
import Platforms from './paginas/plataformas.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/pagina_principal" element={<PaginaPrincipal />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/forgot" element={<EnviarCodigo />} />
        <Route path="/resetPassword" element={<NuevaContra />} />
        <Route path="/catalog" element={<Catalogo />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/mayorval" element={<MayorVal />} />
        <Route path="/masvendi" element={<Masvendi />} />  
        <Route path="/adminpag" element={<Adminpag />} /> 
        <Route path="/categories" element={<Categories />} />
        <Route path="/plataformas" element={<Platforms />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);