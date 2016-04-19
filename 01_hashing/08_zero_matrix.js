'use strict';

/* Zero Matrix:
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column are set to 0.
 */
'use strict';

const DIRECTIONS = [
  [0, 1], // up
  [0, -1], // down
  [1, 0], // right
  [-1, 0] // left
]; 

function fillArr(arr, i, j, zeros){
  let h = arr.length;
  let w = arr[0].length;
  for (let d=0; d<DIRECTIONS.length; d++){
    let direction = DIRECTIONS[d];
    let y = i, x = j;
    while ( y >= 0 && y < h && x >= 0 && x < w ){
      zeros.push([y,x]);
      x += direction[0];
      y += direction[1];
    }
  }
};

function setMatrixToZero(arr){
  console.log('INITIAL ARR', arr);
  let zeros = []
  let h = arr.length;
  let w = arr[0].length;
  for (let i=0; i<h; i++){
    let row = arr[i];
    for (let j=0; j<row.length; j++){
       if (arr[i][j] == 0 ) { fillArr(arr, i, j, zeros); }
    }
  }
  zeros.forEach((z) => {
    arr[z[0]][z[1]] = 0;
  });
};

let MATRIX = [
  [0, 1, 1, 1],
  [1, 1, 4, 3],
  [3, 5, 4, 6],
  [1, 2, 3, 4],
  [5, 3, 6, 1]
];

console.log('INITIAL MATRIX', MATRIX);
setMatrixToZero(MATRIX);
console.log('FINAL MATRIX', MATRIX);
