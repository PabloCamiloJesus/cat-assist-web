import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  onSnapshot,
  query,
  where,
  orderBy
} from "firebase/firestore";
import { auth, db } from "../../services/firebase/firebase";
import { useNavigate } from "react-router-dom";

function Chat() {
  // const [user, setUser] = useState(auth.currentUser);
  const [employees, setEmployeeId] = useState([]);
  const [messages, setMessages] = useState([]);

  const [clientMessages, setClientMessages] = useState([]);
  const [employeeMessages, setEmployeeMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");

  var navigate = useNavigate();
  const [employeeId, setEmployeeChatId] = useState(null);
  const [clientId, setClientChatId] = useState(null);
  const [chatId, setChatId] = useState(null);

  const [user, setUser] = useState(auth.currentUser); // Initialize as null to check for login status
  const [loading, setLoading] = useState(true); // Loading state to handle waiting
  // const [isAdmin, setAdminState] = useState(auth.currentUser.uid); // Initialize as null to check for login status

  // Carrega as mensagens entre cliente e funcionário em tempo real
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await auth.currentUser;

        await setUser(currentUser);
        await setClientChatId(currentUser.uid);
        //// console.log(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchUser();

    const fetchEmployees = () => {
      const employees2 = query(collection(db, "chats"));

      const employyes = onSnapshot(employees2, (snapshot) => {
        const employeesarr = snapshot.docs.map((doc) => doc.data());
        setEmployeeId(employeesarr);
        // // console.log(employees);
      });
    };

    fetchEmployees();
  }, [clientId, employeeId, employees]);

  useEffect(() => {

    // console.log(chatId);
    const q = query(
      collection(db, "messages"),
      where("chatId", "==", chatId),
      // orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesArray = snapshot.docs.map((doc) => doc.data());
      setMessages(messagesArray);
      // console.log(messages);
    });

    var updatemsg = messages;

    setMessages(updatemsg);

    // fetchMessages();
  });

  // Função para enviar nova mensagem
  const sendMessage = async () => {
    if (newMessage.trim()) {
      var data = await {
        chatId: chatId, // ID do cliente
        // employeeId: employeeId, // ID do cliente
        // clientId: clientId, // ID do cliente
        senderId: clientId, // ID do cliente
        text: newMessage,
        timestamp: new Date().toISOString(),
      };

      // anta

      // console.log(data);

      await setDoc(doc(db, "messages", data.timestamp), data);
      setNewMessage("");

      // // console.log(messages);
    }
  };

  if (loading) return <p>carregando</p>;

  return (
    <Container fluid id="chat-container">
      <div className="chat-box">
        {employees.map((employee, index) => (
          <button
            key={index}
            onClick={async (employee2) => {
              // console.log("employee data ");
              // console.log(employee);
              await setChatId(employee.id);
              // console.log("employee id ");
              // console.log(employeeId);
              // console.log("chat Id ");
              // console.log(chatId);
            }}
          >
            {employee.clientId}
          </button>
        ))}
      </div>
      <div className="chat-box">
        <div>
          {messages.map((msg, index) => (
            <p key={index}>
              <strong>
                {msg.senderId && msg.senderId === clientId
                  ? "Você: "
                  : "Funcionário: "}
              </strong>
              {msg.text}
            </p>
          ))}
        </div>
      </div>
      <Form
        className="message-input"
        id="message-input"
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
          id="message-input-field"
        />
        <Button variant="primary" type="submit" id="send-button">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Chat;
