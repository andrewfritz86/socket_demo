# socket_demo
basic chat application with websockets
###Notes
- Use `npm init` to create a package.json file. Think of this like Bundler in Sinatra/Rails.
- Install express with `npm install -- save express`. The `--save` flag will write code in your package.json file to grab any dependencies for express.

- Install socket.io with `npm install socket.io`

- Install nodemon globally with `npm install -g nodemon`. This acts as a restarter for your express server. Use the command `nodemon server.js` to start up the server.

###Thoughts
- We use websockets to create a 'socket', which we can think of as a pipe between our server and our client, and any other clients connected to that server. 
- The 'pipe' never closes unless we tell it to.
- We establish events in both the client and the server that are listened for on either end of the pipe.
- Each 'end' of the 'pipe' is 'emitting' something that the other end listens for. Once the other end 'hears' what it's listening for, it invokes a callback.