import React, { useEffect, useState } from 'react';
import socket, { io } from 'socket.io-client';
//import logo from './assets/chat_logo.png';
import Container from 'react-bootstrap/Container';
import useChat from "./useChat";
import MessageService from '../service/messageService';

const Chat = ({roomId, setClickChat, id, dbMessages}) => {

  // socketIO.on('chatroom1', (message) => console.log(message));

  // const { roomId } = props.match.params;

  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState('');

  console.log('socket room id =', roomId);
  // console.log('messages =',messages);
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
  }

  //handle "Enter" key press as acceptable form of input submisison
  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  }

  useEffect(()=> {
    const length = dbMessages.concat(messages).length;
    console.log(length)
    const chatbox = document.querySelector(`.msgNum${length-1}`);
    if (chatbox === null) return;
    chatbox.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"});
  }, [messages])


  // the messages don't show up because it's labeled content in the key
  // in postgreSQL, allow the columns, 
  // change in the query & params the selectorId, createdByUser

  // create closeChat = async
    // toggle boolean
    // use messageservice for postMessage
  // --> added new ** 
  const closeChat = async () => {
    const result = await MessageService.postMessage(`/api/messages/${id}`, dbMessages.concat(messages));
    console.log('result of postMessage in Chat.jsx =', result);
    console.log('--------------------------------------------');
    setClickChat();
  }

  return (
    <div className='chatbox'>
      <div className='chatbox_header'>
        <h1 className="room-name">Question: {id}</h1>
        <button className='chatbox_close' onClick={() => closeChat()}>Close</button>
      </div>
      <ul className="messages-list">
      {dbMessages.concat(messages).map((message, i) => (
          <li
            key={i}
            className={`message-item msgNum${i} ${
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
          id={id}
          className='chat_input'
        />
        <button onClick={handleSendMessage} id={id} className='chat_button'>
          Send
        </button>
      </div>
      <div className='chatbox_footer'></div>
    </div>
  );
};

export default Chat;








