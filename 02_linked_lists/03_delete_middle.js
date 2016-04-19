'use strict';

/*
 * Implement an algorithm to delete a node in the middle of a singly linked list
 * given only access to that node.
 * EXAMPLE
 * Input: the node c from the linked list a -> b -> c -> d -> e
 * Result: nothing is returned, but the new linked list looks like a -> b -> d -> e
 */

let LinkedList = require('./LinkedList').LinkedList;
let Node = require('./LinkedList').Node;

function deleteMiddle(node){
  console.log('NODE', node);
  node = node.next;
  console.log('NODE', node)
};

let list = new LinkedList([3, 5, 6, 9, 0]);
let node = list.head;
for (let i=0; i<2; i++){
  node = node.next;
}
console.log(list.iterator());
deleteMiddle(node);
console.log(list.iterator());
