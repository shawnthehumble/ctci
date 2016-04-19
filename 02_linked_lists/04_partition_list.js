'use strict';

/*
 * Write code to partition a linked list around a value x, such that all node
 * less than x come before all nodes greater than or equal to x. If x is contained
 * within the list, the values of x only need to be after the elements less than x
 * EXAMPLE
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
 * Ouput: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */

let LinkedList = require('./LinkedList').LinkedList;
let Node = require('./LinkedList').Node;

function partitionList(list, x){
  let gt = new LinkedList();
  let n = list.head;
  let xIndices = [];
  let c = 0;
  let hiX;
  while (n != null){
    if (n.item == x ){
      xIndices.push(c);
    } else if (n.item > x && hiX == undefined) {
      hiX = c;
    }
    c++;
    n = n.next;
  }
  if (xIndices.lenght ) {
    hiX = xIndices.pop();
  }
  c = 0, n = list.head;
  while (n != null) {
    while (n.next && n.next.item < x && c > hiX ){
      let oldNext = n.next;
      n.next = oldNext.next;
      gt.addNode(oldNext.item);
    }
    c++;
    n = n.next;
  }
  c = 0, n = list.head;
  while (n != null){
    gt.addNode(n.item);
    n = n.next;
  }
  list.head = gt.head;
};

let list = new LinkedList([3, 6, 8, 6, 10, 2, 1]);
console.log('INITIAL LIST', list.iterator());
partitionList(list, 5);
console.log('FINAL LIST', list.iterator());


