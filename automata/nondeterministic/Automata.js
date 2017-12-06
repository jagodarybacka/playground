'use strict';

class Automata {
  constructor() {
    this.transitions = [];
    this.accepting = [];
  }

  route(from, to, char) {
    if(!to) {
      if (!this.transitions[from]) {
        this.transitions[from] = {};
      }
      this.accepting.push(from);
    } else {
      if (!this.transitions[from]) {
        let arr = [to]
        this.transitions[from] = {[char]: arr}
      } else if (!this.transitions[from][char]){
        this.transitions[from][char] = [to];
      } else {
        this.transitions[from][char].push(to);
      }
    }
  }

  reqCheck(str, state) {
    if (str.length) {
      let s = str[0]
      if (this.transitions[state][s]) {
        let statesArray = this.transitions[state][s];
        str = str.slice(1);

        for (let st of statesArray) {
          st = st.toString();
          if (this.reqCheck(str, st)) {
            return true;
          }
        }
        return false;
      } else {
        return false
      }
    } else {
      if (this.accepting.indexOf(state.toString()) >= 0) {
          return true;
      } else {
        return false;
      }
    }
  }

  check(str) {
    let state = 0;
    return this.reqCheck(str, state);
  }

}

module.exports = Automata;
