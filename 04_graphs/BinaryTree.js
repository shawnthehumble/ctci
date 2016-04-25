'use strict';

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
  isEmpty(){ return this.root == null; }
  insert(v){
    if (this.root == null){ this.root = new TreeNode(v, null); }
    else {
      let q = [];
      q.unshift(this.root);
      while (q.length > 0){
        let node = q.shift();
        if (! node.left){
          node.left = new TreeNode(v, node);
        } else if (! node.right){
          node.right = new TreeNode(v, node);
        } else {
          q.unshift(node.left);
          q.unshift(node.right);
        }
      }
    }
  }
};

class BST{
  constructor(){
    this.root = null;
  }
  isEmpty(){
    return this.root == null;
  }
  insert(val){
    this.root = this.insertNode(this.root, val);
  }
  insertNode(node, val){
    if (node == null) { return new TreeNode(val); }
    if (val < node.data){
      node.left = this.insertNode(node.left, val);
    } else {
      node.right = this.insertNode(node.right, val);
    }
    return node;
  }
  iterator(node, func, side, i, parentSide){
    if (i == undefined) { i = 1; }
    func(node, side, i, parentSide);
    if (node.right == null && node.left == null ) { return; }
    let l = node.left;
    let r = node.right;
    if (parentSide == 'left'){ i++; }
    if (l != null){
      this.iterator(l, func, 'left', i, side);
    }
    if (r != null){
      this.iterator(r, func, 'right', i, side);
    }
  }
};

module.exports = {
  BST,
  BT,
  TreeNode,
};
