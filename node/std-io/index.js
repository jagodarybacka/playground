'use strict';
const readline = require('readline');
const Automata = require('./Automata.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const aut = new Automata();
aut.route(0, 1, "a")

// rl.on('line', function(line){
//     console.log(line.length);
// })
