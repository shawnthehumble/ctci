'use strict';

/*
 * Given a circular linked list, implement an algorithm that returns the node at the
 * beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points
 * to an earlier node, so as to make a loop in the linked list.
 * 
 * EXAMPLE
 * Input a -> b -> c -> d -> e -> c (the same C as earlier)
 * Output C
 */

let LinkedList = require('./LinkedList').LinkedList;
let Node = require('./LinkedList').Node;

function circularListStart(list){
   
};

let list1 = new LinkedList([1, 4, 6, 5, 2]);
console.log(list1.iterator());
let n = list1.head;
let n2;
let c = 0;
while (n.next != null){
  c++;
  if (c == 2 ){
    n2 = n;
  }
  n = n.next;
}
n.next = n2;
console.log(list1);

