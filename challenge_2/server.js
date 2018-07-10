const express = require('express');
const server = express();
const bodyParser = require('body-parser')

//serve static assets
//create server
server.use(express.static('client'))

//app-level middleware
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(bodyParser.urlencoded({ extended: false }));

server.post('/HD', (req, res) => {
	//console.log(req.body, "It is running through");
	//console.log(typeof req.body); //object but input is the value

	var parsedObj = JSON.parse(req.body.key) //turns string to object
	//console.log(JSON.parse(req.body.key));
	var flattenData = []; 
	var columnTitle = [];
	var objValues = [];
	for(var key in parsedObj){
		columnTitle.push(key);
	}
	flattenData.push(columnTitle);

	// var values = () => {
	// 	for(var key in parsedObj){
	// 	objValues.push(parsedObj[key]);
	// 	}
	// 	flattenData.push(objValues);
	// }

	// if(parsedObj["children"]){
	// 	for(var i = 0; i < parsedObj["children"].length; i++){
	// 		values(parsedObj["children"][i]);
	// 	}
	// }

	res.send('Successful!')
})

server.listen(3000, () => console.log('On port 3000 right meowww...'))