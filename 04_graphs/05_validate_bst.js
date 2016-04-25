'use strict';

/*
 * Implement a function to check if a binary tree is a binary
 * search tree.
 */

class BST{
  constructor(){
    this.root = null;
  }
  insert(data){
    this.root = this.insertNode(this.root, data);
  }
  insertNode(node, data){

  }
};

function isBalanced(tree){

};


let bst = new BST();
let a = [1, 3, 5, 4, 6];
a.forEach((v) => bst.insert(v));
console.log('IS BALANCED', isBalanced(bst));
