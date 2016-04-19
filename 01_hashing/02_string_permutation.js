/*
 * 'Given 2 strings, write a method to determine if 1 is a permutation of the other'
 */

'use strict';

function isPermutation(str1, str2){
  return str1.split('').sort().join('') == str2.split('').sort().join('');
};

function merge(arr, lo, mid, hi){
  if ((hi - lo) > 4) {
    let arr1 = arr.slice(lo, mid + 1);
    let arr2 = arr.slice(mid + 1, hi + 1);
    let idx = lo;
    while (arr1.length || arr2.length){
      if (arr2[0] < arr1[0] || ! arr1.length) {
        arr[idx++] = arr2.shift();
      } else {
        arr[idx++] = arr1.shift();
      }
    }
  } else {
    for (let i=lo; i<hi+1; i++){
       for (let j=i; j>0 && arr[j] < arr[j-1]; j--){
         let temp = arr[j];
         arr[j] = arr[j-1];
         arr[j-1] = temp;
       }
     }
  }
};

function mergeSort(arr, lo, hi){
  if (lo == undefined) {lo = 0, hi = arr.length - 1; }
  if (lo >= hi) { return; }
  let mid = lo + Math.floor((hi - lo)/2);
  mergeSort(arr, lo, mid);
  mergeSort(arr, mid + 1, hi);
  merge(arr, lo, mid, hi);
};

function isPermutationMerge(str1, str2){
  str1 = str1.split(''), str2 = str2.split('');
  mergeSort(str1);
  mergeSort(str2);
  return str1.join('') == str2.join('');
};


const TEST_CASES = [
   ['cat', 'tac'],
   ['malayalam', 'yalamalam'],
   ['hello', 'oellh'],
   ['god', 'dog'],
   ['hey', 'yo'],
   ['good', 'dog']
 ];

TEST_CASES.forEach((c) => {
 console.log(c, isPermutationMerge(c[0], c[1]));
});
