import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

const QuestionsContainer = ({ questions }) => {
  //questions object passed down as prop from MainAppContainer
  //  const [{ questionId, isActive, title, description, chatURL }] = questions;

  // console.log(questions);


  const activeQuestionObjects = questions.map(
    ({ id, title, description, url, creator, isopen }) => {
      // chrome dev tools is showing "isopen" as lowercase for some reason
      if(isopen){
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
    }
  );

  const inactiveQuestionObjects = questions.map(
    ({ id, title, description, url, creator, isopen }) => {
      // chrome dev tools is showing "isopen" as lowercase for some reason
      if(!isopen){
        return (
          <QuestionCard
            id={id}
            title={title}
            description={description}
            creator={creator}
            chatURL={url}
          />
        );
      }
    }
  );

  return (
    <div className='questionContainer'>
      <div className='activeQs'>
        <h2 className='question_type'> Active questions </h2>
        {activeQuestionObjects}
      </div>
      <div className='inactiveQs'>
        <h2 className='question_type'> Inactive questions </h2>
        {inactiveQuestionObjects}
      </div>
    </div>
  );
};

export default QuestionsContainer;
