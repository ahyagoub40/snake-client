const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  
  });
  conn.on('connect', () => {
    conn.write('Successfully connected to game server!');
    conn.write('Name: AYA');
    conn.write('Say: go long');
    // // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);

  });
  return conn;
};

module.exports = connect;