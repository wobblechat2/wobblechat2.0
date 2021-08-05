const express = require('express');
const path = require('path');
const oAuthRouter = express.Router();
const loggedInController = require('../controllers/loggedIn.js');
const cookieController = require('../controllers/cookie.js');



//Protected and unprotected routes
oAuthRouter.get('/failed', (req, res) => res.redirect('http://localhost:8080/login'));

// In this route you can see that if the user is logged in u can acess his info in: req.user
oAuthRouter.get('/good', loggedInController.check, cookieController.setCookies, (req, res) =>  {
    console.log('user:', req.user);
    res.redirect('http://localhost:8080/');
});
 
//Logout endpoint
oAuthRouter.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/api');
  });

module.exports = oAuthRouter;