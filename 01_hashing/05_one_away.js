'use strict';

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

function exch(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function partition(arr, lo, hi){
  let i = lo, j = hi + 1, v = arr[lo];
  while (true){
    while (arr[++i] < v){
      if (i == hi) { break; }
    }
    while (arr[--j] > v){
      if (j == lo) { break; }
    }
    if (i >= j ) {break; }
    exch(arr, i, j);
  }
  exch(arr, lo, j);
  return j;
};

function quickSort(arr, lo, hi){
  if (lo == undefined) { lo = 0, hi = arr.length - 1; }
  if (lo >= hi) { return; }
  let j = partition(arr, lo, hi);
  quickSort(arr, lo, j - 1);
  quickSort(arr, j + 1, hi);
};

function binarySearch(arr, key){
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi){
    let mid = lo + Math.floor((hi - lo)/2);
    if (arr[mid] < key){
      lo = mid + 1;
    } else if (arr[mid] > key) {
      hi = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function isOneAway(str1, str2){
  str1 = str1.split(''), str2 = str2.split('');
  quickSort(str1); // NlogN
  quickSort(str2); // MlogM
  let count = 0;
  let letter, k;
  while (str1.length && str2.length ){ //MN
    letter = str1.shift();
    k = binarySearch(str2, letter); // logM 
    if (k != -1) {
      str2 = str2.slice(0, k).concat(str2.slice(k+1));
    }
  }
  console.log('FINAL STRINGS', str1, str2);
  count += str2.length + str1.length;
  return count <= 1;
};

const TEST_CASES = [
  ['balk', 'bal'],
  ['bale', 'balt'],
  ['park', 'bait'],
  ['cat', 'cate']
];

TEST_CASES.forEach((c) => {
  console.log(c, isOneAway(c[0], c[1]));
});
