import { useEffect, useRef, useState } from 'react';
import socket, { io } from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // name of the event
const SOCKET_SERVER_URL = "http://localhost:3000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {

    // creates a websocket connection
    socketRef.current = socket(SOCKET_SERVER_URL, {
      query: roomId,
    });

    // listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedbycurrentuser : message.senderid === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // destroys socket reference when connection closed
    return () => {
      socketRef.current.disconnect();
    };
  // });
  }, []);
// }, [roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderid: socketRef.current.id,
    });
  };

  return { messages, sendMessage };

};

export default useChat;
