'use strict';

/*
 * Given a binary tree, design an algorithm which creates a linked list
 * of all the nodes at each depth (e.g., if you have a tree with depth D,
 * you'll have D linked lists
 */

class TreeNode{
  constructor(v){
    this.data = v;
    this.left = null;
    this.right = null;
  }
};

class BinaryTree{
  constructor(){
    this.root = null;
  }
  insert(v){
    console.log('INSERT', v);
    this.root = this.insertNode(this.root, v);
  }
  insertNode(node, v){
    if (node == null) { return new TreeNode(v); }
    if (v < node.data){
      node.left = this.insertNode(node.left, v);
    } else {
      node.right = this.insertNode(node.right, v);
    }
    return node;
  }
};

class TreeDepths{
  constructor(G){
    this.G = G;
    this.depths = [];
    this.createDepths(G);
  }
  createDepths(G){
    let top = [];
    let children = [];
    top.unshift(G.root);
    while (top.length > 0){
      top.forEach((n) => {
        console.log('N', n);
        if (n && n.left){ children.push(n.left); }
        if (n && n.right) { children.push(n.right); }
      });
      console.log('TOP', top);
      this.depths.push(top);
      top = children;
      children = [];
    }
  }
};


let bt = new BinaryTree();
[3, 1, 5, 2, 4].forEach((v) => bt.insert(v));
console.log('BT', bt);
let treeDepths = new TreeDepths(bt);
treeDepths.depths.forEach((d) => {
  console.log(d.map((d) => d.data).join(', '));
});
