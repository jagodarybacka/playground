'use strict'

/**
 * Normal Verion
 */

function captcha(str) {
  let sum = 0;
  let prev = str[str.length-1];
  for (let s of str) {
    if (prev === s) sum += Number(s);
    prev = s;
  }
  console.log(sum);
}

/**
 * One line version
 */

let c = (s) => [...s, s[0]].reduce((p,n,i,a)=>n==a[i-1]?p+~~n:p,0)

/**
 * One line verion explained
 */

// use rest operator to destructure array
// add array[0] because we need to compare last and first element
// use arrow function

let explained = (array) => [...array, array[0]].reduce((prev, next, index, array) => {
  // compare array element with previous one
  if (next == array[index-1]) {
    // return sum of previous and next element
    // ~~ converts string to number
    return prev + ~~next
  } else {
    return prev
  }
// set 0 as an initial value - start sum from 0
}, 0)
captcha('91212129')
console.log(explained('1111'))
