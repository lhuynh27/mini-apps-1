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
	try {
		var parsedObj = JSON.parse(req.body.key) //turns string to object
		//console.log(JSON.parse(req.body.key));
	} catch(e) {
		//console.log(e)
		res.send('ERR: INVALID JSON');
	}

	let flattenData = []; 
	let columnTitle = [];
	for(var key in parsedObj){
		if(key !== 'children') columnTitle.push(key);
	}
	flattenData.push(columnTitle);

	let helpFunc = (node) => {
		let stack = [];
		for(let i = node.children.length -1; i >= 0; i--){
			stack.push(node.children[i]);
		}
		var row = [];
		for(var j = 0; j < columnTitle.length; j++){
			row.push(node[columnTitle[j]]);
		}	
		flattenData.push(row);
		while(stack.length !== 0){
			helpFunc(stack.pop());
		}
	}
	helpFunc(parsedObj);	

	res.send(JSON.stringify(flattenData));
})

server.listen(3000, () => console.log('On port 3000 right meowww...'))