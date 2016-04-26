'use strict';

/*
 * Implement a function to check if a binary tree is a binary
 * search tree.
 */

let BST = require('./BinaryTree').BST;
let BT = require('./BinaryTree').BT;

let inOrderTraversal = (node, fn) => {
  if (node != null){
    inOrderTraversal(node.left);
    fn(2);
    inOrderTraversal(node.right);
  }
}

function isBST2(tree){
  function copyBST(root, arr){
    if (root == null) { return; }
    copyBST(root.left, arr);
    arr.push(root.data);
    copyBST(root.right, arr);
  };
  let a = [];
  copyBST(tree.root, a);
  for(let i=1; i<a.length; i++){
    if (a[i] < a[i-1] ) { return false; }
  }
  return true;
}

function isBST(node, min, max){
  if (node == null){ return true; }
  if ((min != null && node.data <= min) || 
     (max != null && node.data > max)) {
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
console.log('IS BINARY SEARCH TREE', isBST(bst.root));
console.log('IS BINARY SEARCH TREE', isBST(bt.root));
console.log('IS BS2', isBST2(bst));
console.log('IS BS2', isBST2(bt));
