import React, { useEffect, useState } from 'react';
import socket, { io } from 'socket.io-client';
//import logo from './assets/chat_logo.png';
import Container from 'react-bootstrap/Container';
import useChat from "./useChat";

const Chat = (props) => {

  // websocket initialize from Hazel
  // const socketIO = socket('ws://localhost:3000', {
  //   transports: ['websocket'],
  // });
  // socketIO.on('connect_error', (error) => {
  //   console.log('socket error', error);
  // });

  // // socketIO.on('connect', () => socketIO.send("It's from client!"));
  // socketIO.on('chatroom1', (message) => console.log(message));

  // const { roomId } = props.match.params;
  const { roomId } = props.roomId;
  // console.log('roomid =',roomId);
  // console.log('props =',props);
  const { messages, sendMessage } = useChat(1);
  const [newMessage, setNewMessage] = useState('');
  console.log('messages =',messages);
  console.log('newMessage =',newMessage);

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  }

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  }

  return (
    <div className='chatbox'>
      <h1 className="room-name">Chatroom: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>

      {/* <div className="App">
        <ul id="messages">
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
          <li>Message 4</li>
        </ul>
        <form id="form-chat" action="">
          <input id="input-chat" /><button>Send</button>
        </form>
      </div> */}
    </div>
  );
}

export default Chat;

  // var socket = io();

  // var messages = document.getElementById('messages');
  // var form = document.getElementById('form');
  // var input = document.getElementById('input');

  // form.addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   if (input.value) {
  //     socket.emit('chat message', input.value);
  //     input.value = '';
  //   }
  // });

  // socket.on('chat message', function(msg) {
  //   var item = document.createElement('li');
  //   item.textContent = msg;
  //   messages.appendChild(item);
  //   window.scrollTo(0, document.body.scrollHeight);
  // });
  