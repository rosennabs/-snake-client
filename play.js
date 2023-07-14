const net = require('net');

//establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  //timeout the game server when idle for 5secs
  conn.setTimeout(5000);
  conn.on("timeout", () => {
    console.log("You ded cuz you idled!");
  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();