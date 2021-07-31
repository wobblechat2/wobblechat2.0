import { Pool } from "pg";

// Connect to our database and assign the result of that connection to a new object
// Then export that object so that we can make queries to our DB.
// This object is used inside of our controllers.
const uri = "";
const pool = new Pool({
  connectionString: uri,
});

export default pool;
