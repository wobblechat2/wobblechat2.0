const express = require('express');
const messageController = require('../controllers/message.js');
const router = express.Router();

// router
//   .get('/', messageController.getConversationByRoomId)
//   // .post('/initiate', messageController.initiate)
//   .post('/:roomId/message', messageController.postMessage);

// create new message where body comes from websocket
router.get('/:id', messageController.getMessages, (req, res) => {
  console.log('finished messageController getMessage');
  console.log('res.locals.dbmessages = ', res.locals.dbMessages);
  console.log('--------------------------------------------');
  console.log('--------------------------------------------');
  return res.status(200).json(res.locals.dbMessages);
});

router.post('/:id', messageController.postMessage, (req, res) => {
  console.log('finished messageController postMessage');
  console.log('res.locals.postedMessages = ', res.locals.postedMessages);
  console.log('--------------------------------------------');
  console.log('--------------------------------------------');
  return res.status(200).json(res.locals.postedMessages);
});

module.exports = router;
