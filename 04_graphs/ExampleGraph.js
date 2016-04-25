'use strict';

let Graph = require('./Graph').Graph;
let DirectedGraph = require('./Graph').DirectedGraph;

let exampleGraph = new Graph(10);
let exampleDigraph = new DirectedGraph(10);

let arr = [
  [1, 3],
  [4, 2],
  [5, 6],
  [3, 8],
  [5, 1],
];

arr.forEach((p) => exampleGraph.addEdge(p[0],p[1]));
arr.forEach((p) => exampleDigraph.addEdge(p[0],p[1]));

module.exports = {
  exampleGraph,
  exampleDigraph,
};
