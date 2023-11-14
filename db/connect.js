const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "locab54jmicytyrxx8ffsgh7-mysql.services.clever-cloud.comlhost",
  user: "uu0shkcv0fhudwr0",
  password: "ws9dTZJCgFM17KIDoDiv",
  database: "b54jmicytyrxx8ffsgh7", 
});

module.exports = mysqlConnection;
