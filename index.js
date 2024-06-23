const express = require('express')//this is a basic http server in expressjs
const port = 3000
const app=express();

app.get('/', function(req, res){
  res.send('Hello World!')
})

app.listen(port)