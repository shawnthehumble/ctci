'use strict';

/*
 * Given 2 (singly) linked lists, determine if the 2 lists intersect. Return this intersecting
 * node. Note that the intersection is defined based on reference, not value. That is, the kth
 * node of the 1st linked list is the exact same node (by reference) as the jth node of the
 * 2nd linked list, then they are intersecting.
 */


let LinkedList = require('./LinkedList').LinkedList;
let Node = require('./LinkedList').Node;

function findIntersection(list1, list2){
  let n1 = list1.head;
  let n2 = list2.head;
  let c1 = 0;
  let c2 = 0;
  while (n1 != null){
    while (n2 != null) {
      console.log('N2', n2.item, n1.item);
      if (JSON.stringify(n2) == JSON.stringify(n1)) { return [c1, c2] }
      c2++;
      n2 = n2.next;
    }
    c1++;
    c2 = 0;
    n1 = n1.next;
    n2 = list2.head;
  }
  return -1;
};

let list1 = new LinkedList([1, 4, 2]);
let list2 = new LinkedList([4, 2, 3]);
let h = list1.head;
let h2 = list2.head;
for (let i=0; i<2; i++){
  h = h.next;
}
for (let i=0; i<1; i++){
  h2 = h2.next;
}
h.next = h2;
console.log(list1.iterator());
console.log(list2.iterator());
console.log(findIntersection(list1, list2));

