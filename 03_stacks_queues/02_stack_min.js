'use strict';

/*
 * How would you design a stack which, in addition to push and pop,
 * has a function which returns the minimum element? Push and pop and min()
 * should all operate in O(1) time.
 */

let Stack = require('./Stack').Stack;
let Node = require('./Stack').Node;

class MinStack extends Stack{
  constructor(){
    super();
    this.min = null;
  }
  push(data){
    let oldfirst = this.first;
    this.first = new Node(data, null, oldfirst);
    if (!! oldfirst ) { oldfirst.next = this.first; }
    if (! this.min || data < this.min.data ) {
      this.min = this.first;
    }
  }
  pop(){
    let oldfirst = this.first;
    this.first.prev.next = null;
    return oldfirst;
  }
};

let arr = [5, 3, 4, 7, 6, 9];
let stack = new MinStack();
arr.forEach((v) => stack.push(v));
console.log(stack.toString());
console.log(stack.min);
