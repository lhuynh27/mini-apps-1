const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost:3000'
  user: 'student',
  password: 'student',
  database: 'checkout'
});

connection.query((err, data) => {
  if (err){
    console.log('Error Connecting with mySQL and Express')
  } else {
    console.log('Successful Connection with mySQL and Express');
  }
})

connection.connect();
module.exports = connection;