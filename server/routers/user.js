const { Router } = require("express");
const userController = require("../controllers/user");

const userRouter = Router();

router.get("/signup", userController.createUser, (req, res, next) => {
  res.status(200).send({ id: res.locals.id });
});

const login = (req, res, next) => {
  // Accept username and password from the POST to /users/login and check against stored value
  // If valid, set cookie and return 200
  // If invalid, return 403 error
  return next();
};

const logout = (req, res, next) => {
  // Destroy cookie on the user's browser, send 200 status
  return next();
};

userRouter.use(login);
module.exports = login;
