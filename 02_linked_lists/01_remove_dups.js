'use strict';

/*
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 */

let LinkedList = require('./LinkedList').LinkedList;
let Node = require('./LinkedList').Node;

function removeDups(list){
  let counts = {};
  let i = list.head;
  counts[i.item] = 1;
  while (i.next != null ) {
    if (i.next && i.next.item && counts[i.next.item] > 0){
      let newNext = i.next.next;
      i.next = newNext;
    } else if (i.next && i.next.item ) {
      counts[i.next.item] = 1;
      i = i.next;
    }
  }
};






let list = new LinkedList([1, 4, 2, 1, 1, 7, 7, 9]);
console.log('LIST', list.iterator());
removeDups(list);
console.log('LIST', list.iterator());
