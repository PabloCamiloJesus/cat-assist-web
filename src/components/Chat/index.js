import React, { useState } from "react";
import "./index.css";
import image from "../../assets/perfil.png";

const contacts = [
  {
    id: 1,
    name: "Contato 1",
    imgUrl: image,
    messages: [
      { sender: "Contato 1", text: "Olá! Como vai você?" },
      { sender: "Você", text: "Tudo bem, e você?" },
    ],
  },
  {
    id: 2,
    name: "Contato 2",
    imgUrl: image,
    messages: [
      { sender: "Contato 2", text: "Oi! Vamos nos encontrar hoje?" },
      { sender: "Você", text: "Claro! Às 18h?" },
    ],
  },
  {
    id: 3,
    name: "Contato 3",
    imgUrl: image,
    messages: [
      { sender: "Contato 3", text: "Ei! Como estão as coisas?" },
      { sender: "Você", text: "Tudo ótimo, obrigado por perguntar!" },
    ],
  },
];

const ChatApp = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]); // Contato padrão

  // Função para renderizar mensagens com base no contato selecionado
  const renderMessages = () => {
    return selectedContact.messages.map((msg, index) => (
      <div className="imgBox">
        {msg.sender === "Você" ? "" : <img src={contacts[index].imgUrl} />}
        <div
          key={index}
          className={`message ${msg.sender === "Você" ? "sent" : "received"}`}
        >
          {msg.text}
        </div>
      </div>
    ));
  };

  return (
    <div className="chat-container">
      <div className="contact-list">
        <div className="contact-header d-flex flex-column align-items-center justify-content-center">
          <img src={require("../../assets/Vector.png")} />
          <h2>CHATS</h2>
        </div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`contact-item ${
              selectedContact.id === contact.id ? "active" : ""
            }`}
            onClick={() => setSelectedContact(contact)}
          >
            <img
              className="foto-do-perfil"
              src={contact.imgUrl}
              alt="foto do {contact.name}"
            />
            {contact.name} {/* Exibir nome do contato na sidebar */}
          </div>
        ))}
      </div>

      {/* Área do chat */}
      <div className="chat-area">
        <div className="chat-header">
          <h3>Conversando com: {selectedContact.name}</h3>
        </div>
        <div className="chat-messages">{renderMessages()}</div>
        <div className="chat-input">
          <input type="text" placeholder="Digite uma mensagem..." />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
