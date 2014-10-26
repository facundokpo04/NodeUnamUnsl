var express = require('express');
var router = express.Router();


var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);
app.listen(80);
var connections = 0;

/* GET home page. */
router.get('/', function(req, res) {
  res.sedFile(__dirname + 'index.html');
});

//codigo socketcs

io.set('log level', 1);

// Escuchamos conexiones entrantes
io.on('connection', function (socket) {
  connections++;
  console.log('connected', connections);
  socket.broadcast.emit('connections', {connections:connections});

  // Detectamos eventos de mouse
  socket.on('mousemove', function (data) {
    // transmitimos el movimiento a todos los clientes conectados
  
   socket.broadcast.emit('move', data);
  
  });

  socket.on('disconnect', function() {
    connections--;
    console.log('connected', connections);
    socket.broadcast.emit('connections', {connections:connections});
  });
});

/*http.listen(3000,function(){
  console.log('listening on 3000');
});*/



module.exports = router;
