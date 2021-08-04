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
const socketIO = new Server(server);
// { cors: { origin: '*' } }

socketIO.on('connection', (socket) => {
  console.log('Client is here!');
  socketIO.emit('chatroom1', 'hi');
  socketIO.emit('chatroom1', 'Hello');
});
