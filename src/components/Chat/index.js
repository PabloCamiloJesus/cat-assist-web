import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../services/firebase/firebase";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import "firebase/compat/firestore";
import "./ChatApp.css";
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
        // User is signed out
        // ...
      }
    });
  }, []);

  useEffect(() => {
    if (chatId) {
      const messagesQuery = query(
        collection(db, "messages"),
        where("chatId", "==", chatId)
      );

      const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        const messagesArray = snapshot.docs.map((doc) => doc.data());

        var var2 = messagesArray.sort((a, b) => a.timestamp - b.timestamp);

        setMessages(var2);
      });
    }
  }, [chatId]);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      var data = {
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

    const felicidade = onSnapshot(employeesQuery, (snapshot) => {
      const employeesArr = snapshot.docs
        .map((doc) => doc.data())
        .filter((chat) => chat.users.some((user) => user.id === clientId));

      setEmployeeId(employeesArr);

      employeesArr.map((employee) => {
        employee["users"].map((employee2) => {
          if (clientId != null) {
            if (employee2.id != clientId) {
              setEmployeeChatId(employee2.id);
              // setChatter(employee2.name);
            }
          }
        });
      });
    });
  }, [employees]);

  if (loading) return <p>Carregando...</p>;

  return (
    <Container fluid id="chat-container">
      <div className="chat-box-chat">
        {employees.map((employee, index) => {
          return (
            <div key={index}>
              {employee["users"].map((employee2, index2) => {
                return (
                  <div key={index2}>
                    {employee2.id != clientId && employee2.id != clientId && (
                      <button
                        onClick={() => {
                          setChatId(employee.id);
                          setChatter(employee2.name);
                        }}
                        className="btn-acc"
                      >
                        {employee2.name ? employee2.name : "Default"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div
        className="messages-box"
        style={{ height: "400px", overflowY: "scroll" }}
      >
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>
              {msg.senderId === clientId
                ? auth.currentUser.displayName
                : chatterName}
              {": "}
            </strong>
            {msg.text}
          </p>
        ))}
      </div>

      <Form
        className="message-input"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <Form.Control
          type="text"
          placeholder="Escreva sua mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Chat;
