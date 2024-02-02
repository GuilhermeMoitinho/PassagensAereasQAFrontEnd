import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import HomeGestor from './components/HomeGestor.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRouteLogin.jsx';
import EditarVoo from './components/EditarVoo.jsx';
import CadastroDePassageiro from './components/CadastroPassageiro.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gestao" element={<PrivateRoute element={<HomeGestor />} />} />
        <Route path="/editar/:vooId" element={<PrivateRoute element={<EditarVoo />} />} />
        <Route path="/cadastro/passageiro" element={<PrivateRoute element={<CadastroDePassageiro />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
