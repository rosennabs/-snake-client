const net = require('net');
const { IP, PORT, playerName } = require('./constants');

// establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // print a message when connection is established & display player's name
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write(`Name: ${playerName}`);
    
  });

  // timeout the game server when idle
  conn.setTimeout(120 * 1000);
  conn.on("timeout", () => {
    console.log("You ded cuz you idled!");
  });

  conn.setEncoding("utf8");

  return conn;
};



// create and export client module

module.exports = {
  connect
};