import React, { useState } from "react";
import Footer from "./../../components/Templates/footer/footer";
import IntersectionObserverComponent from "../animation/useIntersectionObserver.js";
import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useNavigation } from "react-router-dom";

import { db, auth, provider } from "../../services/firebase/firebase.js";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // Alterna entre Login e Cadastro
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [username, setusername] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const navigate = useNavigate();

  
  const logIn = () => {
    console.log(
      `email = ${email}, password = ${senha}, confPassword = ${confSenha} `
    );

    console.log("evento numero 1");

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredentials) => {
        const user = userCredentials.user;

        navigate("/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            seterrorMessage(
              "Usuário não encontrado. Verifique seu email e tente novamente."
            );
            break;
          case "auth/invalid-credential":
            seterrorMessage(
              "Usuário não encontrado. Verifique seu email e tente novamente."
            );
            break;
          case "auth/wrong-password":
            seterrorMessage(
              "Senha incorreta. Verifique sua senha e tente novamente."
            );
            break;
          case "auth/invalid-email":
            seterrorMessage(
              "Email incorreto. Verifique seu email e tente novamente."
            );
            break;
          default:
            seterrorMessage(
              `Ocorreu um erro inesperado. Tente novamente mais tarde`
            );
            break;
        }
      });
  };

  const register = () => {
    console.log(
      `email = ${email}, password = ${senha}, confPassword = ${confSenha} `
    );
    console.log("evento numero 2");

    if (senha != confSenha) {
      seterrorMessage("As senhas não se coincidem.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredentials) => {
        const user = userCredentials.user;

        // db.collection("users").doc(user.uid).set({
        //   username: username,
        //   email: email,
        //   // imgUrl: imgFilePath,
        // });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);

        switch (error.code) {
          case "auth/email-already-in-use":
            seterrorMessage(
              "Este email já está em uso. Por favor, use outro email."
            );
            break;
          case "auth/invalid-email":
            seterrorMessage(
              "Formato de email inválido. Por favor, insira um email válido."
            );
            break;
          case "auth/operation-not-allowed":
            seterrorMessage(
              "O registro de usuários está desativado. Por favor, entre em contato com o suporte."
            );
            break;
          case "auth/weak-password":
            seterrorMessage(
              "A senha é muito curta. Por favor, insira uma senha com pelo menos 6 caracteres."
            );
            break;
          default:
            seterrorMessage(
              "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde."
            );
            break;
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosUsuario = { email, senha };
    console.log(dadosUsuario);
    setEmail("");
    setSenha(""); // Limpa o formulário após o envio
    setConfSenha(""); // Limpa o formulário após o envio
  };

  function playAnim() {
    var si = document.getElementById("anim");

    // Remove the class briefly to reset the animation
    si.classList.remove("anim");

    setIsLogin(!isLogin);

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
    <main className="auth-container" id="login">
      <section className="pos-rel"></section>
      <section
        id="anim"
        className={`auth-left-section ${isLogin ? "" : "cadastro-mode"}`}
      >
        <img
          height="50%"
          src={
            isLogin
              ? require("../../assets/login.cadastro/bolabasquete.png")
              : require("../../assets/login.cadastro/bolafutebol.png")
          }
          width="auto"
          alt={isLogin ? "Bola de basquete" : "Bola de futebol"}
          className="bola"
        />
      </section>
      <section className="auth-right-section">
        <h1 className="title">
          {isLogin ? "Faça seu Login" : "Faça seu Cadastro"}
        </h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="password-input" className="custom-label">
                Nome de usuário:
              </label>
              <input
                type="text"
                id="username-input-2"
                className="form-control"
                placeholder="Nome de usuário:"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>
          )}

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email-input" className="custom-label">
              Email:
            </label>
            <input
              type="text"
              id="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email:"
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
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="password-input" className="custom-label">
                Confirmar senha:
              </label>
              <input
                type="password"
                id="password-input-2"
                className="form-control"
                placeholder="Confirmar senha:"
                value={confSenha}
                onChange={(e) => setConfSenha(e.target.value)}
                required
              />
            </div>
          )}
          <a href="#" className="forgot-password">
            Esqueci minha senha
          </a>
          <br />

          <div className="">
            <p style={{ color: "red" }}>{errorMessage}</p>
          </div>

          <button
            type="submit"
            onClick={() => (isLogin ? logIn() : register())}
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>

        <div className="EntrarComRedesSociais">
          <button
            type="button"
            onClick={() => {
              var user = signInWithPopup(auth, provider).then( async () => {

                var userdata = await getAuth();
                
                if (user) {

                  navigate("/");

                }

              }).catch((error) => {
                switch (error.code) {
                  case "auth/user-not-found":
                    seterrorMessage(
                      "Usuário não encontrado. Verifique seu email e tente novamente."
                    );
                    break;
                  case "auth/invalid-credential":
                    seterrorMessage(
                      "Usuário não encontrado. Verifique seu email e tente novamente."
                    );
                    break;
                  case "auth/wrong-password":
                    seterrorMessage(
                      "Senha incorreta. Verifique sua senha e tente novamente."
                    );
                    break;
                  case "auth/invalid-email":
                    seterrorMessage(
                      "Email incorreto. Verifique seu email e tente novamente."
                    );
                    break;
                  default:
                    seterrorMessage(
                      `Ocorreu um erro inesperado. Tente novamente mais tarde`
                    );
                    break;
                }
              });
            }}
            className="google"
          >
            <i class="bi bi-google"></i> <span>Entrar com Google</span>
          </button>
        </div>

        {/* Link para alternar entre Login e Cadastro */}
        <br />
        <p>
          {isLogin ? (
            <>
              Não tem cadastro?{" "}
              <a
                href="#"
                onClick={() => {
                  playAnim();
                  // setTimeout(() => {
                  //   setIsLogin(false);
                  // }, 1000);
                }}
              >
                Crie uma conta
              </a>
            </>
          ) : (
            <>
              Já tem conta?{" "}
              <a
                href="#"
                onClick={() => {
                  playAnim();
                  // setTimeout(() => {
                  //   setIsLogin(true);
                  // }, 1000);
                }}
              >
                Faça login
              </a>
            </>
          )}
        </p>
      </section>
    </main>
  );
}

export default Auth;
