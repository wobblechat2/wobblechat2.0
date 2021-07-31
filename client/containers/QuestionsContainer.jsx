import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

const QuestionsContainer = ({ questions }) => {
  //questions object passed down as prop from MainAppContainer
  //  const [{ questionId, isActive, title, description, chatURL }] = questions;

  const questionObjects = questions.map(
    ({ questionId, isActive, title, description, chatURL }, i) => {
      return (
        <QuestionCard
          key={i}
          questionId={questionId}
          title={title}
          description={description}
          chatURL={chatURL}
        />
      );
    }
  );

  return (
    <div>
      ALL QUESTIONS (ACTIVE AND INACTIVE) <br />
      {/* {questions.map((question) => {
        return <div>{question.title}</div>;
      })} */}
      {questionObjects}
      ACTIVE QUESTIONS ONLY <br />
      <br />
      INACTIVE QUESTIONS ONLY <br />
    </div>
  );
};

export default QuestionsContainer;
