'use strict';

/*
 * You are given a list of projects and a list of dependencies (which is a list
 * of pairs of projects, where the first project is dependent on the 2nd project).
 * All of a project's dependencies must be built before the project is.
 * Find a build order that will allow the projects to be built. If there is no
 * valid build order, return an error.
 *
 * EXAMPLE
 * Input:
 * projects: a, b, c, d, e, f
 * dependencies: (d, a), (b, f), (d, b), (a, f), (c, d)
 *
 * Ouput: f, e, a, b, d, c
 */

let Graph = require('./Graph').Graph;
let Queue = require('./Graph').Queue;
let Bag = require('./Graph').Bag;

class Digraph{
  constructor(V, a){
    this.V = V;
    this.E = 0;
    this.adj = {}; 
    a.forEach((v) => {
      this.adj[v] = new Bag();
    });
  }
  getV(){ return this.V; }
  getE(){ return this.E; }
  addEdge(v, w){
    this.adj[v].add(w);
    this.E++;
  }
};

let PROJECTS = ['a', 'b', 'c', 'd', 'e', 'f'];
let DEPENDENCIES = [
  ['d', 'a'],
  ['b', 'f'],
  ['d', 'b'],
  ['a', 'f'],
  ['c', 'd'],
];

function buildOrder(projects, dependencies){
  let graph = new Digraph(projects.length, projects);
  dependencies.forEach((p) => graph.addEdge(p[0], p[1]));
  console.log('GRAPH', graph);
  let q = [];
  let order = [];
  let keys = Object.keys(graph.adj);
  q.unshift(keys.shift());
  while (! q.length > 0){
    let n = q.shift();
    graph.adj[n].iterator((v) => {
      order.push(v.data);
      q.unshift(v.data);
    });
  }
};

buildOrder(PROJECTS, DEPENDENCIES);
