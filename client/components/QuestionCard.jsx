import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const QuestionCard = (props) => {
  //props from QuestionsContainer get assigned to each instance of QuestionCard
  const { questionId, isActive, title, description, chatURL } = props;

  return (
    <div>
      QuestionID: {questionId} <br />
      IsActive: {isActive} <br />
      Title: {title} <br />
      Description: {description} <br />
      ChatURL: {chatURL} <br />
    </div>
  );
};

export default QuestionCard;
