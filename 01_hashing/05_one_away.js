/*
 * There are 3 types of edits that can be performed - insert a char, remove a char,
 * or replace a char. Given 2 strings, write a function to check if they one edit (or 0 edits)
 * away.
 * EXAMPLE
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> true
 */

function quickSort(arr, lo, hi){
  if (lo == undefined) { lo = 0, hi = arr.length - 1; }
  if (lo >= hi){ return; }
  let j = partition(arr, lo, hi);
  quickSort(arr, lo, j - 1);
  quickSort(arr, j + 1, hi);
  return arr;
};

function partition(arr, lo, hi){
  let i = lo, j = hi + 1, v = arr[lo];
  while (true){
    while (arr[++i] < v){
      if (i == hi){ break; }
    }
    while (arr[--j] > v){
      if (j == lo) { break; }
    }
    if (i >= j ) { break; }
    let temp = arr[i];
    arr[i] = arr[j], arr[j] = temp;
  }
  let temp = arr[j];
  arr[j] = arr[lo], arr[lo] = temp;
  return j;
};

function isOneAway(str1, str2){
  str1 = quickSort(str1.split('')), str2 = quickSort(str2.split(''));
  let max = str1.length > str2.length ? str1 : str2;
  let min = str1.length > str2.length ? str2 : str1;
  let steps = 0;
  for (let i=0; i<max.length; i++){
    if (min[i] != max[i]){
      steps += 1;
      if (str1.length == str2.length){
        min = [...min.slice(0, i), max[i], ...min.slice(i+1)];
      } else {
        min = [...min.slice(0, i), max[i], ...min.slice(i)];
      }
    }
  }
  return steps == 1;
};

let str1 = 'cat', str2 = 'cate';
let str3 = 'cat', str4 = 'tat';
let str5 = 'cate', str6 = 'cat';

console.log(isOneAway(str1, str2));
console.log(isOneAway(str3, str4));
console.log(isOneAway(str5, str6));
console.log(isOneAway(str5, str4));
