import React, { useEffect, useState } from 'react';
import socket, { io } from 'socket.io-client';
//import logo from './assets/chat_logo.png';
import Container from 'react-bootstrap/Container';
import useChat from "./useChat";
import MessageService from '../service/messageService';

const Chat = ({roomId, setClickChat, id, dbMessages}) => {

  // socketIO.on('chatroom1', (message) => console.log(message));

  // const { roomId } = props.match.params;

  const { messages, sendMessage } = useChat(1);
  const [newMessage, setNewMessage] = useState('');

  console.log('messages =',messages);
  // console.log('comb messages =', combinedMessages);
  // console.log('newMessage =',newMessage);

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage === '') return;
    sendMessage(newMessage);
    setNewMessage('');
    // combined(messages);
  }

  //handle "Enter" key press as acceptable form of input submisison
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  }

  // the messages don't show up because it's labeled content in the key
  // in postgreSQL, allow the columns, 
  // change in the query & params the selectorId, createdByUser

  // create closeChat = async
    // toggle boolean
    // use messageservice for postMessage
  // --> added new ** 
  const closeChat = async () => {
    // const result = await MessageService.postMessage(`/api/messages/${id}`, combinedMessages);
    // console.log('result of postMessage in Chat.jsx =', result);
    // console.log('--------------------------------------------');
    setClickChat();
  }

  return (
    <div className='chatbox'>
      <div className='chatbox_header'>
        <h1 className="room-name">Chatroom: {roomId}</h1>
        <button className='chatbox_close' onClick={() => closeChat()}>Close</button>
      </div>
      <ul className="messages-list">
      {dbMessages.concat(messages).map((message, i) => (
          <li
            key={i}
            className={`message-item ${
              message.ownedByCurrentUser ? "my-message" : "received-message"
            }`}
          >
            {message.body}
          </li>
        ))}
      </ul>
      <div className='chat_inputBtn'>
        <input
          value={newMessage}
          onChange={handleNewMessageChange}
          onKeyDown={handleEnterKeyPress}
          placeholder="Write message..."
          id="chat_input"
        />
        <button onClick={handleSendMessage} id="chat_button">
          Send
        </button>
      </div>
      <div className='chatbox_footer'></div>
    </div>
  );
};

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
  
//   return (
//     <div className='chatbox'>
//       <div className="App">
//         <ul id="messages">
//           <li>Message 1</li>
//           <li>Message 2</li>
//           <li>Message 3</li>
//           <li>Message 4</li>
//         </ul>
//         <form id="form-chat" action="">
//           <input id="input-chat" /><button id='chat_button'>Send</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Chat;
