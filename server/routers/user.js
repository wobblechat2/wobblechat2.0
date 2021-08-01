const { Router } = require("express");
const userController = require("../controllers/user");

const userRouter = Router();

userRouter.post("/signup", userController.createUser, (req, res, next) => {
  res.status(200).send({ id: res.locals.id });
});

module.exports = userRouter;