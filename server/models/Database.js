const mysql = require('mysql2');

// Database class
const database =  class Database {
  constructor(host, user, password, database) {
    this.pool = mysql.createPool({
          host: host,
            user: user,
            password: password,
            database: database,
        }).promise();
    }

  // Query function
  async userQuery(query) {
    try {
      const [rows] = await this.pool.query(query);
      return rows;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

