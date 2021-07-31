const express = require('express');
const questionController = require('../controllers/question.js');
const router = express.Router();

//call controller methods for each type of request to endpoints

router.get('/', questionController.getQuestions, (req,res) => {
  return res.status(200).json(res.locals.questions);
})

router.post('/', userController.getId, questionController.postQuestion, questionController.openChat, (req,res) => {
  return res.status(200);
})

router.get('/question/:id', questionController.getMessages, questionController.putMessages, (req,res) => {
  return res.status(200).json(res.locals.chatId);
})

router.get('/question/:id', questionController.closeChat, (req,res) => {
  return res.status(200).json(res.locals.chatId);
})

router.put('/questions/:id', questionController.isAnswered, (req,res) => {
  return res.status(200);  /// <------- tbd
})