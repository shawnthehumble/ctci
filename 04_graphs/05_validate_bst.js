'use strict';

/*
 * Implement a function to check if a binary tree is a binary
 * search tree.
 */

let BST = require('./BinaryTree').BST;
let BT = require('./BinaryTree').BT;

function isBST(node, min, max){
  if (node == null){ return true; }
  if ((min != null && node.data <= min) || 
     (max != null && n.data > max)) {
    return false;
  }
  if (! isBST(node.left, min, node.data) || ! isBST(node.right, node.data, max)) {
    return false;
  }
  return true;
};


let bst = new BST();
let bt = new BT();
let a = [1, 3, 5, 4, 6];
let b = [1, 2, 3, 4, 5];
a.forEach((v) => bst.insert(v));
b.forEach((v) => bt.insert(v));
console.log('BT', bt);
console.log('IS BINARY SEARCH TREE', isBST(bst));
console.log('IS BINARY SEARCH TREE', isBST(bt));
