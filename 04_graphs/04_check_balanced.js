'use strict';

/*
 * Implement a function to check if a binary tree is balanced.
 * For the purposes of the question, a balanced tree is defined
 * to be a tree such that the heights of the 2 subtrees of any
 * node never differ by more than one.
 */

class TreeNode{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
};

class BinaryTree{
  constructor(){
    this.root = null;
  }
  insert(data){
    this.root = this.insertNode(this.root, data);
  }
  insertNode(node, data){
    if (node == null){ return new TreeNode(data); }
    let q = [node];
    while (q.length > 0){
      let n = q.shift();
      if      (n.left == null )   { n.left = new TreeNode(data); break; }
      else if (n.right == null )  { n.right = new TreeNode(data); break; }
      else {
        console.log('N', n.data);
        q.unshift(n.left);
        q.unshift(n.right);
      }
    }
    return node;
  }
  iterator(func){
    let q = [this.root];
    while (q.length > 0){
      let n = q.pop();
      console.log('N', n.data);
      func(n);
      if (! n.left || ! n.right ) { break; }
      else {
        if (n.left) { q.unshift(n.left); }
        else if (n.right) { q.unshift(n.right); }
      }
    }
  }
  toString(){
    let str = '';
    this.iterator((n) => {
      str += n.data + '\n';
    });
    return str;
  }
};

let bt = new BinaryTree();
let a = [1, 3, 5, 2, 6, 7];
a.forEach((v) => bt.insert(v));
console.log(bt.toString());
console.log(bt.root);
