import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const QuestionCard = ({ id, title, description, url, creator, isOpen }) => {
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  // const { id, title, description, url, creator, isOpen } = props;

  return (
    <div className="questionCard">
      <p>{title}</p>
      <button type='button' className='buttons'>Join chat</button>
    </div>
  );
};

export default QuestionCard;
