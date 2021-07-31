const bcrypt = require("bcryptjs");
const pool = require("../db/connect");
const userController = {};

userController.createUser = async (req, res, next) => {
  // Get username and password from body of POST request
  const { username, password } = req.body;
  if (!username || !password)
    return next({
      status: 401,
      message: "Invalid username or password.",
      error: new Error("No username or password."),
    });

  // Create hashed version of password.
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Save user to PostgreSQL database, using parameterized queries.
  try {
    const params = [username, hashedPassword];
    const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`;
    const { rows } = await pool.query(query, params);
    res.locals.id = rows[0].id; // Assign "ID" of created user to res.locals.id, so that our anonymous function in the router can pass it back to the user.
  } catch (err) {
    console.log(err);
    return next({
      status: 500,
      message: "Could not save username and password.",
      error: err,
    });
  }

  // Move to the next middleware after insertion is complete.
  return next();
};

module.exports = userController;
