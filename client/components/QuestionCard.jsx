import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';
import useChat from "./useChat";
import MessageService from '../service/messageService';

// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const QuestionCard = ({ id, title, description, url, creator, isOpen }) => {
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  // const { id, title, description, url, creator, isOpen } = props;
  
  const [clickChat, setClickChat] = useState(false);
  const [dbMessages, setDbMessages] = useState('');

  const openChat = async () => {
    if (clickChat) return  setClickChat(false);
    else {
      const result = await MessageService.getMessage(`/api/messages/${id}`);
      console.log('result of getMessage in QCard.jsx =', result);      // setDbMessages
      console.log('--------------------------------------------');
      setDbMessages(result);
      console.log('result of dbMessages state after get request =', dbMessages);
      console.log('--------------------------------------------');

      
      setClickChat(true);
    }
  }

  // axios to get from database
  // put the result from database into variable: dbMessages

  return (
    <>
      <div className="questionCard">
        <div className="questions">
          <p className="question_title">{title}</p>
          <button className='Qcard_button' onClick={() => openChat()}>Join chat</button>
        </div>
        <div className='divider'></div>
      </div>
      {clickChat && <Chat roomId={id} setClickChat={() => setClickChat(false)} id={id} dbMessages={dbMessages}/>}
    </>
  );
};

export default QuestionCard;
