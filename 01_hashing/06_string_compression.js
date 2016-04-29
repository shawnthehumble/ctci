/* String Compression
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabccccaaa would become a2b1c5a3.
 * If th e"compressed" string would not become smaller than the original string, your
 * method should return the original string. You can assume the string has only uppercase
 * and lowercase letters (a-z).
 */

function compress(str){
  let a = [];
  let last = [ str[0] ];
  let isShorter = false;
  for (let i=1; i<str.length; i++){
    if (str[i] != str[i-1]){
      a.push(last);
      last = [str[i]];
    } else {
      last.push(str[i]);
      if (i == str.length -1 ){ a.push(last); }
      if (last.length > 2) { isShorter = true; }
    }
  }
  let result = isShorter ? a.map((v) => `${v[0]}${v.length}`).join('') : str;
  return result;
};

let str1 = 'aabccccaaa', str2 = 'aabbccdd';

console.log(compress(str1));
console.log(compress(str2));
