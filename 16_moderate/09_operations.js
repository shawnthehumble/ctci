/*
 * Operations: Write methods to implement the multiply, subtract, and divide operations for integers.
 * The results of all of these are integers. Use only the add operator.
 */

function multiply(n1, n2) {
  let res = n2;
  for (let i=1; i<n1; i++){
    res += n2;
  }
  return res;
};

function divide(n1, n2) {
  let res = 1;
  while (n2 <= n1){
    n2 += n2;
    res++;
  }
  return res;
};

function subtract(n1, n2) {
  let neg = -n2;
  return n1 + neg;
};

console.log(multiply(3,4));
console.log(divide(12,3));
console.log(subtract(9,3));
