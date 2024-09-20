import React from "react";
import "./index.css";
import { useState } from "react";

function Cadastro() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    const dadosUsuario = { email, senha };
    console.log(dadosUsuario);
    setEmail(''); setSenha(''); // Limpa o formulário após o envio
  }

  return (

    // Container Geral
    <main className="cadastro-container"onSubmit={handleSubmit}>
      <section className="cadastro-left-section">
        <img
          src={require("../../assets/login.cadastro/bolafutebol.png")}
          width="600px"
          alt="Bola de basquete"
        />
      </section>
      <section className="cadastro-right-section">
        <h1>Faça seu Cadastro</h1>
        <form action="#">
          {/* Email */}
          <div className="cadastro-form-group">
            <input
              type="text"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="cadastro-input"
              placeholder="Email ou nome de usuário:"
              required
            />
            <label htmlFor="email-input" className="cadastro-label">
              Email ou nome de usuário:
            </label>
          </div>

          {/* Senha */}
          <div className="cadastro-form-group">
            <input
              type="password"
              id="password-input"
              className="cadastro-input"
              placeholder="Senha:"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <label htmlFor="password-input" className="cadastro-label">
              Senha:
            </label>
            <br />
            <a href="#" className="cadastro-forgot-password">
              Esqueci minha senha
            </a>
          </div>

          <button type="submit" className="cadastro-button">Entrar</button>
        </form>

        <div className="cadastro-social-media">
          <a href="#" className="cadastro-google">
            <i className="bi bi-google"></i> <span>Entrar com Google</span>
          </a>
          |
          <a href="#" className="cadastro-facebook">
            <i className="bi bi-facebook"></i>{" "}
            <span>Entrar com o Facebook</span>
          </a>
        </div>

        {/* Link de Cadastro */}
        <p>
          Não tem cadastro?<a href="#" className="cadastro-signup-link"> Crie uma conta</a>
        </p>
      </section>
    </main>

  );
}

export default Cadastro;
