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
        <button className="perfil-button">
        
         EDITAR PERFIL</button>
      </div>
      {/* dados do usuario */}
      <div className="perfil-content">
        <div className="perfil-container">
          <div className="perfil-info">
            <div className="perfil-row">
              <p className="perfil-label">INSCRITO EM: </p>
              <p className="perfil-value">ACADEMIA</p>
            </div>
            <div className="perfil-row">
              <p className="perfil-label">EMAIL:</p>
              <p className="perfil-value">Daniel@gmail.com</p>
            </div>
            <div className="perfil-row">
              <p className="perfil-label">DATA DE NASCIMENTO</p>
              <p className="perfil-value">05/06/2015</p>
            </div>
            <div className="perfil-row">
              <p className="perfil-label">DATA DE VENCIMENTO DA CARTEIRINHA:</p>
              <div className="status-carteirinha">
                <p className="perfil-value">04/08/24</p>
                <p className="perfil-status atrasado">EM ATRASO</p>
              </div>
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
