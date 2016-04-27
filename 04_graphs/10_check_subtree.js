'use strict';

/*
 * T1 and T2 are 2 very large binary trees, with T1 much bigger than T2.
 * Create an algorithm to determine if T2 is a subtree of T1.
 * A tree T2 is a subtree of T1 if there exists a node n in T1 such that the
 * subtree of n is identical to T2. That is, if you cut off the tree at node n,
 * the 2 trees would be identical.
 */


let BST = require('./BinaryTree').BST;

let arr1 = [ 5, 1, 10, 3, 2, 4, 7, 6, 8];

let arr2 = [7, 6, 8];

let T1 = new BST(), T2 = new BST();

arr1.forEach((v) => T1.insert(v));
arr2.forEach((v) => T2.insert(v));

let node1 = T1.root.right;
let node2 = T2.root;

function doubleTraversal(node1, node2){
  if (node1 != null && node2 != null){
    doubleTraversal(node1.left, node2.left);
    if (node1.data != node2.data)  { return false; }
    doubleTraversal(node1.right, node2.right);
  } else if (node1 == null && node2 != null ){
     return false;
  } else if (node2 == null && node1 != null) {
    return false;
  }
  return true;
}

function isSubTree(node1, node2){
  let subTreeRoot = node1.data;
  let treeRoot = node2;
  let q = [];
  q.unshift(treeRoot);
  while (q.length > 0){
    let n = q.shift();
    if (n.data == subTreeRoot){
      if (doubleTraversal(n, node1)) { return true; }
    }
    if (n.left){
      q.unshift(n.left);
    }
    if (n.right){
      q.unshift(n.right);
    }
  }
  return false;
}

console.log(isSubTree(node2, node1));
