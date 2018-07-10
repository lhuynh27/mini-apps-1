const express = require('express');
const server = express();

//serve static assets
//create server
server.use(express.static('client'))
server.listen(3000, () => console.log('On port 3000 right meowww...'))

//app-level middleware
server.get('/HD', (req, res) => { 
	res.send('HALLLLPPPP DESKKKK HAS ARRIVED')
	//next()
})

server.post('/HD', (req, res) => {
	res.send('CAAAALLLINGG HALLLLPPPP DESKKKK')
	//next()
})