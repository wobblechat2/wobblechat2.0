import React, { useEffect, useState } from 'react';
import socket, { io } from 'socket.io-client';
//import logo from './assets/chat_logo.png';
import Container from 'react-bootstrap/Container';
import useChat from "./useChat";
// import MessageService from '../service/messageService';

const Chat = ({roomId, setClickChat, topicId, dbMessages}) => {

  // socketIO.on('chatroom1', (message) => console.log(message));

  // const { roomId } = props.match.params;

  const { messages, sendMessage } = useChat(1);
  const [newMessage, setNewMessage] = useState('');
  const [combinedMessages, setCombinedMessages] = useState(dbMessages);
  console.log('messages =',messages);
  console.log('newMessage =',newMessage);

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(newMessage);
    setNewMessage('');
    combined();
  }

  //handle "Enter" key press as acceptable form of input submisison
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage(e);
      combined();
    }
  }

  // const combinedMessages = dbMessages
  // event listener whenever messages gets updated
  const combined = () => {
    const previousM = dbMessages
    const newCombined = previousM.concat(messages);
    setCombinedMessages(newCombined);
  }


  // replace below to combinedMessages


  // whenever we click close button, post to the database the messages that exist

  return (
    <div className='chatbox'>
      <div className='chatbox_header'>
        <h1 className="room-name">Chatroom: {roomId}</h1>
        <button className='chatbox_close' onClick={setClickChat}>Close</button>
      </div>
      <ul className="messages-list">
        {/* {dbMessages.map....} */}
        {co.map((message, i) => (
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
