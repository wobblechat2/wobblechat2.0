import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import CastleCard from './CastleCard';
// import DetailsModal from './DetailsModal';
import QuestionsContainer from './QuestionsContainer';

class MainAppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //has data been retrieved from the backend yet?
      fetchedData: false,
      //question data, an array of question objects 
      questions: [],
    };
}

  componentDidMount() {
 
    // //retrieving question data from db via express
    // fetch('/api/questions') 
    //   .then(res => res.json())
    //   .then((questionData) => {
    //     //input validation
    //     if (!Array.isArray(questionData)) questionData = [];
    //     //update state with fetched data
    //     return this.setState({
    //       questions: questionData,
    //       fetchedData: true
    //     });
    //   })
    //   .catch(err => console.log('MainAppContainer.componentDidMount has error when making fetch request for questionsData: ERROR: ', err));
    
  const dummyQuestionData = [
    {
      questionId: 1,
      isActive: true,
      title: 'why is the sky blue?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      chatURL: 'http://www.yourchat.com?id=56'
   },
   {
    questionId: 2,
    isActive: true,
    title: 'where do babies come from?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    chatURL: 'http://www.yourchat.com?id=56'
  },
   {
    questionId: 3,
    isActive: false,
    title: 'how does react work?',
    description: 'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor.',
    chatURL: 'http://www.yourchat.com?id=56'
  }
  ];
   
  this.setState({
    questions: dummyQuestionData,
    fetchedData: true
  })



}

  render() {
    if (!this.state.fetchedData) return (
      <div>
        <h2>Loading data, please wait...</h2>
      </div>
    );

    const { questions } = this.state;
    //if fetch request retrieved nothing, there is nothing to display
    if (!questions) return null;
    if (!questions.length) return (
      <div>Sorry, no questions to display</div>
    );

    return (
<div>
<Link to={'/signout'}><button type="button"> Sign out </button></Link>
<QuestionsContainer  questions={this.state.questions} />
</div>          

)
  }
}

export default MainAppContainer;
