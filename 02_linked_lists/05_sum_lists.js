'use strict';

/*
 * You have 2 numbers represented by a linked list, where each node contains a single digit.
 * The digits are stored in reverse order, such that the 1's digit is at the head of the list.
 * Write a function that adds the 2 numbers and returns the sum as a linked list.
 * EXAMPLE
 * Input (7 -> 1 -> 6 ) + ( 5 -> 9 -> 2 ).  That is, 617 + 295
 * Output ( 2 -> 1 -> 9 ). That is, 912
 * FOLLOW UP 
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * EXAMPLE
 * Input: (6 -> 1 -> 7) + ( 2 -> 9 -> 5 ). That is, 617.
 * Output: 9 -> 1 -> 2. That is, 912. 
 */

let LinkedList = require('./LinkedList').LinkedList;
let Node = require('./LinkedList').Node;


function addLists(list1, list2){
  let l1 = list1.head;
  let l2 = list2.head;
  let sum = 0;
  let pw = 1;
  while (l1 != null || l2 != null){
    let num1 = l1.item || 0, num2 = l2.item || 0;
    sum += pw*(num1 + num2);
    pw *= 10;
    l1 = l1.next;
    l2 = l2.next;
  }
  console.log('SUM', sum);
  return sum;
};

function addListsForward(list1, list2){
  return addLists(reverseList(list1), reverseList(list2));
};

function reverseList(list){
  let queue = [];
  let n = list.head;
  while (n != null){
    queue.unshift(n.item);
    n = n.next;
  }
  list = new LinkedList(queue);
  return list;
};

let list1 = new LinkedList([7, 1, 6]);
let list2 = new LinkedList([5, 9, 2]);
let sum = addLists(list1, list2);
let sum2 = addListsForward(list1, list2);
console.log(list1.iterator());
console.log(list2.iterator());
console.log('SUM', sum);
console.log('SUM 2', sum2);
