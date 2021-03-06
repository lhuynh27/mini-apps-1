const express = require('express')
const server = express()
const connection = require('./database/index.js');
const bodyParser = require('body-parser');

server.use(express.static('public'))

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(bodyParser.text({type:"*/*"}))

server.post('/', function (req, res) {
	console.log(req.body, 'THIS THING')
	res.send('Data Sent to Database')
})

server.listen(3000, () => console.log('3000 Ready To Go!'))