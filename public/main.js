//client


console.log("is this linked?")



//wrap everything up in a jquery onload function
$(function(){
	//the socket var instantiates a connection event which we can listen to
	var socket = io();
	//add jquery eventlistener to our button
	$("button").on("click", function(){

		//jquery to get the input...
		var input = $("#demo-form").val();
		//reset input field
		$("#demo-form").val("");
		//we call emit on the socket event, and pass two things
		//the first is the name of the event we want to send over
		//(the server will be listening for that event name) then 
		//we pass a hash with the data we actually want to send
		socket.emit("chatsent",{message: input})
		//to sum up, in the callback, we take the value of the text input,
		//append it to the dom, reset the input, then `emit` the value
		//of the input up the socket where a listener is waiting for it in the server
	})

	//here we listen for what we defined as the chatupdate event in the server
	socket.on("chatupdate", function(data){
		//grab data from event sent  (emited) down through the pipe,
		//append it
		var $li = $("<li>").text(data.update);
		$('ul').append($li);
	})




})