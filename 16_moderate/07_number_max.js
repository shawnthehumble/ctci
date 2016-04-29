/*
 * Number Max: Write a method that finds the maximum of 2 numbers. You should not
 * use if-else or any other comparison operator.
 */

function max(n1, n2) {
  let k1 = Math.floor(n1 / n2);
  let k2 = Math.floor(n2 / n1);
  return (k1 * n1) + (k2 * n2);
};

console.log(max(5, 8));
console.log(max(8, 5));
