// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from standard keyboard input (stdin)

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


// takes keyboard inputs from client
const handleUserInput = function (key) {

  // bind movement commands to W A S D keys and send commands to game server
  if (key === "w") {
    connection.write("Say: chase it!");
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
    connection.write("Say: BRAVO");
  } else if (key === "s") {
    connection.write("Move: down");
    connection.write("Say: Go!");
  } else if (key === "d") {
    connection.write("Move: right");
    connection.write("Say: Yes!");
  } else if (key === "\u0003") {// terminate the game with ctrl+c
    console.log("Game terminated!");
    process.exit();
  }
};





module.exports = {
  setupInput
};
