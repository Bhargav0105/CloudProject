const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clg-testdb", 
});

module.exports = mysqlConnection;
