/* Given a string, write a function to determine if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forward and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just 
 * dictionary words.
 * EXAMPLE
 * Input Tact Coa
 * Output True ( permutations: "taco cat", "atco cta", etc. )
 */

function isPalindromePermutation(str){
  str = str.toLowerCase().replace(/\ +/g, '');
  let obj = {};
  for (let i=0; i<str.length; i++){
    let letter = str[i];
    if (obj[letter]) { obj[letter] += 1; }
    else { obj[letter] = 1; }
  }
  let odd = Object.keys(obj).map((k) => {
    if (obj[k] % 2 == 0) {
      return 0;
    } else {
      return 1;
    }
  })
  .reduce((p, n) => p + n);
  return odd <= 1;
}

let str1 = 'Tact Coa', str2 = 'The Dog';
console.log(isPalindromePermutation(str1));
console.log(isPalindromePermutation(str2));
