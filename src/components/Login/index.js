import React, { useState } from "react";
import Footer from "./../../components/Templates/footer/footer";
import "./index.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // Alterna entre Login e Cadastro
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de envio do formulário
  };
  
  function playAnim() {
    var si = document.getElementById("anim");
  
    // Remove the class briefly to reset the animation
    si.classList.remove("anim");
  
    // Use a short timeout to allow the browser to register the class removal
    setTimeout(() => {
      si.classList.add("anim"); // Add the class back to restart the animation
    }, 50); // A short delay (e.g., 50ms) to let the class removal take effect
  
    // Remove the class again after 3 seconds to stop the animation
    setTimeout(() => {
      si.classList.remove("anim");
    }, 5000);
  }

  return (
    // Container Geral
    <main className="auth-container">
      <section className="pos-rel"></section>
      <section id="anim" className={`auth-left-section ${isLogin ? '' : 'cadastro-mode'}`}>
        <img
          width="50%"
          height="50%"
          src={isLogin 
            ? require("../../assets/login.cadastro/bolabasquete.png") 
            : require("../../assets/login.cadastro/bolafutebol.png")}
          width="auto"
          alt={isLogin ? "Bola de basquete" : "Bola de futebol"}
          className="bola"
        />
      </section>
      <section className="auth-right-section">
        <h1>{isLogin ? "Faça seu Login" : "Faça seu Cadastro"}</h1>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email-input" className="custom-label">
              Email ou nome de usuário:
            </label>
            <input
              type="text"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email ou nome de usuário:"
              required
            />
          </div>

          {/* Senha */}
          <div className="form-group">
            <label htmlFor="password-input" className="custom-label">
              Senha:
            </label>
            <input
              type="password"
              id="password-input"
              className="form-control"
              placeholder="Senha:"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <br />
            <a href="#" className="forgot-password">
              Esqueci minha senha
            </a>
          </div>

          <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>
        </form>

        <div className="EntrarComRedesSociais">
          <a href="#" className="google">
            <i className="bi bi-google"></i> <span>Entrar com Google</span>
          </a>
          
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i> <span>Entrar com o Facebook</span>
          </a>
        </div>

        {/* Link para alternar entre Login e Cadastro */}
        <p>
          {isLogin ? (
            <>
              Não tem cadastro? <a href="#" onClick={() => {setIsLogin(false); playAnim()}}>Crie uma conta</a>
            </>
          ) : (
            <>
              Já tem conta? <a href="#" onClick={() => {setIsLogin(true); playAnim()}}>Faça login</a>
            </>
          )}
        </p>
      </section>
    </main>
  );
}

export default Auth;
