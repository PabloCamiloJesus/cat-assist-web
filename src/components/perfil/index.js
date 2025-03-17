// src/components/Perfil/index.js

import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../services/authService";  // Importa o hook de autenticação
import "./style.css"

const Perfil = () => {
    const navigate = useNavigate();
    const { user, handleSignOut } = useAuth(navigate);  // Usando o hook para obter o estado de autenticação

    // Exibe uma tela de carregamento enquanto o estado de autenticação está sendo processado
    if (!user) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="perfil-fullscreen" id="perfil">
            <div className="dark-background"></div>

            {/* Dados do usuário */}
            <div className="perfil-container">
                <div className="perfil-info">
                    <div className="perfil-header">
                        <img
                            className="perfil-image"
                            src={user.photoURL}
                            alt={user.displayName}
                        />
                    </div>
                    <div className="perfil-row">
                        <p className="perfil-label">Nome: </p>
                        <p className="perfil-value">{user.displayName}</p>
                    </div>
                    <div className="perfil-row">
                        <p className="perfil-label">Email: </p>
                        <p className="perfil-value">{user.email}</p>
                    </div>
                    <button
                        type="button"
                        className="perfil-button"
                        onClick={handleSignOut}  // Chama a função de logout
                    >
                        Sair da conta
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
