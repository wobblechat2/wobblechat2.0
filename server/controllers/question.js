const fetch = require('node-fetch'); 
const fs = require('fs');
const path = require('path'); 
const db = require('../db/setup.sql')
// ------> do I need to require the setup sql file?

const questionController = {};

//getQuestions should return an array of Questions
questionController.getQuestions = (req, res, next) => {
  const questionQuery = 'select id,title,description,url from questions where isAnswered = false'
  db
    .query(questionQuery)
    .then(questions => {
      res.locals.questions = questions.rows;
      return next();
    })
    .catch(err => {
      return next({
          status: 500,
          message: "Error querying Questions",
          error: err
      });
    })
  return next();
}

//postQuestion should create a Question and next() will call openChat
questionController.postQuestion = (req, res, next) => {
  // ----> url come from websockets
  //userid comes from user controller (prev step in create question). 
  const [url, title, description, userId] = req.body;
  const insertQuestion = 'INSERT INTO questions VALUES url,title,description,userId RETURNING *'
  if(!url || !title || !description || !userId)
    return next({status: 401, message: "Invalid question data"})
  db
    .query(insertQuestion)
    .then(newQuestion => {
      res.locals.newQuestion = newQuestion;
    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error creating Questions",
        error: err
      })
    })
  return next();
}

//openChat should... send a req to Websockets? 
//gets details from messages
//puts details into question
questionController.getMessages = (req, res, next) => {
  //needs to pull existing Messages related to Questions (join tables)
  const prevMessages = `SELECT * FROM messages LEFT JOIN questions WHERE questions.id = ${req.params.id}`

  db
    .query(prevMessages)
    .then(messages => {
      if(!messages) return next();
      res.locals.messages = messages;
    })
    .catch(err => {
      return next({
        status: 500,
        message: "Error grabbing messages",
        error: err
      })
    })
  return next();
}
  
  //isActive is true ------> is this a put? 
questionController.putQuestion = (req, res, next) => {
  return next();
}

//closeChat should... put isActive to false

questionController.putChat = (req, res, next) => {
  return next();
}

//isAnswered should update (put) isAnswered field to True
questionController.putAnswered = (req, res, next) => {
  return next();
}