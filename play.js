const { Socket } = require('net');
const { connect } = require('./client');
const { stdin } = require('process');

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//terminate the game with ctrl+c
const handleUserInput = function () {
  if ("\u0003") {//character reps ctrl+c
    console.log("Game terminated!");
    process.exit();
  }
};

setupInput();