const { Router } = require("express");
const userController = require("../controllers/user");
const cookieController = require("../controllers/cookie");

const userRouter = Router();

userRouter.post(
  "/signup",
  userController.createUser,
  cookieController.setCookie,
  (_req, res) => {
    res.status(200).send({ id: res.locals.id });
  }
);

userRouter.post(
  "/signin",
  userController.signInUser,
  cookieController.setCookie,
  (_req, res) => {
    res.status(200).send({ id: res.locals.id });
  }
);

// Eliminates cookie and sends user back to home page.
userRouter.post("/signout", userController.signOutUser, (req, res) => {
  console.log("COOKIES ARE NOW: ", req.cookies);
  res.status(200).send({ hello: "world" });
});

module.exports = userRouter;
