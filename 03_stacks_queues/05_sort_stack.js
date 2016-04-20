'use strict';

/*
 * Write a program to sort a stack such that the smallest items are on the top.
 * You can use and additional temporary stack, but you may not copy the elements into
 * any other data structure (such as an array). The stack supports the following operations:
 * push, pop, peek, and isEmpty
 */

let Stack = require('./Stack').Stack;
let Node = require('./Stack').Node;

function sortStack(stack){
  let len = stack.N;
  let min = null;
  let result = new Stack();
  let temp = new Stack();
  while (! stack.isEmpty()) {
    let el = stack.pop();
    if (min == null ){
      min = el.data;
    } else if (el.data < min){
      temp.push(min);
      min = el.data;
    } else {
      temp.push(el.data);
    }
    if (stack.N == 0 ) {
      while (temp.N > 0){
        stack.push(temp.pop().data);
      }
      result.push(min);
      min = null;
    }
  }
  return result.toString();

};

let stack = new Stack([1, 4, 2, 5, 7]);
console.log('STACK', stack.toString());
console.log(new Stack().isEmpty());
console.log(stack.isEmpty());
console.log(sortStack(stack));
