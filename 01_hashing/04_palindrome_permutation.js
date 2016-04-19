'use strict';

/* Given a string, write a function to determine if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forward and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just 
 * dictionary words.
 * EXAMPLE
 * Input Tact Coa
 * Output True ( permutations: "taco cat", "atco cta", etc. )
 */

function isPalindromePermutation(str){
  str = str.toLowerCase().replace(/\ /, '');
  let counts = {};
  for (let i=0; i<str.length; i++){
    if (counts[str[i]]) { counts[str[i]] += 1; }
    else { counts[str[i]] = 1; }
  }
  let oddKeys = 0;
  Object.keys(counts).forEach((k) => {
    if (counts[k] % 2 != 0) { oddKeys += 1; }
  });
  if (oddKeys > 1) { return false; }
  else if (oddKeys == 1 && str.length % 2 == 0) { return false; }
  else { return true; }
};

const TEST_CASES = [
  'ACT ACOT',
  'ALAM YALAM',
  'ACC',
  'TAT',
  'HELLO',
];

TEST_CASES.forEach((c) => {
  console.log(c, isPalindromePermutation(c));
});

