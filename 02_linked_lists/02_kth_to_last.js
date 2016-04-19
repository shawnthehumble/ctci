'use strict';

/*
 * Implement an algorithm to find the kth to last element of a singly linked list
 */

let LinkedList = require('./LinkedList').LinkedList;
let Node = require('./LinkedList').Node;

function kthToLast(list, num){
  let arr = new Array(num);
  let i = list.head;
  while (i != null){
    arr.pop();
    arr.unshift(i.item);
    i = i.next;
  }
  return arr.pop();
};


let list = new LinkedList([2, 4, 5, 7, 4, 6, 1, 2, 9]);
console.log(list.iterator());
let item = kthToLast(list, 3);
console.log('3rd to last', item);

