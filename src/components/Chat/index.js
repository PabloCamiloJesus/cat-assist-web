import React, { useState, useEffect } from "react";
import {
  Offcanvas,
  ListGroup,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { collection, addDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { auth, db} from "../../services/firebase/firebase";

import { useNavigate } from "react-router-dom";

import "./ChatApp.css";

function ChatApp() {
  const [user, setUser] = useState(auth.currentUser);
  const [showContacts, setShowContacts] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [contacts, setContacts] = useState([]);

  var navigate = useNavigate();

  // Autentica e salva o usuário
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (!currentUser) navigate("/login");
    });
    return unsubscribe;
  }, []);

  // Busca todos os contatos da coleção "users"
  useEffect(() => {
    // Verifica se o usuário e o contato ativo estão definidos antes de configurar a consulta
    if (user && activeContact) {
      const q = query(
        collection(db, "messages"),
        where("sender", "in", [user.uid, activeContact.uid]),
        where("receiver", "in", [user.uid, activeContact.uid])
      );
  
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedMessages = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => a.timestamp - b.timestamp); // Ordena mensagens pelo timestamp
        setMessages(fetchedMessages);
      });
      return () => unsubscribe(); // Desinscreve quando o componente é desmontado
    }
  }, [activeContact, user]);

  // Função para enviar mensagem
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Por favor, faça login para enviar mensagens.");
      return;
    }

    if (newMessage.trim() !== "" && activeContact) {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        sender: user.uid,
        receiver: activeContact.uid,
        timestamp: new Date(),
      });
      setNewMessage("");
    }
  };

  // Carrega as mensagens entre o usuário e o contato ativo em tempo real
  useEffect(() => {
    if (activeContact && user) {
      const q = query(
        collection(db, "messages"),
        where("sender", "in", [user.uid, activeContact.uid]),
        where("receiver", "in", [user.uid, activeContact.uid])
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedMessages = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => a.timestamp - b.timestamp);
        setMessages(fetchedMessages);
      });
      return unsubscribe;
    }
  }, [activeContact, user]);

  const handleToggle = () => setShowContacts(!showContacts);

  const handleSelectContact = (contact) => {
    setActiveContact(contact);
    setShowContacts(false);
  };

  const SidebarChats = () => (
    <Container>
      {contacts.map((contact) => (
        <ListGroup key={contact.id} variant="flush" id="contacts-list">
          <ListGroup.Item action onClick={() => handleSelectContact(contact)}>
            {contact.displayName || contact.email}
          </ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  );

  return (
    <Container fluid id="chat-container">
      <Row id="chat-row">
        <Col xs={3} className="d-none d-md-block contacts-bar" id="contacts-bar">
          <Button
            variant="primary"
            onClick={handleToggle}
            className="button-contatos"
            id="contacts-button"
          >
            Contatos
          </Button>
          <Offcanvas
            show={showContacts}
            onHide={handleToggle}
            id="contacts-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Contatos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup variant="flush" id="contacts-list">
                <SidebarChats />
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>

        <Col xs={12} md={9} className="chat-window" id="chat-window">
          <div className="barra" id="contact-bar">
            <span className="contact-name" id="contact-name">
              {activeContact ? activeContact.displayName || activeContact.email : "Selecione um contato"}
            </span>
            <Button
              variant="primary"
              onClick={handleToggle}
              className="d-md-none"
              id="mobile-contacts-button"
            >
              Contatos
            </Button>
          </div>

          <div className="chat-box" id="chat-box">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === user.uid ? "from-you" : "from-them"}`}
              >
                <span>{message.text}</span>
              </div>
            ))}
          </div>

          <Form className="message-input" id="message-input" onSubmit={handleSendMessage}>
            <Form.Control
              type="text"
              placeholder="Escreva sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              id="message-input-field"
            />
            <Button variant="primary" type="submit" id="send-button">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatApp;
