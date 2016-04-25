'use strict';

/*
 * Implement a function to check if a binary tree is balanced.
 * For the purposes of the question, a balanced tree is defined
 * to be a tree such that the heights of the 2 subtrees of any
 * node never differ by more than one.
 */

let BST = require('./BinaryTree').BST;

let bst = new BST();

let arr = [2, 1, 3];

arr.forEach((v) => bst.insert(v));

function checkHeight(root){
  if (root == null) { return 0; }
  let leftHeight = checkHeight(root.left);
  if (leftHeight == -1 ){ return -1; }
  let rightHeight = checkHeight(root.right);
  if (rightHeight == -1){ return -1; }

  let heightDiff = leftHeight - rightHeight;
  if (Math.abs(heightDiff) > 1){
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
};
function isBalanced(root){
  if (checkHeight(root) == -1){
    return false;
  } else {
    return true;
  }
};

console.log(isBalanced(bst.root));

