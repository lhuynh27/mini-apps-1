const express = require('express')
const server = express()

server.listen(3000, () => console.log('3000 Ready To Go!'))

server.get('/Main', function (req, res) {
  res.send('GET Working')
})

server.post('/Main', function (req, res) {
  res.send('POST Working')
})