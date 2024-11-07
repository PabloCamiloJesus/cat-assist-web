
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PergFreq.css'; // Certifique-se de ter esse arquivo


function PergFreq() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Função para controlar o índice ativo
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 
  return (
    <div className="perg container mt-5">
      {/* Título acima do card */}
      
      
      
      <div className="card card-body" id='lista-pergunta'>
      <h2 className="text-center mb-4 animate__animated animate__fadeInUp">Perguntas Frequentes</h2> 
        {/* Caixa com dropbox de perguntas */}
        <div className="list-group list-group-flush animate__animated animate__fadeInUp">
          {[
            { question: "Como faço a carteirinha?", answer: "trazendo os documentos tais e documentos lá." },
            { question: "Qual horário a secretaria está aberta?", answer: "A secretaria está aberta das 8h às 17h." },
            { question: "Quais são os horários da academia?", answer: "A academia funciona das 6h às 22h." },
            { question: "Que horário o Sesi está aberto?", answer: "O Sesi abre de segunda a sexta das 7h às 20h." },
            { question: "Como funciona o SESI Esportes?", answer: "Oferece aulas de diversas modalidades esportivas." },
            { question: "Como funciona o sistema do Sesi?", answer: "O sistema do Sesi é integrado com várias unidades." },
            { question: "Quais são os planos?", answer: "Temos planos mensais, trimestrais e anuais." }
          ].map((item, index) => (
            // Função criando botão para dropbox para cada div com pergunta
            <div key={index}>
              <button
                className={`list-group-item list-group-item-action ${activeIndex === index ? 'text-danger' : ''}`}
                onClick={() => handleToggle(index)}
              >
                {item.question}
              </button>
              <div className={`collapse ${activeIndex === index ? 'show' : ''}`}>
                <p className="p-2 small text-muted">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Caixa de Sugestão */}
        <div className="caixa card-body d-flex text-center g-5 animate__animated animate__fadeInUp ">
          <input type="text" id="suggestion-input" className="form-control mb-3" placeholder="Adicione sua pergunta aqui..." />
          <button className="btn btn-danger p-2">ENVIAR</button>
        </div>
      </div>
    </div>
  );
}

export default PergFreq;
