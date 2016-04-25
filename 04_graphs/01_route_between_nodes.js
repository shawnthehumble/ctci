'use strict';

/*
 * GIven a directed graph, design an algorithm to find out whether
 * there is a route between 2 nodes.
 */

'use strict';

let DirectedGraph = require('./Graph').DirectedGraph;
let Queue = require('./Queue').Queue;

let digraph = new DirectedGraph(10);

let arr = [
  [1, 3],
  [3, 4],
  [4, 8],
  [7, 8],
  [5, 2]
];

arr.forEach((p) => {
  digraph.addEdge(p[0],p[1])
});

function hasPathTo(G, v, w){
  let marked = new Array(G.getV()).fill(false);
  let q = new Queue();
  marked[v] = true;
  q.enqueue(v);
  while (! q.isEmpty()) {
    let n = q.dequeue();
    G.adj[n.data].forEach((a) => {
      if (! marked[a.data] ){
        marked[a.data] = true;
        q.enqueue(a.data);
      }
    });
  }
  return marked[w];
};

console.log(hasPathTo(digraph, 1, 8));
console.log(hasPathTo(digraph, 3, 7));
