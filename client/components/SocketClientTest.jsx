import React, { useEffect } from 'react';
import socket, { io } from 'socket.io-client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const sockServer = io('http://localhost:3000');

const SocketClientTest = (props) => {
    //set up message variable for use with hooks and init to empty string
    const [message, setMessage] = useState('');

    //hook to update state of component to show new message
    useEffect(() => {
        sockServer.on('From websocket server api', data => {
            setMessage(data);
        });
    }, []);
    
    
    
    
    
    //event listener for submit
    const handleSubmit = (e) => {
        //nothing will happen if message field is blank
        e.preventDefault();
    }
    
    return (
    <div className='chatbox'>
        <div className="App">
            <form onSubmit={handleSubmit}></form>
            <button onClick={handleSend}>Send</button>

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
    )
}

