/*
 * Intersection: Given 2 straight line segments (represented as a start point
 * and an end point), compute the point of intersection, if any.
 */

function intersection(l1, l2) {
  let s1 = l1.start;
  let s2 = l2.start;
  let e1 = l1.end;
  let e2 = l2.end;

  let c1 = ( e1.x - s1.x ) / ( e1.y - s1.y );
  let c2 = ( e2.x - s2.x ) / ( e2.y - s2.y );
  console.log('C', c1, c2);
};


let p1 = { start: { x: 0, y: 0 }, end: { x: 5, y: 5} };

let p2 = { start: { x: 1, y: 4 }, end: { x: 7, y: 4} };

intersection(p1, p2);
