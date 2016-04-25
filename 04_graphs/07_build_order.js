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

class DFS{
  constructor(G, s){
    
  }
};
