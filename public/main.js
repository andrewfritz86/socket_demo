console.log("is this linked?")

$(function(){
	//the socket var instantiates a connection event which we can listen to
	var socket = io();
	$("button").on("click", function(){


		var input = $("#demo-form").val();
		console.log(input);
		$("#demo-form").val("");
		//we call emit on the socket event, and pass two things
		//the first is the name of the event we want to send over
		//(the server will be listening for that event name) then 
		//we pass a hash with the data we actually want to send
		socket.emit("chatsent",{message: input})
	})

	//here we listen for what we defined as the chatupdate event in the server
	socket.on("chatupdate", function(data){
		console.log(data.update)
		var $li = $("<li>").text(data.update);
		$('ul').append($li);
	})




})