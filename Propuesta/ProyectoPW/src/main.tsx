import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaPrincipal from './paginas/pagina_principal.tsx';
import Explore from './paginas/explore.tsx';
import GameDetail from './paginas/gameDetail.tsx';
//import Cart from './paginas/cart.tsx';
//import Login from './paginas/login.tsx';
//import Register from './paginas/register.tsx';
//import Profile from './paginas/profile.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/game/:id" element={<GameDetail />} />
        {/*<Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);