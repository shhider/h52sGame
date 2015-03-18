var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 8080});

wss.on('connection', function(ws){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(data) {
    ws.send(data);
  });

  ws.on('message', function(msg){
    console.log(msg);
  });
});
