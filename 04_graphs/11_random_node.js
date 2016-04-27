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
  }
  insert(v){
    this.root = this.insertNode(this.root, v);
  }
  insertNode(node, v){
    if (node == null) { return new TreeNode(v, null); }
    if (v > node.data){
      node.right = this.insertNode(node.right, v);
    } else {
      node.left = this.insertNode(node.left, v);
    }
    return node;
  }
  find(v){
    let n = this.root;
    while (n != null){
      if (v > n.data) {
        n = n.right;
      } else {
        n = n.left;
      }
    }
    if (n == null) { return -1; }
    else {
      return n;
    }
  }
  getRandomNode(){
    let a = [];
    let n = this.root;
    while (n != null){
      a.push(n);
      if (Math.random() < 0.5){ n = n.left; }
      else { n = n.right }
    }
    let idx = Math.floor(Math.random()*a.length);
    return a[idx];
  }
};

let a = [10, 4, 14, 23, 8, 3];
let bt = new BT();

a.forEach((v) => bt.insert(v));

console.log(bt.getRandomNode());
