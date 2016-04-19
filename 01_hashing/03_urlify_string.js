/*
 * Write a method to replace all spaces in a string with '%20'. You may assume you have sufficient space at the end to hold the additional chars, and that you are given
 * the true length of the string. 
 * EXAMPLE: 
 * Input : "Mr John Smith     ", 13
 * Ouput : "Mr%20John%20Smith"
 */

'use strict';

function urlify(str, len){
  console.log('TRIME', [str.trim()]);
  return str.split(' ').filter((s) => s.trim() != '').join('%20');
};

String.prototype.trim = function(){
  let s = this, start = false, end = false;
  for (let i=0; i<s.length; i++){
    if ( ! s[i] ) { return; }
    if (! start) { 
      if (s[i] == ' ') { s = s.substring(i + 1, s.length-1); }
      else { start = true; }
    }
    if (! end) {
      if (s[s.length-1-i] == ' ') { 
        s = s.substring(0, s.length-1-i);
      }
      else { end = true; }
    }
  }
  return s;
}


const TEST_CASES = [
  ['Mr John Smith     ', 11],
  ['   Hello     World    ', 11],
  ['What  a   wonderful life   ', 21],
];

TEST_CASES.forEach((c) =>  {
  console.log(c, urlify(c[0], c[1]));
});



