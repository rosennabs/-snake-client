const { cmdObj } = require('./constants');

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from standard keyboard input (stdin)

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// takes keyboard inputs from client
const handleUserInput = function(key) {

  // bind movement commands to W A S D keys and send commands to game server
  if (cmdObj[key]) {
    connection.write("Say: chase!");
    connection.write(cmdObj[key]);
  }
  
  if (key === "\u0003") {// terminate the game with ctrl+c
    console.log("Game terminated!");
    process.exit();
  }
};




module.exports = {
  setupInput
};
