import React, { useState } from "react";
import "./index.css";
import image from "../../assets/perfil.png";

// Dados dos contatos e mensagens
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

// Componente para renderizar lista de contatos
const ContactList = ({ contacts, selectedContact, setSelectedContact }) => (
  <div className="contact-list">
    <div className="contact-header d-flex flex-column align-items-center justify-content-center">
      <img src={require("../../assets/Vector.png")} alt="Ícone" />
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
          alt={`foto do ${contact.name}`}
        />
        {contact.name}
      </div>
    ))}
  </div>
);

// Componente para renderizar mensagens do contato selecionado
const ChatMessages = ({ selectedContact }) => (
  <div className="chat-messages">
    {selectedContact.messages.map((msg, index) => (
      <div className="imgBox" key={index}>
        {msg.sender === "Você" ? "" : <img src={selectedContact.imgUrl} alt="Contato" />}
        <div className={`message ${msg.sender === "Você" ? "sent" : "received"}`}>
          {msg.text}
        </div>
      </div>
    ))}
  </div>
);

// Componente principal de Chat
const ChatApp = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <div className="chat-container">
      {/* Componente de lista de contatos */}
      <ContactList
        contacts={contacts}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />

      {/* Área do chat */}
      <div className="chat-area">
        <div className="chat-header">
          <h3>Conversando com: {selectedContact.name}</h3>
        </div>
        
        {/* Componente de mensagens */}
        <ChatMessages selectedContact={selectedContact} />

        {/* Área de input para envio de mensagens */}
        <div className="chat-input">
          <input type="text" placeholder="Digite uma mensagem..." />
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
