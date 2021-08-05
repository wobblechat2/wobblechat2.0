import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';
import useChat from "./useChat";
import MessageService from '../service/messageService';

// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const QuestionCard = ({ id, title, description, url, creator, isOpen }) => {
  
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  
  const [clickChat, setClickChat] = useState(false);
  const [dbMessages, setDbMessages] = useState('');

  // new states?
  // const [numPeople, setNumPeople] = useState(0);
  // const [active, setActive] = useState(false);

  const openChat = async () => {
    if (clickChat) return  setClickChat(false);
    else {
      const result = await MessageService.getMessage(`/api/messages/${id}`);
      console.log('result of getMessage in QCard.jsx =', result);      // setDbMessages
      console.log('--------------------------------------------');
      setDbMessages(result);
      console.log('result of dbMessages state after get request =', dbMessages);
      console.log('--------------------------------------------');

      /* 
      setNumPeople(numPeople+1);
      setActive( () => {
         if (numPeople > 0) return true;
      })
      */
      
      setClickChat(true);
    }
  }

  // render logic to add:
  // if numPeople = 0, no bubbles filled in participant
  // if numPeople = 1, 1 bubble filled
  // if numPeople = 2, 2 bubble filled

  // if active = true, change background of question card div

  return (
    <>
      <div className="questionCard">
        <div className="questions">
          <p className="question_title">{title}</p>
          <button className='Qcard_button' onClick={() => openChat()}>Join chat</button>
        </div>
        <div className='divider'></div>
      </div>
      {clickChat && <Chat roomId={id} setClickChat={() => setClickChat(false)} id={id} dbMessages={dbMessages} title={title}/>}
      {/* {clickChat && <Chat roomId={id} setClickChat={() => setClickChat(false)} id={id} dbMessages={dbMessages} title={title} setNumPeople={setNumPeople} />} */}
    </>
  );
};

export default QuestionCard;
