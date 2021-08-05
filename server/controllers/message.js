const pool = require('../db/connect');

const messageController = {};

//openChat should... send a req to Websockets?
//gets details from messages
//puts details into question
messageController.getMessages = (req, res, next) => {
  //needs to pull existing Messages related to Questions (join tables)
  const prevMessages = `SELECT * FROM messages INNER JOIN questions ON messages.questionId = questions.id AND questions.id = $1`;
  // const prevMessages = `SELECT messages.*, questions.url FROM messages INNER JOIN questions ON messages.questionId = questions.id AND questions.id = $1`;

  const params = [req.params.id];
  pool
    .query(prevMessages, params)
    .then((data) => {
      // console.log('in getMessages MW, data =', data);
      console.log('in getMessages MW, data.rows =', data.rows);
      let sorted = data.rows.sort(function(a, b) {
        return a.num - b.num;
      })
      console.log('--------------------------------------------');
      console.log('--------------------------------------------');
      console.log('--------------------------------------------');
      console.log('check if sorted =', sorted);
      console.log('--------------------------------------------');
      console.log('--------------------------------------------');
      console.log('--------------------------------------------');
      res.locals.dbMessages = sorted;
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
   
  const insertMessage = 'INSERT INTO messages (datecreated, questionid, body, senderid, ownedbycurrentuser, num) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *';
  // const insertMessage = 'INSERT INTO messages (questionid, content, dateCreated) VALUES ($1,$2,$3) RETURNING *';
  const { id } = req.params;

  console.log('id in postMessage MW =', id);
  console.log('req.body array of objects in postMessage MW =', req.body);
  console.log('--------------------------------------------');
  console.log('--------------------------------------------');

  const pushed = [];
  const lengthMsg = req.body.length - 1;
  let num = 0;
  for (let i = 0; i < req.body.length; i++) {
    const { body, senderid, ownedbycurrentuser } = req.body[i];
    // const params = [id, body, senderId, ownedByCurrentUser];
    const myDate = new Date(); 
    num = num + 1; 
    const params = [myDate, id, body, senderid, ownedbycurrentuser, num];
    (function (params, i, lengthMsg) {
      pool.query(insertMessage, params, function (err, rows, fields) {
        if (err) {
          console.log('error in query postMessage :', err);
        } else {
          console.log('rows inside postquery =', rows.rows[0]);
          pushed.push(rows.rows[0]); // ---> maybe rows0.someVal
        }
        if (i === lengthMsg) {
          // let sorted = pushed.sort(function(a, b) {
          //   return a.num - b.num;
          // })

          res.locals.postedMessages = pushed;
          return next();
        }
      });
    })(params, i, lengthMsg);
    // console.log('pushed array inside forloop :', pushed);
  }
  // console.log('pushed array outside forloop :', pushed);
  // res.locals.postedMessages = pushed;
  // return next();

  // pool
  // .query(insertMessage, params)
  // .then((newMessage) => {
  //   pushed.push(newMessage);
  // })
  // .catch((err) => {
  //   return next({
  //     status: 500,
  //     message: 'Error creating messages',
  //     error: err,
  //   });
  // });

  // res.locals.postedMessages = pushed;
  // return next();

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
