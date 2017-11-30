'use strict'
const readline = require('readline')
const fs = require('fs')
const Automata = require('./Automata.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

let autInput;
let autTransitions = [];

new Promise(
  (resolve, reject) => {
    const aut = new Automata()
    readInputFile()
      .then(res => {
        // BUG: my node ver is dumb and has problem with spread syntax - get update asap
        return res.map((el) => aut.route(el[0], el[1], el[2]))
      })
      .then(readArgvFile)
      .then(data => data.split('\n'))
      .then(res => console.log(res))
  }
)


function readInputFile() {
  return new Promise(
      (resolve, reject) => {
        let arr = []
        rl.on('line', line => {
          arr.push(line.split(' '))
          resolve(arr)
        })
    }
  )
}

function readArgvFile() {
  return new Promise(
    (resolve, reject) => {
      fs.readFile(process.argv[2], 'utf8',
        (err, data) => {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
    })
}
