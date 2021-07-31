import { Router } from "express";

const globalDebugRouter = Router();

const globalDebugHandler = (req, _res, next) => {
  console.log("\n\n");
  console.log("REQUEST URL: ", req.url);
  console.log("REQUEST METHOD: ", req.method);
  console.log("REQUEST BODY:", req.body);
  console.log("REQUEST HEADERS: ", req.headers);
  console.log("COOKIES ARE", req.cookies);
  return next();
};

globalDebugRouter.use(globalDebugHandler);

export default globalDebugRouter;
