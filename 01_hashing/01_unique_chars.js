/* 1.1 Implement an algorithm to determine if a string has all unique characters
 * What if you cannot use additional data structures?
 */

'use strict';

function hasUniqueChars(str){
  let hash = {};
  for (let i=0; i<str.length; i++){
    if (hash[str[i]]) { return false }
    else { hash[str[i]] = 1; }
  }
  return true;
};

/* without data structures */
function shuffle(arr){
  let temp, idx;
  for (let i=0; i<arr.length; i++){
    idx = Math.floor(Math.random()*arr.length);
    temp = arr[i];
    arr[i] = arr[idx];
    arr[idx] = temp;
  }
};

function exch(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function partition(arr, lo, hi){
  let i = lo, j = hi + 1, v = arr[lo];
  while (true){
    while ( arr[++i] < v ) {
      if (i == hi) { break; }
    }
    while ( arr[--j] > v ) {
      if ( j == lo ) { break; }
    }
    if (i >= j) { break; }
    exch(arr, i, j);
  }
  exch(arr, lo, j);
  return j;
};

function quickSort(arr, lo, hi){
  if (lo == undefined) {
   lo = 0, hi = arr.length - 1;
   shuffle(arr);
  }
  if (lo >= hi ) { return; }
  let j = partition(arr, lo, hi);
  quickSort(arr, lo, j - 1);
  quickSort(arr, j + 1, hi);
};

function hasUniqueCharsNoABT(str){
  str = str.split('');
  quickSort(str);
  for (let i=1; i<str.length; i++){
    if (str[i] == str[i-1]) { return false; }
  }
  return true;
};


let TEST_CASES = [
  'hello',
  'amsterdam',
  'cat',
  'pickle'
];

TEST_CASES.forEach((c) => {
  console.log(c, hasUniqueCharsNoABT(c));
});

TEST_CASES.forEach((c) => {
  console.log(c, hasUniqueChars(c));
});
