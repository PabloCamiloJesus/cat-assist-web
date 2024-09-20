import React, { useEffect } from "react";
import "./style.css";
import bannerImg from "../../assets/Group 117.png";
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

  return (
    <div className="container-geral">
      <a className="icone-do-bot" href="#">
        <img src="" alt="luna" />
      </a>

      <IntersectionObserverComponent animationClass="animate__slow animate__fadeIn">
        <div className="banner">
          <div className="texto-banner">
            <h1 className="texto-banner">
              CONECTE-SE AO ESPORTE!!
            </h1>
            <p>
              Nosso assistente virtual está aqui para atender você com
              eficiência e personalização, facilitando o acesso aos serviços do
              CAT. Aproveite!
            </p>

            <a href="#" className="botao-rosa botao texto-banner">
              Saiba Mais
            </a>
          </div>
          <div className=""></div>
        </div>
      </IntersectionObserverComponent>

      <div className="perguntas-frequentes">
        <div className="margin-oitenta">
          <hr />
        </div>
        <IntersectionObserverComponent animationClass="animate__fadeInLeft">
          <div className="frequent-quest">
            <h2>PERGUNTAS FREQUENTES</h2>

            <div className="d-flex mt-cust">
              <div className="perguntas-frequentes-lado-direito lado-direito">
                <img
                  src={require("../../assets/image.png")}
                  alt="mulher deitada em uma estrela"
                />
              </div>
              <div className="vai-esquerdo">
                <div className="perguntas-frequentes-lado-esquerdo">
                  <h3>Dúvidas:</h3>
                  <p>
                    Se tiver alguma dúvida ou necessitar de assistência, nossa
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

      <IntersectionObserverComponent animationClass="animate__fadeInRight">
        <div className="atendimento-online-div" id="atendimento">
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
        </div>
      </IntersectionObserverComponent>

      <IntersectionObserverComponent animationClass="animate__fadeInLeft">
        <div className="sobrenos" id="sobre-nos">
          <h2>Sobre nós</h2>

          <div className="d-flex">
            <div className="vai-esquerdo">
              <img
                src={require("../../assets/image 33.png")}
                alt="mulher escrevendo em caderno"
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
