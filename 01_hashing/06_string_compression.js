'use strict';

/* String Compression
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabccccaaa would become a2b1c5a3.
 * If th e"compressed" string would not become smaller than the original string, your
 * method should return the original string. You can assume the string has only uppercase
 * and lowercase letters (a-z).
 */

function compress(str){
  let compressedStr = '';
  let count = 1;
  for (let i=1; i<str.length; i++){ // N
    if (count > 1 && str[i] != str[i-1]){
      compressedStr += `${str[i-1]}${count}`;
      count = 1;
    } else if (count == 1 && str[i] != str[i-1]){
      compressedStr += str[i-1];
      count = 1;
    } else {
      count++;
    }
  }
  let last = count > 1 ? `${str[str.length-1]}${count}` : str[str.length-1];
  return compressedStr + last;
};

const TEST_CASES = [
  'aabccccdaaabd',
  'aaaaaabbcc',
  'abcdefg',
  'abbcdefg'
];

TEST_CASES.forEach((c) => {
  console.log(c, compress(c));
});
