import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import IntersectionObserverComponent from "../animation/useIntersectionObserver";

const Home = () => {

  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      title: "",
      description: "",
      link: "#atendimento",
      linkText: "Saiba-mais",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Fundo escuro
      backgroundImage: require("../../assets/home-images/assistente-virtual.png"),
      
    },
    {
      title: "",
      description: "",
      link: "#Perg-Freque",
      linkText: "Pergunte!!",
      backgroundColor: "rgba(255, 102, 0, 0.7)", // Fundo laranja
      backgroundImage: require("../../assets/home-images/perguntas-frequentes.png"),
      
    },
    {
      title: "",
      description: "",
      backgroundColor: "rgba(0, 153, 204, 0.7)", // Fundo azul claro
      backgroundImage: require("../../assets/home-images/esportes.png"),
      
    },
  ];

  // Controle de troca automática dos slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container-geral">
      {/* Ícone do bot */}
      <Link to="/chatbot" title="Luna Assistente" className="icone-do-bot">
        <img
          src={require('../../assets/luna.gif')}
          alt="luna"
          height={80}
          width={80}
        />
      </Link>
      

      {/* Seção do Banner */}
      <IntersectionObserverComponent
        animationClass="animate__slow animate__fadeIn"
        id="container-banner"
      >
        <div className="carousel">
          <div
            className="slide animate__animated animate__fadeIn animate__slow"
            style={{
              backgroundColor: slides[activeSlide].backgroundColor,
              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 90%, white 100%), url(${slides[activeSlide].backgroundImage})`,
            }}
          >
            {/* Texto e Botão */}
            <div
              className="texto-banner"
              style={{
                position: "absolute",
                bottom: "20px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h1>{slides[activeSlide].title}</h1>
              <p>{slides[activeSlide].description}</p>
              {activeSlide !== 2 && (
                <a
                  href={slides[activeSlide].link}
                  className="botao-rosa"
                  id="slide-button"
                >
                  {slides[activeSlide].linkText}
                </a>
              )}
            </div>
          </div>
        </div>
      </IntersectionObserverComponent>

      {/* Perguntas Frequentes */}
      <div id="Perg-Freque" className="perguntas-frequentes">
        <IntersectionObserverComponent animationClass="animate__fadeIn">
          <div className="frequent-quest">
            <h2>PERGUNTAS FREQUENTES</h2>

            <div className="d-flex mt-cust mt-5">
              <div className="perguntas-frequentes-lado-direito lado-direito">
                <img
                  src={require("../../assets/home-images/duvidas.png")}
                  alt="mulher ao lado de uma caixa de perguntas"
                />
              </div>
              <div className="vai-esquerdo">
                <div className="perguntas-frequentes-lado-esquerdo">
                  <h3>Dúvidas:</h3>
                  <p>
                    Se tiver alguma dúvida ou necessitar de assistência, nosso
                    ChatBox está disponível para auxiliá-lo de forma clara e
                    eficaz. Sinta-se à vontade para enviar suas perguntas, e
                    estaremos prontos para garantir que você tenha a melhor
                    experiência possível.
                  </p>
                  <div style={{ marginTop: 20 }}>
                    <Link to="/perguntas" className="link-pergunta">
                      <a className="botao-preto botao">Pergunte</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IntersectionObserverComponent>
      </div>

      {/* Atendimento Online e Automático */}
      <div className="atendimento-online-div" id="atendimento">
        <IntersectionObserverComponent animationClass="animate__fadeInUp">
          <div className="d-flex Atendimento-automatizado-conteudo">
            <div className="lado-direito">
              <div className="atendimento-automatizado-lado-esquerdo-conteudo">
                <img
                  src={require("../../assets/home-images/online-atendimento.png")}
                  alt="icone de atendente virtual humana"
                />
                <h2 style={{ textTransform: "uppercase" }}>
                  Atendimento Online
                </h2>
                <div>
                  <p style={{ color: "white" }}>
                    Você pode falar com um membro da nossa secretaria através do
                    atendimento online durante os seguintes horários:
                  </p>
                  <ul>
                    <li>Terça a Sexta: das 8h às 20h</li>
                    <li>Sábado: das 8h ao 12hrs</li>
                    <li>Domingo e Segunda: Fechado</li>
                  </ul>
                </div>
                <a href="/chat" className="white-btn botao">
                  Suporte
                </a>
              </div>
            </div>
            <div className="middle-line"></div>
            <div className="vai-esquerdo">
              <div className="atendimento-automatizado-lado-direito-conteudo">
                <img
                  src={require("../../assets/home-images/IA_Atendimento.png")}
                  alt="icone de atendente virtual artificial"
                />
                <h2 style={{ textTransform: "uppercase" }}>
                  Atendimento automatizado
                </h2>
                <p style={{ color: "white" }}>
                  Conheça Luna, nossa Assistente Virtual, pronta para
                  auxiliá-lo(a) na resolução de suas necessidades. Inteligente e
                  eficiente, Luna está à disposição para oferecer suporte e
                  orientações precisas em diversas situações. Experimente agora
                  e descubra como Luna pode facilitar sua experiência.
                </p>
                <Link to="/chatbot" className="botao-rosa botao">
                  Assistente virtual
                </Link>
              </div>
            </div>
          </div>
        </IntersectionObserverComponent>
      </div>

      {/* Sobre Nós */}
      <IntersectionObserverComponent animationClass="animate__fadeIn">
        <div className="sobrenos" id="sobre-nos">
          <h2>Sobre nós</h2>

          <div className="d-flex justify-content-evenly g-5">
            <div className="lado-direito d-flex justify-content-evenly">
              <div className="sobrenos-vai-esquerdo-conteudo">
                <p>
                  Bem-vindo à nossa plataforma! Somos uma equipe apaixonada por
                  tecnologia, inovação e atendimento eficiente. Nosso objetivo é
                  transformar a maneira como você interage com serviços
                  digitais, proporcionando uma experiência otimizada e
                  intuitiva. Com um foco voltado para soluções de comunicação
                  modernas e integradas, trabalhamos constantemente para
                  garantir que você tenha acesso fácil e rápido às informações
                  que precisa.
                </p>
                <a href="/sobre-nos" className="botao-preto botao">
                  Sobre nós
                </a>
              </div>
              <div className="vai-esquerdo">
                <img
                  src={require("../../assets/home-images/landpage-sobrenos.png")}
                  alt="mulher escrevendo em caderno"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </IntersectionObserverComponent>
    </div>
  );
};

export default Home;
