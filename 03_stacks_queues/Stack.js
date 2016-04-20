'use strict';


class Node{
  constructor(data, next, prev){
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
};

class Queue{
  constructor(arr){
    console.log('ARR', arr);
    this.head = null;
    this.tail = null;
    this.N = 0;
    if (arr != undefined){
      console.log('ARR', arr);
      arr.forEach((v) => this.enqueue(v));
    }
  }
  enqueue(data){
    if (this.head == null){
      this.head = new Node(data, null, null);
    } else if (this.tail == null){
      this.tail = new Node(data, null, this.head);
      this.head.prev = this.tail;
    } else {
      let oldTail = this.tail;
      this.tail = new Node(data, null, oldTail);
      oldTail.prev = this.tail;
    }
    this.N++;
  }
  dequeue(){
    let oldTail = this.tail;
    let newTail = this.tail.prev;
    this.tail = newTail;
    this.N--;
    return this.tail;
  }
  isEmpty(){ return this.N == 0; }
  peek(){
    return this.head;
  }
  toString(){
    let str = '[';
    while (this.head != null){
      str += this.dequeue().data + ', ';
    }
    str += ']';
  }
};

class Stack{
  constructor(arr){
    this.first = null;
    this.N = 0;
    if (arr != undefined){
      arr.forEach((v) => this.push(v));
    }
  }
  push(data){
    let oldfirst = this.first;
    this.first = new Node(data, null, oldfirst);
    if (!! oldfirst ){
      oldfirst.next = this.first;
    }
    this.N++;
  }
  peek(){
    return this.first;
  }
  isEmpty(){
    return this.N == 0;
  }
  pop(){
    if (this.N == 0 ) { return; }
    let oldfirst = this.first;
    this.first = oldfirst.prev;
    if (!! this.first){
      this.first.next = null;
    }
    this.N--;
    return oldfirst;
  }
  toString(){
    let h = this.first;
    let str = '[';
    while (h != null) {
      str += h.data + ', ';
      h = h.prev;
    }
    str += ']';
    return str;
  }
};

module.exports = {
  Stack,
  Queue,
  Node,
};
