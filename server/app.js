const express = require("express");
const app = express();
const debugRouter = require("./routers/debug");

if (process.env.NODE_ENV === "development") app.use(debugRouter);

app.get("/api/hello", (req, res) => {
  res.status(200).json({ hello: "world" });
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000.");
});
