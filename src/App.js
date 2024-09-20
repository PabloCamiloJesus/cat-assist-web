// Imports de recursos e de components

import React from "react";
import Footer from "./components/Templates/footer/footer";
import Header from "./components/Templates/Header/index";
import Perfil from "./components/perfil/index";
import PergFreq from "./components/pergFreq/PergFreq";
import Cadastro from "./components/Cadastro/index";
import Home from "./components/home/index";
import Chat from "./components/Chat/index";
import Default from "./components/ChatDefault/index";
import Avaliacao from "./components/Avaliacao/index";
import Sobrenos from "./components/SobreNos/index";
import Login from "./components/Login/index";
import ChatBot from "./components/ChatBot/index";
// import ScrollableContent from "./components/scrollbar/scrollbar";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  // Hook para pegar a rota atual
  const location = useLocation();

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
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat-default" element={<Default />} />
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
