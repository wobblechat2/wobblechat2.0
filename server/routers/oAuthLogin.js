const express = require('express');
const oAuthRouter = express.Router();
const loggedInController = require('../controllers/loggedIn.js');
const path = require('path');


//Protected and unprotected routes
oAuthRouter.get('/', (req, res) => res.send('Example Home page!'));
oAuthRouter.get('/failed', (req, res) => res.send('You Failed to log in!'));

// In this route you can see that if the user is logged in u can acess his info in: req.user
oAuthRouter.get('/good', loggedInController.check, (req, res) => res.sendFile(path.join(__dirname, '../../client/containers/MainAppContainer.jsx')));

//Logout endpoint
oAuthRouter.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
  });

module.exports = oAuthRouter;