import React from "react";
import "./perfil.css";

const Perfil = () => {

  return (
    <div className="perfil-fullscreen">
      {/* nome e foto do usuario */}
      <div className="perfil-header">
        <h1 className="perfil-name">Daniel Rosa Silva</h1>
        <img
          className="perfil-image"
          src={require("../../assets/astronauta-perfil.jpg")}
          alt="Daniel Rosa Silva"
        />
      </div>
      {/* dados do usuario */}
      <div className="perfil-content">
        <div className="perfil-container">
          <div className="perfil-info">
            <div className="perfil-row">
              <p className="perfil-label">EMAIL:</p>
              <p className="perfil-value">Daniel@gmail.com</p>
            </div>
            {/* botao de logout */}
            <button className="perfil-button">SAIR DA CONTA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
