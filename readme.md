- use npm init to create a package.json file
- use npm install --save (flag) to add dependencies to this file
- creating a server file first will automatically tell the package where to serve the app from
- npm install --save socket.io

**thoughts**
-- websockets allows us to open a 'pipe' between the server and client. the pipe is open until we explicitly close it. this allows the server to know how many connections are currently open. it allows the server to dump things down the pipe to the client without a request.
-- longpoling = chat client. server receives a message.it knows it has a message, but has no way to tell anyone.longpoling is a concept where the client is making constant ajax requests to the server and asking for something (in this case a new message from the other chatter). A (slight) bitch to set up (react makes this easier). imagine an array of messages. we call.length to see if there is a new one, then reset the counter.
--normally, an http request involves the client and server opening a TCP connection. REquesite information is exchanged, but then the connection is closed. With websockets, that pipe remains open.
-- sockets negate the need for longpolling