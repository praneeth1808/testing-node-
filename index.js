var express = require('express')
var app = express()
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('<h1>GET SENT</h1>')
})
app.post('/',function(req,res){
	res.send('<h1>Post Sent</h1>')
})
  
app.put('/', function (req, res) {
  res.send('<h1>PUT SENT</h1>')
})
app.delete('/',function(req,res){
	res.send('<h1>DELETE Sent</h1>')
})

app.listen(port,function(){
	console.log(`Example app listening on port !`)
})
