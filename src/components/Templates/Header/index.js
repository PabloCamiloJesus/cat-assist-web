import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IntersectionObserverComponent from "../../animation/useIntersectionObserver";
import { auth } from "../../../services/firebase/firebase";
import "./header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [SignedUser, setUser] = useState(null); // Initialize as null to check for login status
  const [loading, setLoading] = useState(true); // Loading state to handle waiting

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        
        const currentUser = await auth.currentUser;
        
        setUser(currentUser);

      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    if (location.pathname === "/") {
      window.scrollTo(0, 0); // Move the scroll to the top
    }

    fetchUser();
  }, [location]);

  // Toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };



  // Navigation handler
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <IntersectionObserverComponent>
      <nav expand="lg" className="custom-navbar align-items-center justify-content-between w-100 " variant="dark" id="navbar-responsive">
        
          <Dropdown
            className="hamburger-dropdown"
            show={showDropdown}
            onToggle={toggleDropdown}
          >
            <Dropdown.Toggle
              variant="dark"
              id="dropdown-basic"
              onClick={toggleDropdown}
              className="hamburger-toggle"
            >
              ☰
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="custom-dropdown-menu"
              id="dropdown-menu"
            >
              <Dropdown.Item
                href="#home"
                onClick={(e) => handleNavigation(e, "/", "#home")}
              >
                HOME
              </Dropdown.Item>
              <Dropdown.Item
                href="#atendimento"
                onClick={(e) => handleNavigation(e, "/", "#atendimento")}
              >
                ATENDIMENTOS
              </Dropdown.Item>
              <Dropdown.Item
                href="#contato"
                onClick={(e) => handleNavigation(e, "/", "#sobre-nos")}
              >
                SOBRE NÓS
              </Dropdown.Item>
              <Dropdown.Item to="#perfil">PERFIL</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav class="w-100 align-items-center" id="nav-left-right">
            <Nav.Link
              className="nav-link"
              href="#home"
              onClick={(e) => handleNavigation(e, "/", "#home")}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              onClick={(e) => handleNavigation(e, "/", "#atendimento")}
            >
              ATENDIMENTOS
            </Nav.Link>
            <div className="navbar-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_SESI_vermelho.jpg"
                alt="SESI Logo"
                className="sesi-logo"
              />
            </div>
            <Nav.Link
              className="nav-link"
              onClick={(e) => handleNavigation(e, "/sobre-nos", "#sobre-nos")}
            >
              SOBRE NÓS
            </Nav.Link>
            {SignedUser ? (
              <Link className="nav-link" to="/perfil">
                PERFIL
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
            )}
          </Nav>
        
      </nav>
    </IntersectionObserverComponent>
  );
};

export default Header;
