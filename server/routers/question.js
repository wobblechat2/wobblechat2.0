const express = require('express');
const questionController = require('../controllers/question.js');
const router = express.Router();

//call controller methods for each type of request to endpoints

//get all questions to render main page
router.get('/', questionController.getQuestions, (req,res) => {
  return res.status(200).json(res.locals.questions);
})

//create new question ----> 
router.post('/', questionController.postQuestion, questionController.getQuestions, (req,res) => {
  return res.status(200).json({
    newQuestion: res.locals.questions[0].url,
    questions: res.locals.questions,
  });
})

//get all messages when user re-enters a previous chat
router.get('/messages/:id', /* join chat */ questionController.getMessages, /*questionController.putMessages,*/ (req,res) => {
  return res.status(200).json(res.locals.messages);
})

// ------> upon Login, a user's chat need to be set to Active and automatically join window
// -------> on logout, user's chat needs to be Inactive

// --------> openChat
// -------> once a user clicks a question to open chat, 
// --------> the question Creator's chat window needs to be opened
// --------> if a user has an open chat, user cannot click other questions

// -------> messages need a Creator relationship

// -------> close chat should create a message "<user> has left the chat"
// --------> and set isActve to false
// router.post('/message/:id', questionController.closeChat, (req,res) => {
//   return res.status(200).json(res.locals.chatId);
// })

// set question to isAnswered = true
router.put('/:id', questionController.putAnswered, (req,res) => {
  return res.status(200).json(res.locals.id);  /// <------- tbd
})


module.exports = router;