const net = require('net');
const { IP, PORT } = require('./constants');

// establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // print a message when connection is established & display player's name
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: RCO");

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000);
    
  });

  // timeout the game server when idle for 10 secs
  conn.setTimeout(120000);
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