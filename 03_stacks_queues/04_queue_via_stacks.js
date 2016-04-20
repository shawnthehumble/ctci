'use strict';

/*
 * Implement a MyQueue class which implements a queue using 2 stacks.
 */

let Stack = require('./Stack').Stack;
let Node = require('./Stack').Node;

class MyQueue{
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(data){
    if (this.stack1.N > this.stack2.N ){
      this.stack2.push(data);
    } else {
      this.stack1.push(data);
    }
  }
  dequeue(){
    if (this.stack1.N >= this.stack2.N ){
      this.stack1.pop();
    } else {
      this.stack2.pop();
    }
  }
};

let queue = new MyQueue();

let arr = [4, 3, 2, 5, 6, 7, 9, 8, 0, 1];
arr.forEach((v) => queue.enqueue(v));
console.log(queue.stack1.toString());
console.log(queue.stack2.toString());
while (queue.stack1.N > 0){
  queue.dequeue();
  console.log(queue.stack1.toString(), queue.stack1.N);
  console.log(queue.stack2.toString());
}
