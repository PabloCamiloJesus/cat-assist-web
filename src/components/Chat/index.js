import React, { useState } from 'react';
import { Offcanvas, ListGroup, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ChatApp.css'; // Arquivo CSS personalizado

function ChatApp() {
  const [showContacts, setShowContacts] = useState(false);
  const [activeContact, setActiveContact] = useState('Rosa'); // Nome do contato selecionado

  const handleToggle = () => setShowContacts(!showContacts);
  
  // Função para trocar o contato ativo
  const handleSelectContact = (contactName) => {
    setActiveContact(contactName);
    setShowContacts(false); // Fecha a barra de contatos após selecionar
  };

  return (
    <Container fluid id="chat-container">
      <Row id="chat-row">
        {/* Barra de Contatos (visível apenas no desktop) */}
        <Col xs={3} className="d-none d-md-block contacts-bar" id="contacts-bar">
          <Button variant="primary" onClick={handleToggle} className="button-contatos" id="contacts-button">
            Contatos
          </Button>
          <Offcanvas show={showContacts} onHide={handleToggle} id="contacts-offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Contatos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ListGroup variant="flush" id="contacts-list">
                <ListGroup.Item action onClick={() => handleSelectContact('Rosa')}>
                  Rosa
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => handleSelectContact('Daniel')}>
                  Daniel
                </ListGroup.Item>
              </ListGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>

        {/* Tela de Chat */}
        <Col xs={12} md={9} className="chat-window" id="chat-window">
          {/* Barra superior com nome do contato */}
          <div className="barra" id="contact-bar">
            <span className="contact-name" id="contact-name">{activeContact}</span>

            {/* Botão "Contatos" (visível apenas em telas pequenas) */}
            <Button variant="primary" onClick={handleToggle} className="d-md-none" id="mobile-contacts-button">
              Contatos
            </Button>
          </div>

          {/* Caixa de mensagens */}
          <div className="chat-box" id="chat-box">
            <div className="message from-them" id="message-from-them">
              <span>Olá! como posso ajudar?</span>
            </div>
            <div className="message from-you" id="message-from-you">
              <span>Oiee, eu estou tendo problemas com meu login</span>
            </div>
            <div className="message from-them" id="message-from-them">
              <span>Entendi, irei te ajudar a resolver esses problemas!</span>
            </div>
            <div className="message from-you" id="message-from-you">
              <span>Perfeito! eu vou te contar meu problema agora</span>
            </div>
          </div>

          {/* Campo de entrada de mensagem */}
          <Form className="message-input" id="message-input">
            <Form.Control type="text" placeholder="Escreva sua mensagem..." id="message-input-field" />
            <Button variant="primary" type="submit" id="send-button">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatApp;
