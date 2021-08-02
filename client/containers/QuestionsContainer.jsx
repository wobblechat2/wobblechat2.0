import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

const QuestionsContainer = ({ questions }) => {
  //questions object passed down as prop from MainAppContainer
  //  const [{ questionId, isActive, title, description, chatURL }] = questions;



  const activeQuestionObjects = questions.filter(question => question.isOpen === true).map(
    ({ id, title, description, url, creator }) => {
      return (
        <QuestionCard
          key={id}
          title={title}
          description={description}
          creator={creator}
          chatURL={url}
        />
      );
    }
  );

  const inactiveQuestionObjects = questions.filter(question => question.isOpen === false).map(
    ({ id, title, description, url, creator }) => {
      return (
        <QuestionCard
        key={id}
        title={title}
        description={description}
        creator={creator}
        chatURL={url}
      />
      );
    }
  );

  return (
    <div className="question-window">
      <h2>
      Active questions </h2>
      {activeQuestionObjects}
<br />
      <h2>
      Inactive questions </h2>
      {inactiveQuestionObjects}


    </div>
  );
};

export default QuestionsContainer;
