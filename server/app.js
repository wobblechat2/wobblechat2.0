const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');

//import routers
const debugRouter = require('./routers/debug.js');
const userRouter = require('./routers/user.js');
const globalErrorHandler = require('./routers/errors');
const questionRouter = require('./routers/question.js');
const messageRouter = require('./routers/message.js');
const { Server } = require('socket.io');

//parsing request body
app.use(express.json());
app.use(cors());
app.use(cookieParser());
if (process.env.NODE_ENV === 'development') app.use(debugRouter);

app.get('/api/hello', (req, res) => {
  res.status(200).json({ hello: 'world' });
});

app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/messages", messageRouter);
// //route handler for main page
// app.get('/', (req,res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

app.use(globalErrorHandler); // Added global error middlware

// need to save the server from app.listen for socket io
const server = app.listen(3000, () => {
  console.log('Express server listening on port 3000.');
});

// Since we use app.listen, and get the result to server variable, we will declare socket here.
const socketIO = new Server(server, {
  cors: {
    origin: "*",
<<<<<<< HEAD
  },
=======
  }
>>>>>>> d927adfb838d62655e9c57d1b1ebc248e8e25034
});
// { cors: { origin: '*' } }

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

socketIO.on('connection', (socket) => {
  // console.log('Client is here!');
  // socketIO.emit('chatroom1', 'hi');
  // socketIO.emit('chatroom1', 'Hello');
<<<<<<< HEAD
  
  // const { roomId } = socket.handshake.query;
  socket.join(1);
  // listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    socketIO.in(1).emit(NEW_CHAT_MESSAGE_EVENT, data);
    socketIO.in(1).emit('1', 'check 1 room');
  });
  
  // leave room if user closes socket
  socket.on('disconnect', () => {
    socket.leave(1);
  });
=======
  const { roomId } =socket.handshake.query;
  socket.join(1);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    socketIO.in(1).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on('disconnect', () => {
    socket.leave(1);
  });

>>>>>>> d927adfb838d62655e9c57d1b1ebc248e8e25034
});
