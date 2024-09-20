import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import "./header.css"; // Para estilização personalizada
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IntersectionObserverComponent from "../../animation/useIntersectionObserver";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const location = useLocation();
  const navigate = useNavigate();

  // Detecta a mudança de rota e, se for a página inicial, rola para o topo
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0); // Move o scroll para o topo
    }
  }, [location]);

  const handleNavigation = (e, path, sectionId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView();
      }
    } else {
      navigate(path);
    }
  };

  return (
    <IntersectionObserverComponent animationClass="animate__slow animate__fadeIn">
    <Navbar expand="lg" className="custom-navbar d-flex" variant="dark">
      <Container id="navbar-responsive">
        {/* Botão de hambúrguer que aciona o dropdown em telas menores */}
        <Dropdown className="hamburger-dropdown">
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-basic"
            onClick={toggleDropdown}
            className="hamburger-toggle"
          >
            ☰ {/* Ícone do hambúrguer */}
          </Dropdown.Toggle>

          <Dropdown.Menu
            show={showDropdown}
            className="custom-dropdown-menu"
            id="dropdown-menu"
          >
            <Dropdown.Item href="#home" onClick={(e) => handleNavigation(e, '/', '#home')}>HOME</Dropdown.Item>
            <Dropdown.Item href="#atendimento" onClick={(e) => handleNavigation(e, '#atendimento')}>ATENDIMENTOS</Dropdown.Item>
            <Dropdown.Item href="#contato" onClick={(e) => handleNavigation(e, '/sobre-nos', '#sobre-nos')}>SOBRE NÓS</Dropdown.Item>
            <Dropdown.Item to="#perfil">PERFIL</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Menus de navegação que aparecem na versão desktop */}
        {/* Aplica a classe "hidden" ao Nav quando o dropdown estiver aberto */}
        <Nav id="nav-left-right">
          <Nav.Link className="nav-link" href="#home" onClick={(e) => handleNavigation(e, '/', '#home')}>
            HOME
          </Nav.Link>
          <Nav.Link className="nav-link" href="#atendimento" onClick={(e) => handleNavigation(e, '/', '#atendimento')}>
            ATENDIMENTOS
          </Nav.Link>
          {/* Logo centralizado */}
          <div className="navbar-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_SESI_vermelho.jpg"
              alt="SESI Logo"
              className="sesi-logo"
            />
          </div>
          <Nav.Link className="nav-link" href="#sobre-nos" onClick={(e) => handleNavigation(e, '/sobre-nos', '#sobre-nos')}>
            SOBRE NÓS
          </Nav.Link>
          <Link className="nav-link" to="/perfil">
            PERFIL
          </Link>
        </Nav>
      </Container>
    </Navbar>
    </IntersectionObserverComponent>
  );
};

export default Header;
