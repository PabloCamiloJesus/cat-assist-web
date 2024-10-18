import React, { useState } from "react";
import "./footer.css"; // Your custom CSS file
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Import necessary icons

const Footer = () => {
  // Função de Menu aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Container */}
      <footer className="footer text-white pt-0 mg-4">
        <div className="redline">
          <span></span>
        </div>
        <div className="below-footer">
          <div>
            <div className="d-flex align-items-center row text-center">
              {/* Column 1: Service Links */}
              <div className="col-md-3 text-center mb-4 mb-md-0">
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
              </div>

              {/* Column 2: Logo and Contact */}
              <div className="col-md-3 text-center">
                <img
                  src={require("../../../assets/sesi-logo.png")}
                  alt="SESI Logo"
                  className="mb-3"
                  style={{ width: "150px", height:"70px" }}
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
                <p className="mt-2">
                  TELEFONE
                  <br />
                  (XX) XXXXX-XXXXX
                </p>
              </div>

              {/* Column 3: SESI Information */}
              <div className="col-md-3 text-center">
                <h5>SESI</h5>
                <p>
                  "Visa a formação do indivíduo na cidadania, capaz de
                  participar ativamente de uma sociedade plural, por meio do
                  exercício da liberdade, do respeito e da solidariedade."
                </p>
                <p>
                  E-MAIL
                  <br />
                  <a href="mailto:xxxxx@xxxx.com" className="text-white">
                    xxxxx@xxxx.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="below-footer">
            <p>Copyright 2024 © Todos os direitos reservados. - CNO</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
