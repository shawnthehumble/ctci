/*
 * Tic Tac Win: Design an algorithm to figure out if someone has won a game of tic-tac-toe.
 */
function isUnique(arr){
  let char = arr[0];
  if (! char ) { return false; }
  for (let i=1; i<arr.length; i++){
    if (arr[i] != char) { return false; }
  }
  return true;
}
function hasWinner(grid) {
  let diag1 = [], diag2 = [];
  for (let i=0; i<grid.length; i++){
    if ( isUnique(grid[i]) ) { return true; }
    let col = grid.map((r) => r[i]);
    if ( isUnique(col)) { return true; }
    diag1.push(grid[i][i]);
    diag2.push(grid[i][grid.length-i]);
  }
  if (isUnique(diag1) || isUnique(diag2)) { return true; }
  return false;
};

let g1 = [
  ['x', 'o', 'x' ],
  [   , 'o', 'x' ],
  [   ,    , 'x' ]
]

let g2 = [
  ['x', 'o', 'x'],
  ['x',    , 'o'],
  ['o',    ,    ]
];

console.log(hasWinner(g1));
console.log(hasWinner(g2));
