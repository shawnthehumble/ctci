/* 1.1 Implement an algorithm to determine if a string has all unique characters
 * What if you cannot use additional data structures?
 */

function hasUniqueChars2(str){
  str = str.split('');
  QuickSort(str);
  for(let i=1; i<str.length; i++){
    if (str[i] == str[i-1]) { return false; }
  }
  return true;
};

function partition(str, lo, hi){
  let i = lo, j = hi + 1, v = str[lo];
  while (true) {
    while (str[++i] < v){
      if (i == hi){ break; }
    }
    while (str[--j] > v){
      if (j == lo) { break; }
    }
    if (i >= j ) { break; }
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
  let temp = str[lo];
  str[lo] = str[j], str[j] = temp;
  return j;
};

function QuickSort(str, lo, hi){
  if (lo == undefined){ lo = 0; hi = str.length - 1; }
  if (lo >= hi) { return; }
  let j = partition(str, lo, hi);
  QuickSort(str, lo, j - 1);
  QuickSort(str, j + 1, hi);
}

function hasUniqueChars1(str){
  let obj = {};
  for(let i=0; i<str.length; i++){
    let letter = str[i];
    if (obj[letter]) { return false; }
    else {
      obj[letter] = 1;
    }
  }
  return true;
};

let str1 = 'dog';
let str2 = 'tell';

console.log(hasUniqueChars2(str1));
console.log(hasUniqueChars2(str2));
