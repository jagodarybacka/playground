'use strict'
const readline = require('readline')
const fs = require('fs')
const Automata = require('./Automata.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

function app() {
  return new Promise(
    (resolve, reject) => {
      const aut = new Automata()
      readInputFile()
        .then(res => {
            return res.map((el) => aut.route(...el))
        })
        .then(readArgvFile)
        .then(data => data.split('\n'))
        .then(res => {
          resolve({words: res, aut})
        })
    }
  )
}

function readInputFile() {
  return new Promise(
      (resolve, reject) => {
        let arr = []
        rl.on('line', line => {
          if (line[0] !== "#" && line.length) {
            arr.push(line.split(' '))
            resolve(arr)
          }
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

app()
  .then(res => {
    // console.log(res.aut.transitions);
    // res.aut.check('a')
    res.words.forEach((str) => {
        if (str.length > 0) {
          console.log(res.aut.check(str) ? 'YES' : 'NO', str)
          // console.log('\n\n');
        }
    });
  })
  .catch((err) => {
    console.log(err);
  });
