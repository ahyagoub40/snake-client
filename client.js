const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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