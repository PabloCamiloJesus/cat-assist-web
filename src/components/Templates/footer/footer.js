import React, { useState } from "react";
import "./footer.css"; // Seu arquivo CSS personalizado
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// Componente para o menu de serviços
const ServiceMenu = ({ isMenuOpen, toggleMenu }) => (
  <div className="services-menu">
    <button className="menu-toggle mx-auto p-2" onClick={toggleMenu}>
      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className="menu-text">SERVIÇOS</span>
    </button>
    <ul className={`list-unstyled ${isMenuOpen ? "open" : ""}`}>
      <li>
        <a href="#home" className="text-white">
          HOME
        </a>
      </li>
      <li>
        <a href="#atendimentos" className="text-white">
          ATENDIMENTOS
        </a>
      </li>
      <li>
        <a href="#contate-nos" className="text-white">
          CONTATE-NOS
        </a>
      </li>
      <li>
        <a href="#sobre-nos" className="text-white">
          SOBRE NÓS
        </a>
      </li>
    </ul>
  </div>
);

// Componente para a logo e contato
const LogoAndContact = () => (
  <div className="text-center">
    <img
      src={require("../../../assets/sesi-logo.png")}
      alt="SESI Logo"
      className="mb-3"
      style={{ width: "150px", height: "70px" }}
    />
    <div className="social-icons">
      <a href="#instagram" className="text-white mx-2">
        <FaInstagram size={24} />
      </a>
      <a href="#telefone" className="text-white mx-2">
        <FaWhatsapp size={24} />
      </a>
      <a href="#email" className="text-white mx-2">
        <FaEnvelope size={24} />
      </a>
    </div>
    <p className="mt-2 text-center">
      TELEFONE
      <br />
      (XX) XXXXX-XXXXX
    </p>
  </div>
);

// Componente para as informações do SESI
const SesiInfo = () => (
  <div className="text-center">
    <h5>SESI</h5>
    <p>
      "Visa a formação do indivíduo na cidadania, capaz de participar
      ativamente de uma sociedade plural, por meio do exercício da liberdade,
      do respeito e da solidariedade."
    </p>
    <p className="text-center">
      E-MAIL
      <br />
      <a href="mailto:xxxxx@xxxx.com" className="text-white">
        xxxxx@xxxx.com
      </a>
    </p>
  </div>
);

// Componente principal de Footer
const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <footer className="footer text-white pt-0 mg-4">
        <div className="redline">
          <span></span>
        </div>
        <div className="below-footer">
          <div className="d-flex align-items-center justify-content-around row text-center mt-3" id="container-footer">
            {/* Coluna 1: Menu de Serviços */}
            <div className="col-md-3 text-center mb-4 mb-md-0">
              <ServiceMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>

            {/* Coluna 2: Logo e Contato */}
            <div className="col-md-3">
              <LogoAndContact />
            </div>

            {/* Coluna 3: Informações do SESI */}
            <div className="col-md-3">
              <SesiInfo />
            </div>
          </div>

          {/* Direitos autorais */}
          <div className="copyright d-flex justify-content-center mt-3">
            <p>Copyright 2024 © Todos os direitos reservados. - CNO</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
