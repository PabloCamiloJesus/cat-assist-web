// Imports de recursos e de components

import Footer from "./components/Templates/footer/footer";
import Header from "./components/Templates/Header/index";
import Perfil from "./components/perfil/index";
import PergFreq from "./components/pergFreq/PergFreq";
import Home from "./components/home/index";
import Chat from "./components/Chat/index";
import Avaliacao from "./components/Avaliacao/index";
import Sobrenos from "./components/SobreNos/index";
import Login from "./components/Login/index";
import ChatBot from "./components/ChatBot/index";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import {auth} from "./services/firebase/firebase"

function App() {
  // Hook para pegar a rota atual

  const location = useLocation();
  
  useEffect(() => {
      window.scrollTo(0, 0); // Move o scroll para o topo
  }, [location]);

  // Verifica se a rota é "/cadastro" ou "/login"
  const isAuthPage = location.pathname === "/cadastro" || location.pathname === "/login";

  return (
    <div>
      {/* Exibe o Header exceto nas rotas /cadastro e /login */}
      {!isAuthPage && (
        <header>
          <Header />
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perguntas" element={<PergFreq />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre-nos" element={<Sobrenos />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>

      {/* Exibe o Footer exceto nas rotas /cadastro e /login */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
