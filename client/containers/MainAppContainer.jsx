import React, { Component, useState, useEffect } from "react"; // ---> import useState, useEffect
import { Link } from "react-router-dom";
import { set } from "js-cookie";

import QuestionsContainer from "./QuestionsContainer";
import CreateQuestionForm from "../components/CreateQuestionForm";
import Chat from "../components/Chat";


const MainAppContainer = () => {
  const [questionBool, setQuestionBool] = useState(true);
  const [fetchedData, setFetchedData] = useState(false);
  const [questions, setQuestions] = useState([]);

  // second argument if empty bracket = same as componentDidMount
  // second argument if bracket with key of state = whenever that specific state changes
  // if no second argument, run it only first time
  useEffect (() => {
    fetch("/api/questions")
    .then((res) => res.json())
    .then((questionData) => {
      if (!Array.isArray(questionData)) questionData = [];
      setFetchedData(true);
      setQuestions(questionData);
    })
    .catch((err) =>
      console.log(
        "MainAppContainer.componentDidMount has error when making fetch request for questionsData: ERROR: ",
        err
      )
    );
  }, [])

  // ask about what this one is doing ******
  // componentWillUnmount() {
  //   // fix Warning: Can't perform a React state update on an unmounted component
  //   this.setState = (state, callback) => {
  //     return;
  //   };
  // }

  useEffect (() => {
    if (!fetchedData)
    return (
      <div>
        <h2>Loading data, please wait...</h2>
      </div>
    );
  }, [fetchedData])

  
  useEffect (() => {
    if (!questions) return null;
    if (!questions.length) {
      // console.log(this.state);
      return <div>Sorry, no questions to display</div>;
    }
  }, [questions]) 

  // you can pass down setFetchedData
  const callback = () => {
    setFetchedData(false);
  }


  return (
    <div className="mainContainer">

      <div className="top-menu-container">
        <Link to={"/"} className="brandname">
          Wobblechat
        </Link>
        <div>
          <Link to={"/create"}>
            <button type='button' className='buttons'>Ask a question</button>
          </Link>
          &nbsp;&nbsp;
          <Link to={"/logout"}>
            <button type='button' className='buttons'>Sign out</button>
          </Link>
        </div>
      </div>

      <div className='questionCreate'>
        <CreateQuestionForm changeFetched={callback}/>
      </div>

      <div className='questionContainer'>
        <QuestionsContainer questions={questions} />
      </div>

      <div className="chatContainer">
        <Chat roomId={1}/>
      </div>        

    </div>
  );
}

export default MainAppContainer;


// class MainAppContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       questionBool: true,
//       fetchedData: false,
//       questions: [],
//     };
//   }

//   componentDidMount() {
//     fetch("/api/questions")
//       .then((res) => res.json())
//       .then((questionData) => {
//         if (!Array.isArray(questionData)) questionData = [];
//         this.setState({ fetchedData: true, questions: questionData });
//       })
//       .catch((err) =>
//         console.log(
//           "MainAppContainer.componentDidMount has error when making fetch request for questionsData: ERROR: ",
//           err
//         )
//       );
//   }

//   componentWillUnmount() {
//     // fix Warning: Can't perform a React state update on an unmounted component
//     this.setState = (state, callback) => {
//       return;
//     };
//   }

//   render() {
//     if (!this.state.fetchedData)
//       return (
//         <div>
//           <h2>Loading data, please wait...</h2>
//         </div>
//       );

//     const { questions } = this.state;
//     //if fetch request retrieved nothing, there is nothing to display
//     if (!questions) return null;
//     if (!questions.length) {
//       // console.log(this.state);
//       return <div>Sorry, no questions to display</div>;
//     }

//     return (
//       <>
//         <div className="top-menu-container">
//           <Link to={"/"} className="brandname">
//             Wobblechat
//           </Link>
//           <div>
//             <Link to={"/create"}>
//               <Button variant="primary">Ask a question</Button>
//             </Link>
//             &nbsp;&nbsp;
//             <Link to={"/logout"}>
//               <Button variant="secondary">Sign out</Button>
//             </Link>
//           </div>
//         </div>

//         <Card className="chat-style">
//           <Chat />
//         </Card>
//         <br />

//         <QuestionsContainer questions={this.state.questions} />
//         <CreateQuestionForm />
//       </>
//     );
//   }
// }