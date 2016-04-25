'use strict';

/*
 * Write an algorithm to find the "next" node (i.e., in-order successor) of a given
 * node in a binary search tree. You may assume that each node has a link
 * to its parent.
 */

let BST = require('./BinaryTree').BST;

let bst = new BST();

let a = [1, 3, 4, 6, 3, 4];

a.forEach((v) => bst.insert(v));

function nextNode(tree, node){
  console.log('NODE', node, tree.root.data);
  if (! node.parent ){ return node.left; }
  if (node.parent.left == node){
    return node.parent.right;
  }
};

let node = bst.root;
for (let i=0; i<2; i++){
  if (Math.random() < 0.5){
    if (node.left){
      node = node.left;
    }
  } else {
    if (node.right){
      node = node.right;
    }
  }
}

console.log(nextNode(bst, node)); 
