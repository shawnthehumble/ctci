/*
 * Write a method to replace all spaces in a string with '%20'.
 * You may assume you have sufficient space at the end to hold the additional chars, and that you are given
 * the true length of the string. 
 * EXAMPLE: 
 * Input : "Mr John Smith     ", 13
 * Ouput : "Mr%20John%20Smith"
 */

function Urlify(str){
  return str.trim().replace(/\ +/g, '%20');
};

function Urlify2(str){
  let result = '';
  let encode = false;
  for (let i=0; i<str.length; i++){
    let letter = str[i];
    if (encode && letter != ' '){
      result += '%20' + letter; encode = false;
    } else {
      if (letter == ' '){ encode = true; }
      else { result += letter; }
    }
  }
  return result;
}

let str = 'Mr John Smith     ';
console.log(Urlify(str));
console.log(Urlify2(str));
