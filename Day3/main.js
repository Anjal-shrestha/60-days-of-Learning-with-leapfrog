// main.js
import { Person } from './person.js';
import { Learner } from './learner.js';
const person = new Person('Tattu', 30);
console.log(person.greet()); // Hello, my name is Tattu and I am 30 years old.

const learner = new Learner('Anjal', 21, '3'); // Use 'learner' for the instance
console.log(learner.greet()); // Hello, my name is Anjal and I am 21 years old.
console.log(learner.study()); // Anjal is doing the 60 days challenge and it's day 3.
