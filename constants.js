// create configuration constants

const IP = "localhost";
const PORT = 50541;
const playerName = process.argv.slice(2);
const cmdObj = {
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right"
};

module.exports = {
  IP,
  PORT,
  playerName,
  cmdObj
};