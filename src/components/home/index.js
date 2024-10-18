import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import "animate.css";
import IntersectionObserverComponent from "../animation/useIntersectionObserver";

const Home = () => {
  const location = useLocation();

  // Detecta a mudança de rota e, se for a página inicial, rola para o topo
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0); // Move o scroll para o topo
    }
  }, [location]);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "CONECTE-SE AO ESPORTE!!",
      description:
        "Nossa assistente virtual está aqui para atender você com eficiência e personalização, facilitando o acesso aos serviços do CAT. Aproveite!",
      link: "#",
      linkText: "Saiba Mais",
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Fundo escuro
      backgroundImage:
        "",
      image:
        "https://img.freepik.com/vetores-gratis/conceito-de-ginasio-virtual-com-oculos-vr_23-2148527817.jpg?t=st=1728653778~exp=1728657378~hmac=77bf4f589649be9ebeabca18b2a946da3e546c1d9d6565957d1136957314eae5&w=740",
    },
    {
      title: "EXPERIÊNCIA PERSONALIZADA",
      description: "Você no controle do seu tempo e treinos.",
      link: "#",
      linkText: "Começar Agora",
      backgroundColor: "rgba(255, 102, 0, 0.7)", // Fundo laranja
      backgroundImage:
        "",
      image:
        "https://img.freepik.com/vetores-gratis/conceito-de-ginasio-virtual-com-oculos-vr_23-2148527817.jpg?t=st=1728653778~exp=1728657378~hmac=77bf4f589649be9ebeabca18b2a946da3e546c1d9d6565957d1136957314eae5&w=740",
    },
    {
      title: "TREINOS ADAPTADOS",
      description: "Treinamentos focados nas suas necessidades.",
      link: "#",
      linkText: "Saiba Mais",
      backgroundColor: "rgba(0, 153, 204, 0.7)", // Fundo azul claro
      backgroundImage:
        "",
      image:
        "https://img.freepik.com/vetores-gratis/conceito-de-ginasio-virtual-com-oculos-vr_23-2148527817.jpg?t=st=1728653778~exp=1728657378~hmac=77bf4f589649be9ebeabca18b2a946da3e546c1d9d6565957d1136957314eae5&w=740",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container-geral">
      <a className="icone-do-bot" href="#">
        <img src="" alt="luna" />
      </a>

      <IntersectionObserverComponent
        animationClass="animate__slow animate__fadeIn"
        id="container-banner"
      >
        <div className="carousel">
          <div
            className={`slide animate__animated animate__fadeIn animate__slow`}
            style={{
              backgroundColor: slides[activeSlide].backgroundColor, // Cor de fundo
              backgroundImage: `url(${slides[activeSlide].backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "90vh",
              position: "relative",
            }}
          >
            {/* Imagem Interna */}
            <img
              src={slides[activeSlide].image}
              alt="slide content"
              className="slide-image"
              style={{
                width: "400px",
                height: "300px",
                objectFit: "cover",
                position: "absolute",
                top: "50%",
                left: "20%",
                transform: "translateY(-50%)",
              }}
            />

            {/* Texto e Botão */}
            <div
              className="texto-banner"
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h1>{slides[activeSlide].title}</h1>
              <p>{slides[activeSlide].description}</p>
              <a href={slides[activeSlide].link} className="botao-rosa">
                {slides[activeSlide].linkText}
              </a>
            </div>
          </div>
        </div>
      </IntersectionObserverComponent>
      <div className="perguntas-frequentes">
        <div className="margin-oitenta">
          <hr />
        </div>
        <IntersectionObserverComponent animationClass="animate__fadeInUp">
          <div className="frequent-quest">
            <h2>PERGUNTAS FREQUENTES</h2>

            <div className="d-flex mt-cust">
              <div className="perguntas-frequentes-lado-direito lado-direito">
                <img
                  src={require("../../assets/duvidas.png")}
                  alt="mulher deitada em uma estrela"
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
                  <div className="" style={{ marginTop: 20 }}>
                    <Link to="/perguntas" className="link-pergunta">
                      <a href="" className="botao-preto botao">
                        Pergunte
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IntersectionObserverComponent>
      </div>

      <div className="atendimento-online-div" id="atendimento">
        <IntersectionObserverComponent animationClass="animate__fadeInUp">
          <div className="d-flex Atendimento-automatizado-conteudo">
            <div className="lado-direito">
              <div className="atendimento-automatizado-lado-esquerdo-conteudo">
                <img
                  src={require("../../assets/image 28.png")}
                  alt="icone de atendente virtual humana"
                />
                <h2 style={{ textTransform: "uppercase" }}>
                  Atendimento Online
                </h2>
                <div>
                  <p>
                    Você pode falar com um membro da nossa secretaria através do
                    atendimento online durante os seguintes horários:
                  </p>
                  <ul>
                    <li>Terça a Sexta: das 8h às 20h</li>
                    <li>Sábado: das 8h ao 12hrs</li>
                    <li>Domingo e Segunda: Fechado</li>
                  </ul>
                </div>

                <div className="">
                  <a href="/chat" className="white-btn botao">
                    Suporte
                  </a>
                </div>
              </div>
            </div>
            <div className="middle-line"></div>
            <div className="vai-esquerdo">
              <div className="atendimento-automatizado-lado-direito-conteudo">
                <img
                  src={require("../../assets/image 27.png")}
                  alt="icone de atedente virtual artificial"
                />
                <h2 style={{ textTransform: "uppercase" }}>
                  Atendimento automático
                </h2>
                <p>
                  Conheça Luna, nossa Assistente Virtual, pronta para
                  auxiliá-lo(a) na resolução de suas necessidades. Inteligente e
                  eficiente, Luna está à disposição para oferecer suporte e
                  orientações precisas em diversas situações. Experimente agora
                  e descubra como Luna pode facilitar sua experiência
                </p>

                <div className="">
                  <Link to="/chatbot" className="botao-rosa botao">
                    Assistente virtual
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </IntersectionObserverComponent>
      </div>

      <IntersectionObserverComponent animationClass="animate__fadeInUp">
        <div className="sobrenos" id="sobre-nos">
          <h2>Sobre nós</h2>

          <div className="d-flex">
            <div className="vai-esquerdo">
              <img
                src={require("../../assets/ilustracao-do-conceito-de-equipa.png")}
                alt="mulher escrevendo em caderno"
                width={500}
                height={500}
              />
            </div>

            <div className="lado-direito">
              <div className="sobrenos-vai-esquerdo-conteudo">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent consectetur, tellus finibus mollis lacinia, erat elit
                  sagittis nisl, ac viverra leo mi at tellus. Vestibulum vitae
                  nisi non odio condimentum accumsan. Vivamus tempor ac est
                  porta tristique. Nam sodales risus velit, vel tristique dui
                  tempus quis. Curabitur consequat facilisis leo, at finibus
                  sapien vehicula ut.
                </p>

                <div className="">
                  <a href="/sobre-nos" className="botao-preto botao">
                    Sobre nós
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IntersectionObserverComponent>
    </div>
  );
};

export default Home;
