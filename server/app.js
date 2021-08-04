const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
require('./OAuth.js');
const cookieSession = require('cookie-session');

//import routers
const debugRouter = require('./routers/debug.js');
const userRouter = require('./routers/user.js');
const globalErrorHandler = require('./routers/errors');
const questionRouter = require('./routers/question.js');
const messageRouter = require('./routers/message.js');
const { Server } = require('socket.io');
const oAuthRouter = require('./routers/oAuthLogin.js');

//parsing request body
app.use(express.json());
app.use(cors());
app.use(cookieParser());
if (process.env.NODE_ENV === 'development') app.use(debugRouter);

// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
  name: 'wobbleChat-session',
  keys: ['key1', 'key2'],
  expires: new Date(Date.now() + 1200000),
}));

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

//Route Handler
app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/messages", messageRouter);
app.use("/", oAuthRouter);

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['openid'] }));
app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  }
);

// Added global error middlware
app.use(globalErrorHandler); 

// need to save the server from app.listen for socket io
const server = app.listen(3000, () => {
  console.log('Express server listening on port 3000.');
});

// Since we use app.listen, and get the result to server variable, we will declare socket here.
const socketIO = new Server(server, {
  cors: {
    origin: "*",
  }
});
// { cors: { origin: '*' } }

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

socketIO.on('connection', (socket) => {
  // console.log('Client is here!');
  // socketIO.emit('chatroom1', 'hi');
  // socketIO.emit('chatroom1', 'Hello');
  const { roomId } =socket.handshake.query;
  socket.join(1);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    socketIO.in(1).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on('disconnect', () => {
    socket.leave(1);
  });

});
