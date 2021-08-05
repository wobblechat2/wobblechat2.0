const express = require('express');
const messageController = require('../controllers/message.js');
const router = express.Router();

// router
//   .get('/', messageController.getConversationByRoomId)
//   // .post('/initiate', messageController.initiate)
//   .post('/:roomId/message', messageController.postMessage);

// create new message where body comes from websocket
router.post('/', messageController.postMessage, (req, res) => {
  return res.status(200).json(res.locals.newMessage);
});

router.get('/:id', messageController.getMessages, (req, res) => {
  console.log('we finished messageController get Message');
  return res.status(200).json(res.locals.dbMessages);
});

module.exports = router;
