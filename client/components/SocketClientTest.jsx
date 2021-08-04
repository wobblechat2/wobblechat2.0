import React, { useEffect } from 'react';
import socket, { io } from 'socket.io-client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const SocketClientTest = (props) => {
    <div className='chatbox'>
      <div className="App">

        <ul id="messages">
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
          <li>Message 4</li>
        </ul>
        <form id="form-chat" action="">
          <input id="input-chat" /><button id='chat_button'>Send</button>
        </form>
      </div>
    </div>

}

export default SocketClientTest;