
const connect = require('./client');


console.log('Connecting ...');
connect();

const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    callback(input);
  });
  return stdin;
};
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};
setupInput(handleUserInput);

