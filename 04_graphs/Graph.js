'use strict';

class Node{
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
};

class Bag{
  constructor(){
    this.head = null;
    this.N = 0;
  }
  add(data){
    if (this.head == null) { this.head = new Node(data, null); }
    else {
      let oldhead = this.head;
      this.head = new Node(data, oldhead);
    }
    this.N++;
  }
  remove(data){
    if (this.head && this.head.data == data){
      let oldhead = this.head;
      this.head = oldhead.next;
      if (this.N > 0) { this.N--; }
      return oldhead;
    } else {
      this.forEach((n) => {
        if (n.next && n.next.data == data){
          let oldnext = n.next;
          n.next = oldnext.next;
          if (this.N > 0) { this.N--; }
          return oldnext;
        }
      });
    }
  }
  forEach(func){
    let head = this.head;
    while (head != null){
      func(head);
      head = head.next;
    }
  }
  isEmpty(){ return this.N == 0; }
  size() { return this.N; }
  toString(){
    let str = '[';
    this.forEach((n) => {
      str += n.data + ', ';
    });
    return str + ']';
  }
};

class DirectedGraph{
  constructor(V){
    this.V = V;
    this.E = 0;
    this.adj = new Array(V).fill(0).map((v) => new Bag()); 
  }
  addEdge(v, w){
    this.adj[v].add(w);
    this.E++;
  }
  getV(){ return this.V; }
  getE(){ return this.E; }
};

class Graph{
  constructor(V){
    this.V = V;
    this.E = 0;
    this.adj = new Array(V).fill(new Bag());
  }
  addEdge(v, w){
    this.adj[v].add(w);
    this.adj[w].add(v);
  }
  getV(){ return this.V; }
  getE(){ return this.E; }
};

module.exports = {
  DirectedGraph,
  Graph,
  Node,
  Bag
};
