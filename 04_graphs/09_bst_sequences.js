'use strict';

/*
 * A binary search tree was created by traversing through an array from
 * left to right and inserting each element. Given a binary search tree
 * with distinct elements, print all possible arrays that could have led to this tree.
 *
 * EXAMPLE
 * Input:
 *          2
 *        |   |
 *        1   3
 * Output: {2, 1, 3}, {2, 3, 1}
 */

let BST = require('./BinaryTree').BST;

let bst = new BST();

let a = [2, 1, 3];

a.forEach((v) => bst.insert(v));

function treePermutations(tree){
  
};

console.log(treePermutations(bst));
