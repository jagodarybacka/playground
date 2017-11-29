'use strict';

class Automata {
  constructor() {
    this.state = 0;
    this.transitions = [];
    this.accepting = [];
  }

  route(from, to, char) {
    if (!this.transitions[from]) {
      this.transitions.push({[char]: to})
    } else if (!this.transitions[from][char]){
      this.transitions[from][char] = to;
    }
  }
}

module.exports = Automata
