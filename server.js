/////Server/////



//require express
var express = require('express');
// invoke express, assign to app variable
var app = express();
//create a server listening on 3000
var server = app.listen(3000)
// require socket io, have the 'pipe' listening on our server
var io = require('socket.io').listen(server);


//this line tells express to serve all static
//files from a given directory
//we use __dirname to refer to the current directory
//as an absolute path, then concatenate whatever
//folder we want to serve assets from onto it
app.use(express.static(__dirname + "/public"))


//express syntax. call the get method on the app object
//two arguments are a route and a callback that takes request and response arguments
app.get("/", function (req, res){
	//call sendFile on the response, send out our index.html
	//using the dirname thing from above. express wants
	//an absolute path again, so it goes....
	res.sendFile(__dirname + "/views/index.html");
})




	//our socket io instance listens for a connection event, we pass an argument
	//into the callback called 'socket'
	//think of it as 'everytime someone connects to the server, create a pipe/connection'
io.on("connection", function(socket){
	console.log("client has connected")
	//set a listener on the socket, it's listening for the event
	//that we named earlier in the client
	//when 'chatsent' happens, execute the callback, passing in the data
	//that we define in chatsent itself
	socket.on("chatsent", function(data){
		console.log(data.message);
		//we refer to io here because we required it above and named it as such
		//we call `emit` on io. we create a chatupdate event to be sent down to the client, and pass a hash with the
		//data inside
		io.emit("chatupdate", {update: data.message})
	})
})

//basically we create a socket/pipe. The socket is both listening for an event that
//we define (in this case 'chatsent') and emiting what an event we also define(chatupdate)

