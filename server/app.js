const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("This is from express");
});

app.listen(3001, () => {
  console.log("Express server listening on port 3000.");
});
