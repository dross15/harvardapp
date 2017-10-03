var app = require('express')();
//initializes app to be a function handler to supply to a HTTP server
var http = require('http').Server(app);
//initialize instance of socket io
var io = require('socket.io')(http);

//loads page index.html
app.get('/', function (req, res) {
	res.sendFile('/Users/danielross/Desktop/chat-example/index.html')
});

//listens on connection event for incoming sockets
io.on('connection', function (socket) {
	//allows all users to see the requests
	socket.on('request', function (request) {
		io.emit('request', request);
	});
});

//makes the http server listen on port 8080
http.listen(8080, function () {
	console.log('listening on *:8080');
});