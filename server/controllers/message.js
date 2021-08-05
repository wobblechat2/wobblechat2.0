const pool = require('../db/connect');

const messageController = {};

//openChat should... send a req to Websockets?
//gets details from messages
//puts details into question
messageController.getMessages = (req, res, next) => {
  //needs to pull existing Messages related to Questions (join tables)
  const prevMessages = `SELECT messages.*, questions.url FROM messages INNER JOIN questions ON messages.questionId = questions.id AND questions.id = $1`;
  const params = [req.params.id];
  pool
    .query(prevMessages, params)
    .then((data) => {
      res.locals.dbMessages = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        status: 500,
        message: 'Error grabbing messages',
      });
    });
};

//postMessage should create a Message from the websockets call
messageController.postMessage = (req, res, next) => {
  // ------> added new *** 
  
  // const insertMessage query in the right order
  // const id = req.params.id to get the question ID
  // const pushed = []; to hold all the database posted messages

  // iterate through req.body
    // for each....
      // destructure { body, senderId, ownedByCurrentUser } = req.body[i]
      // set params [id, body, senderId, ownedByCurrentUser]
      // pool query(insertMessage, params) 
      // for each result, push to pushed
  
  // save the array of pushed messages to res.locals.postedMessage 
  // return next() to move to next middleware

  const insertMessage = 'INSERT INTO messages (questionId, body, senderId, ownedByCurrentUser) VALUES ($1,$2,$3,$4) RETURNING *';
  const { id } = req.params;
  const pushed = [];

  console.log('id in postMessage MW =', id);
  console.log('req.body array of objects in postMessage MW =', req.body);
  console.log('--------------------------------------------');
  console.log('--------------------------------------------');

  for (let i = 0; i < req.body.length; i++) {
    const { body, senderId, ownedByCurrentUser } = req.body[i];
    const params = [id, body, senderId, ownedByCurrentUser];
    pool 
      .query(insertMessage, params)
      .then((newMessage) => {
        pushed.push(newMessage);
      })
      .catch((err) => {
        return next({
          status: 500,
          message: 'Error creating messages',
          error: err,
        });
      });
  }

  res.locals.postedMessages = pushed;
  return next();

  // --> what was here before
  // const dateCreated = '1/1/1990';
  // const questionId = '1';
  // const content = 'test';
  // const params = [dateCreated, questionId, content];
  // const insertMessage = 'INSERT INTO messages (dateCreated, questionId, content) VALUES ($1,$2,$3) RETURNING *';
  // if (!dateCreated || !questionId || !content) return next({ status: 401, message: 'Invalid message data' });
  // pool
  //   .query(insertMessage, params)
  //   .then((newMessage) => {
  //     // console.log(newMessage);
  //     res.locals.newMessage = newMessage;
  //   })
  //   .catch((err) => {
  //     return next({
  //       status: 500,
  //       message: 'Error creating messages',
  //       error: err,
  //     });
  //   });
  // return next();
};

module.exports = messageController;
