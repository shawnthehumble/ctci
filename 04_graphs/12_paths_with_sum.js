'use strict';

/*
 * You are given a binary tree in which each node contains an integer value
 * (which might be positive or negative). Design an algorithm to count
 * the number of paths that sum to a given value. The path does not need to start
 * or end at the root or a leaf, but it must go downwards (traveling only from parent
 * nodes to child nodes).
 */

let BST = require('./BinaryTree').BST;

let a = [5, 2, 3, 7, 8, 9];

let bst = new BST();

a.forEach((v) => bst.insert(v));


function hasSum(tree, sum, node){
  if (node.data > sum ) { return null; }
  let count = 0;
};







