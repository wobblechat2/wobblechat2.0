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
    .catch(err => next(err));
}

//postQuestion should create a Question
questionController.postQuestion = (req, res, next) => {
    const 
}

//openChat should... send a req to Websockets? 
    //needs pull existing Messages related to Questions (join tables)
    //isActive is true ------> is this a put? 

//closeChat should... put isActive to false

//isAnswered should update (put) isAnswered field to True