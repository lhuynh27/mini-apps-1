const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'checkout'
});

connection.query('Select * from f1', (err, data) => {
  if (err){
    console.log('Error Connecting with mySQL and Express', err)
  } else {
    console.log('Successful Connection with mySQL and Express');
    console.log(data);
  }
})

module.exports = connection;