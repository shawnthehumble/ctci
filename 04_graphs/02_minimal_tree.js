'use strict';

/*
 * Given a sorted (increasing order) array with unique integer elements, write an
 * algorithm to create a binary search tree with minimal height.
 */

class TreeNode{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
};

let BST = require('./BinaryTree').BST;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let bst = new BST();

function createMinimalBST(bst, arr, start, end){
  if (start > end) { return null; }
  let mid = Math.floor((start + end)/2);
  let node = new TreeNode(arr[mid]);
  node.left = createMinimalBST(bst, arr, start, mid - 1);
  node.right = createMinimalBST(bst, arr, mid + 1, end);
  return node;
};

bst.root = createMinimalBST(bst, arr, 0, arr.length-1);
console.log('BST', bst);

