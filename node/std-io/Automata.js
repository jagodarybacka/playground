'use strict';

class Automata {
  constructor() {
    this.state = 0;
    this.transitions = [];
    this.accepting = [];
  }

  route(from, to, char) {
    if(!to) {
      this.accepting.push(from);
    } else {
      if (!this.transitions[from]) {
        this.transitions.push({[char]: to})
      } else if (!this.transitions[from][char]){
        this.transitions[from][char] = to;
      }
    }
  }
  // FIXME: not working at all
  check(str) {
    for (let v of str) {
      console.log(v, this.state);
      // if transition from exist set state
      // console.log(this.accepting.includes(this.state.toString()));
      if (this.transitions[this.state][v]) {
        this.state = this.transitions[this.state][v]
      } else if (this.accepting.includes(this.state.toString())){
        // if transition doesnt exist try accepting
        return true;
      } else {
        return false;
      }
    }
    return false
  }
}

module.exports = Automata
