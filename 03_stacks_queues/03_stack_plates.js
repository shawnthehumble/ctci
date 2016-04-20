'use strict';

/*
 * Imagin a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
 * threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
 * composed of several stacks and should create a new stack once the previous one exceeds
 * capacity. SetOfStacks.push(), pop() should behave identically to a single stack
 * 
 * FOLLOW UP
 * Implement a function popAt(idx) which performs a pop operation on a specific sub-stack.
 */

let Stack = require('./Stack').Stack;
let Node = require('./Stack').Node;

class StackOfPlates{
  constructor(limit){
    this.limit = limit;
    this.stacks = [ new Stack() ]
  }
  pop(){
    let s = this.stacks[this.stacks.length-1];
    if (s.N == 0){
      this.stacks.pop();
      s = this.stacks[this.stacks.length-1];
    }
    s.pop();
  }
  popAt(idx){
    if (idx < 0 || idx >= this.stacks.length ) { return null }
    let stack = this.stacks[idx];
    if (stack.N == 0){ return null; }
    stack.pop();
  }
  push(data){
    let s = this.stacks[this.stacks.length-1];
    if (s.N >= this.limit ){
      s = new Stack();
      this.stacks.push(s);
    }
    s.push(data);
  }
};

let stack = new StackOfPlates(3);
let arr = [4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((v) => stack.push(v));
stack.stacks.forEach((s) => console.log(s.toString()));
