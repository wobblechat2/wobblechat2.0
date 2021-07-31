const bcrypt = require("bcryptjs");
const pool = require("../db/connect");
const userController = {};

userController.createUser = async (req, _res, next) => {
  // Get username and password from body of POST request
  const { username, password } = req.body;
  if (!username || !password)
    return next({ status: 401, message: "Invalid username or password." });
  let salt, hashedPassword;
  // Create hashed version of password.
  try {
    salt = await bcrypt.getSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
  } catch (err) {
    return next({
      status: 500,
      message: "Error generating username and password.",
    });
  }
  // Save user to PostgreSQL database, using parameterized queries.
  try {
    const params = [username, hashedPassword];
    const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`;
    const { rows } = await pool.query(query, params);
    res.locals.id = rows[0].id; // Assign "ID" of created user to res.locals.id, so that our anonymous function in the router can pass it back to the user.
  } catch (err) {
    return next({
      status: 500,
      message: "Could not save username and password.",
    });
  }

  // Move to the next middleware after insertion is complete.
  return next();
};

export default userController;
