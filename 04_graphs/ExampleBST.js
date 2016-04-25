'use strict';

let BST = require('./BinarySearchTree').BST;

let bst = new BST();

let arr = [1, 2, 3, 8, 4, 6, 5, 7];

arr.forEach((v) => bst.insert(v));

module.exports = {
  bst,
};
