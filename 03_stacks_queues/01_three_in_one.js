'use strict';

/*
 * Describe how you could use a single array to implement 3 stacks
 */

let Stack = require('./Stack').Stack;
let Node = require('./Stack').Node;

class ThreeWayStack{
  constructor(){
    this.arr = [new Stack(), new Stack(), new Stack()]
    this.idx = 0;
  }
  push(data){
    this.arr[this.idx].push(data);
    this.changeIdx();
  }
  changeIdx(){
    if (this.idx < 2 ) { this.idx++; } 
    else { this.idx = 0; }
  }
  toString(){
    let str = '';
    for (let i=0; i<3; i++){
      str += this.arr[i].toString() + '\n';
    }
    return str;
  }
};

let stack = new ThreeWayStack();
let arr = [1, 4, 2, 5, 7, 9, 0];
arr.forEach((v) => stack.push(v));
console.log(stack.toString());
