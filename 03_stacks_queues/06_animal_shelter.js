'use strict';

/*
 * An animal shelter, which holds only dogs and cats, operates on a strictly
 * "first in, first out" basis. People must adopt either the "oldest" (based on
 * arrival time) of all animals at the shelter,or they can select whether they would
 * prefer a dog or a cat (and will remove the oldest arrival of that type). They cannot
 * select which specific animal they would like. Create the data structure to maintain
 * this system and implement operations such as enqueue, dequeueAny, dequeueDog, dequeueCat.
 * You may use the built-in LinkedList data structure.
 */

let Stack = require('./Stack').Stack;
let Queue = require('./Stack').Queue;
let Node = require('./Stack').Node;

class AnimalShelter{
  constructor(arr){
    this.dog = new Queue(arr);
    this.cat = new Queue(arr);
  }
  enqueue(type, name){
    switch(type){
      case 'DOG':
        this.dog.enqueue(name);
      break;
      case 'CAT':
        this.cat.enqueue(name);
      break;
    }
  }
  dequeueAny(){
    let rand = Math.random();
    if (rand < 0.5 || this.cat.N == 0 ){
      this.dog.dequeue();
    } else {
      this.cat.dequeue();
    }
  }
  dequeueDog(){
    this.dog.dequeue();
  }
  dequeueCat(){
    this.cat.dequeue();
  }
};

let arr = [1, 3, 5, 4, 6];

let shelter = new AnimalShelter(arr);
console.log('SHELTER', shelter.toString());
