var express = require("express");
var app = express();

app.get('/', function(req, res){
 res.send('hello fucking world!!');
});

port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('The server is running and listening on port ' + port + '...');
});