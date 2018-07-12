const express = require('express')
const server = express()

server.use(express.static('public'))

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.post('/Main', function (req, res) {
  
  res.send('POST Working')
})

server.listen(3000, () => console.log('3000 Ready To Go!'))