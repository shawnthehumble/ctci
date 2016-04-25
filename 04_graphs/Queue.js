'use strict';

class Node{
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
};

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.N = 0;
  }
  enqueue(data){
    if (this.head == null){ this.head = new Node(data, null); }
    else if (this.tail == null){
      this.tail = new Node(data, null);
      this.head.next = this.tail;
    } else {
      let oldtail = this.tail;
      this.tail = new Node(data, null);
      oldtail.next = this.tail;
    }
    this.N++;
  }
  dequeue(){
    if (this.isEmpty()) { return; }
    let oldhead = this.head;
    this.head = oldhead.next;
    this.N--;
    return oldhead;
  }
  size(){ return this.N; }
  isEmpty(){ return this.N == 0; }
  forEach(func){
    let head = this.head;
    while (head != null){
      func(head);
      head = head.next;
    }
  }
  toString(){
    let str = '[';
    this.forEach((v) => {
      str += v.data + ', ';
    });
    return str + ']';
  }
};

module.exports = {
  Queue,
};
