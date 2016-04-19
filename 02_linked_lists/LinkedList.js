'use strict';

class Node{
  constructor(item, next){
    this.item = item;
    this.next = next;
  }
};

class LinkedList{
  constructor(arr){
    this.head = null
    if (!! arr ) {
      for (let i=0; i<arr.length; i++){
        this.addNode(arr[i]);
      }
    }
  }
  deleteNode(item){

  }
  addNode(item){
    if (! this.head ) {
      this.head = new Node(item); 
      return;
    }
    let last = this.head;
    while (last.next != null){
      last = last.next;
    }
    last.next = new Node(item, null);
  }
  iterator(){
    let arr = [];
    let head = this.head;
    arr.push(head);
    while (head.next != null){
      head = head.next;
      arr.push(head);
    }
    return arr;
  }
};

module.exports = {
  Node,
  LinkedList,
};
