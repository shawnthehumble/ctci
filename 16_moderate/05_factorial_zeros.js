/*
 * Factorial Zeros: Write an algorithm which computes the number of trailing
 * zeros in n factorial.
 */

function factorial(n, res=1){
  if (n == 1) { return res; }
  res *= n;
  return factorial(n-1, res);
}

function trailingZeros(n) {
  let f = factorial(n).toString();
  let count = 0;
  for (let i=0; i<f.length; i++){
    if (f[f.length-i-1] != '0' ) { return count; }
    else {
      count++;
    }
  }
  return count;
}

let n = 10;
console.log(factorial(n));
console.log(trailingZeros(n));
