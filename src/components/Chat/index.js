import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../services/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import "./index.css";

function Chat() {
  const [employees, setEmployeeId] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [clientId, setClientChatId] = useState(null);
  const [employeeId, setEmployeeChatId] = useState(null);

  const [chatterName, setChatter] = useState("Funcionário");
  const [chatId, setChatId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setClientChatId(auth.currentUser.uid);
        setUser(auth.currentUser);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, []);

  useEffect(() => {

    if (chatId) {
      const messagesQuery = query(
        collection(db, "messages"),
        where("chatId", "==", chatId)
      );

      onSnapshot(messagesQuery, (snapshot) => {
        const messagesArray = snapshot.docs.map((doc) => doc.data());
        const sortedMessages = messagesArray.sort((a, b) => a.timestamp - b.timestamp);
        setMessages(sortedMessages);
      });
    }
  }, [chatId]);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const data = {
        chatId: chatId,
        senderId: clientId,
        text: newMessage,
        timestamp: serverTimestamp(),
      };

      await addDoc(collection(db, "messages"), data);
      setNewMessage("");
    }
  };

  useEffect(() => {
    const employeesQuery = query(collection(db, "chats"));

    onSnapshot(employeesQuery, (snapshot) => {
      const employeesArr = snapshot.docs
        .map((doc) => doc.data())
        .filter((chat) =>
          chat.users.some((user) =>
            Object.values(user).some((value) => value === clientId)
          )
        );

      setEmployeeId(employeesArr);

      employeesArr.forEach((employee) => {
        employee["users"].forEach((employee2) => {
          if (clientId && employee2.id !== clientId) {
            setEmployeeChatId(employee2.id);
          }
        });
      });
    });
  }, [employees]);

  // if (loading) return <p>Carregando...</p>;

  return (
    <div id="chat-container" className="">
      {/* Offcanvas Toggle Button - Only Visible on Small Screens */}
      <button
        className="butaoss btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#chatOffcanvas"
        aria-controls="chatOffcanvas"
      >
        Abrir Chats
      </button>

      {/* Offcanvas for Chats - Visible on Small Screens */}
      <div
        className="offcanvas offcanvas-start"
        id="chatOffcanvas"
        data-bs-scroll="true"
        tabIndex="-1"
        aria-labelledby="chatOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 id="chatOffcanvasLabel">Chats</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          {employees.map((employee, index) => (
            <div key={index}>
              {employee["users"].map((employee2, index2) => (
                <div key={index2}>
                  {employee2.id !== clientId && (
                    <button
                      onClick={() => {
                        setChatId(employee.id);
                        setChatter(employee2.name);
                      }}
                      className="btn-acc"
                      data-bs-dismiss="offcanvas"
                    >
                      {employee2.name ? employee2.name : "Default"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Chat List - Visible on Larger Screens */}
      <div className="chat-box-chat d-none d-md-block">
        <div className="icon">
          <i className="text-center bi bi-chat-square-dots"></i>
          <p>CHATS</p>
        </div>
        <div className="scroll">
          {employees.map((employee, index) => (
            <div key={index}>
              {employee["users"].map((employee2, index2) => (
                <div key={index2}>
                  {employee2.id !== clientId && (
                    <button
                      onClick={() => {
                        setChatId(employee.id);
                        setChatter(employee2.name);
                      }}
                      className="botaao btn-acc"
                    >
                      {employee2.name ? employee2.name : "Default"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="messages-container">
        {chatId ? (
          <div
            className="messages-box"
          >
            {messages.map((msg, index) => (
              <p
                key={index}
                className={"message-common " + (msg.senderId === clientId ? 'user-message' : 'other-message')}
              >
                <strong>{msg.senderId === clientId ? "" : `${chatterName}: `}</strong>
                {msg.text}
              </p>
            ))}
          </div>
        ) : (
          <div className="chat-default">
            <img src={require("../../assets/default-chat.png")} alt="" />
            <p>Estamos aqui para tirar dúvidas!</p>
          </div>
        )}
        <Form
          className="message-input"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          {chatId && (
            <div className="input-area">
              <input
                type="text"
                placeholder="Escreva sua mensagem..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                id="Input"
              />
              <button className="botaors btn-env" variant="primary" type="submit">
                Enviar
              </button>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Chat;
