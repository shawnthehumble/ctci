'use strict';

/*
 Implement a function to check if a linked list is a palindrome
*/

let LinkedList = require('./LinkedList').LinkedList;
let Node = require('./LinkedList').Node;

function isPalindrome(list){
  let reversed = reverseList(list);
  let n = list.head;
  let n2 = reversed.head;
  while (n != null){
    if (n.item != n2.item){ return false; }
    n = n.next;
    n2 = n2.next;
  }
  return true;
};

function reverseList(list){
  let queue = [];
  let n = list.head;
  while (n != null){
    queue.unshift(n.item);
    n = n.next;
  }
  return new LinkedList(queue);
};


let list1 = new LinkedList([1, 2, 2, 1]);
console.log(isPalindrome(list1));
let list2 = new LinkedList([1, 2, 1]);
console.log(isPalindrome(list2));
let list3 = new LinkedList([1, 2, 3]);
console.log(isPalindrome(list3));
