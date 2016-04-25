'use strict';

/*
 * Design an algorithm and write code to find the 1st common ancestor of 2 nodes in a binary tree.
 * Avoid storing additional nodes in a data structure. NOTE: This is not
 * necessarily a binary search tree.
 */

let BT = require('./BinaryTree').BT;

let bt = new BT();

let a = [1, 6, 3, 7, 9, 2, 4];

a.forEach((v) => bt.insert(v));


function firstAncestor(tree, node1, node2){
  let a1 = [], a2 = [];
  let n1 = node1;
  let n2 = node2;
  let first = null;
  while (n1 != null || n2 != null){
    if (n1 != null){ a1.unshift(n1); }
    if (n2 != null){ a2.unshift(n2); }
    n1 = n1 == null ? null : n1.parent;
    n2 = n2 == null ? null : n2.parent;
  }
  while (a2.length > 0){
    let n = a2.pop();
    for (let i=0; i<a1.length; i++){
      if (a1[i] == n) { first = n; }
    }
  }
  return first;
};


console.log(firstAncestor(bt, bt.root.left, bt.root.right));
