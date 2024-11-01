import React from "react";
import "./perfil.css";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";

import { app, auth } from "../../services/firebase/firebase";

const Perfil = () => {
  const user = auth.currentUser;

  const navigate = useNavigate();

  if (!auth.currentUser) {
    navigate("/login");
  }

  return (
    <div className="perfil-fullscreen" id="perfil">
      <div className="filtro-dark"></div>
      {/* nome e foto do usuario */}
      <div className="perfil-header">
        <img
          className="perfil-image"
          src={user?.photoURL}
          alt={user?.displayName}
        />
      </div>
      {/* dados do usuario */}
      <div className="perfil-content">
        <div className="perfil-container">
          <div className="perfil-info">
            <div className="perfil-row">
              <p className="perfil-label">Nome: </p>
              <p className="perfil-value">{user.displayName}</p>
            </div>
            <div className="perfil-row">
              <p className="perfil-label">Email: </p>
              <p className="perfil-value">{user.email}</p>
            </div>
            {/* <div className="perfil-row">
              <p className="perfil-label">Verificado?</p>
              <p className="perfil-value">{user.emailVerified}</p>
            </div>
            <div className="perfil-row">
              <p className="perfil-label">Telefone:</p>
              <p className="perfil-value">{user.phoneNumber}</p>
            </div> */}
            {/* botao de logout */}
            <button
            type="submit"
              className="perfil-button"
              onClick={() => {
                signOut(auth)
                  .then(function () {
                    navigate("/");
                  })
                  .catch(function (error) {
                    // An error happened.
                  });
              }}
            >
              SAIR DA CONTA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
