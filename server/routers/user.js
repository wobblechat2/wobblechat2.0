const { Router } = require("express");
const userController = require("../controllers/user");

const userRouter = Router();

userRouter.get("/signup", userController.createUser, (req, res, next) => {
  console.log(res.locals);
  res.status(200).send({ id: res.locals.id });
});

module.exports = userRouter;
