var express = require('express');
var app = express();
var server = app.listen(3000)
// var server = require('http').Server(app);
var io = require('socket.io').listen(server);


app.use(express.static(__dirname + "/public"))



app.get("/", function (req, res){
	console.log(__dirname);
	//__dirname is a shortcut in express that automatically adds the current
	//absolute path as a string
	res.sendFile(__dirname + "/views/index.html");
})




io.on("connection", function(socket){
	console.log("client has connected")
	//set a listener on the socket, it's listening for the event
	//that we named earlier
	socket.on("chatsent", function(data){
		console.log(data.message);
		//we refer to io here because we required it above
		io.emit("chatupdate", {update: data.message})
	})
})

