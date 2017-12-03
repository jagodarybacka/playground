'use strict';

class Automata {
  constructor() {
    this.state = 0;
    this.transitions = [];
    this.accepting = [];
  }

  resetState() {
    this.state = 0;
  }

  route(from, to, char) {
    if(!to) {
      if (!this.transitions[from]) {
        this.transitions[from] = {};
      }
      this.accepting.push(from);
    } else {
      if (!this.transitions[from]) {
        this.transitions[from] = {[char]: to}
      } else if (!this.transitions[from][char]){
        this.transitions[from][char] = to;
      }
    }
  }

  check(str) {
    for (let v of str) {
      if (this.transitions[this.state][v]) {
        this.state = this.transitions[this.state][v]
      } else {
          this.resetState()
          return false
      }
    }

    if (this.accepting.indexOf(this.state.toString()) >= 0) {
        this.resetState()
        return true
    } else {
      this.resetState()
      return false
    }
  }
}

module.exports = Automata
