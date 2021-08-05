import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const QuestionCard = ({ id, title, description, url, creator, isOpen }) => {
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  // const { id, title, description, url, creator, isOpen } = props;
  const [clickChat, setClickChat] = useState(false);

  const openChat = () => {
    if (!clickChat) return setClickChat(true);
    setClickChat(false);
  }
  return (
    <>
      <div className="questionCard">
        <div className="questions">
          <p className="question_title">{title}</p>
          <button className='Qcard_button' onClick={() => openChat()}>Join chat</button>
        </div>
        <div className='divider'></div>
      </div>
      {clickChat && <Chat roomId={id} setClickChat={() => setClickChat(false)}/>}
    </>
  );
};

export default QuestionCard;
