const mysql = require('mysql');
const connection = mysql.createConnection({
  user: 'student',
  password: '',
  database: 'checkout'
});

connection.connect();
module.exports = connection;