/*
 * 'Given 2 strings, write a method to determine if 1 is a permutation of the other'
 */

function mergeSort(arr, lo, hi){
  if (lo >= hi){ return; }
  if (lo == undefined) { lo = 0, hi = arr.length - 1; }
  let mid = lo + Math.floor((hi - lo)/2);
  mergeSort(arr, lo, mid);
  mergeSort(arr, mid + 1, hi);
  merge(arr, lo, mid, hi);
  return arr;
};

function merge(arr, lo, mid, hi){
  let temp1 = arr.slice(lo, mid + 1);
  let temp2 = arr.slice(mid + 1, hi + 1);
  let idx = lo;
  while (temp1.length || temp2.length){
    if (temp1[0] > temp2[0] || ! temp1.length){
      arr[idx++] = temp2.shift();
    } else {
      arr[idx++] = temp1.shift();
    }
  }
};

function isPermutation(str1, str2){
  let s1 = mergeSort(str1.split(''));
  let s2 = mergeSort(str2.split(''));
  return s1.join('') == s2.join('');
};

let str1 = 'cat', str2 = 'tac', str3 = 'bat';

console.log(isPermutation(str1, str2));
console.log(isPermutation(str2, str3));

