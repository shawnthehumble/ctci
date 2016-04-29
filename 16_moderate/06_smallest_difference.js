/*
 * Smallest Difference: Given 2 arrays of integers, compute the pair of values
 * (one value in each array) with the smallest (non-negative) difference.
 * Return the difference.
 */

function smallestDifference(a1, a2) {
  a1 = a1.sort((a, b) => a > b);
  a2 = a2.sort((a, b) => a > b);
  let minV = Math.abs(a1[0] - a2[0]);;
  let minPair = [a1[0], a2[0]];;
  for (let i=0; i<a1.length; i++){
    let v1 = a1[i];
    let s = a2.filter((v) => v > v1 - minV || v < v1 + minV);
    s.forEach((v) => {
      if (Math.abs(v1 - v) < minV) {
        minV = Math.abs(v1 - v);
        minPair = [v1, v];
      }
    });
  }
  return minPair;
};

let a1 = [4, 2, 57, 34, 9];
let a2 = [7, 1, 10, 39, 11];

console.log(smallestDifference(a1, a2));
