'use strict';

/* Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write
 * a method to rotate the image by 90 degrees. Can you do this in place?
 */

function rotateImage(arr){
  let res = [];
  for (let i=0; i<arr.length; i++){
    let col = arr.map((row) => row[i]);
    res.push(col);
  }
  return res;
};

function rotateImageInPlace(arr){
  
};

const MATRIX = [
  ['0100', '0011', '1111', '0100'],

  ['0001', '0010', '0100', '0100'],

  ['1000', '1100', '0011', '0101'],

  ['1110', '0001', '0101', '1011']
];

console.log('INITIAL MATRIX', MATRIX);
MATRIX.forEach((row) => {
  console.log(row.join('  -  '));
  console.log('\n\n');
});

console.log('      --------------       ');

let res = rotateImage(MATRIX);
res.forEach((row) => {
  console.log(row.join('  -  '));
  console.log('\n\n');
});
