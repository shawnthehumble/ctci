'use strict';

/*
 * You are implementing a binary tree class from scratch, which, in addition to insert,
 * find, and delete, has a method getRandomNode() which returns a random node
 * from the tree. All nodes should be equally likely to be chosen. Design and
 * implement an algorithm for getRandomNode, and explain how you would implement
 * the rest of the methods.
 */


class TreeNode{
  constructor(data, parent){
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
};

class BT{
  constructor(){
    this.root = null;
    this.N = 0;
    this.bottom = [];
  }
  insert(v){
    if (this.root == null) { this.root = new TreeNode(v, null); }
    else {
      let q = [];
      q.unshift(this.root);
      while (q.length > 0){
        let n = q.shift();
        if (! n.left ) { n.left = new TreeNode(v, n); }
        else if (! n.right) { n.right = new TreeNode(v, n); }
        else {
          q.unshift(n.left);
          q.unshift(n.right);
        }
      }
    }
  }
};

