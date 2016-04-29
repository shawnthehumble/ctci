/*
 * Number Swapper: Write a function to swap a number in place (that is,
 * without temporary variables).
 */

function swap(n1, n2){
  n1 = [n1, n2];
  n2 = n1.shift();
  n1 = n1.shift();
  return [n1, n2];
}

let n1 = 5, n2 = 8;
console.log(swap(n1, n2));
