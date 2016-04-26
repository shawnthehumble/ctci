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

function leftMostChild(n){
  if (n == null) { return null; }
  while (n.left != null){
    n = n.left;
  }
  return n;
};

function nextNode2(n){
  if (n == null) { return null; }
  if (n.right != null){
    return leftMostChild(n.right);
  } else {
    let q = n;
    let x = q.parent;
    while (x != null && x.left != q){
      q = x;
      x = x.parent;
    }
    return x;
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
console.log(nextNode2(node));
