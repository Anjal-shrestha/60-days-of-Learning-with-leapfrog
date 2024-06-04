// learner.js
import { Person } from "./person.js";

export class Learner extends Person {
  constructor(name, age, day) {
    super(name, age);
    this.day = day; 
  }

  study() {
    return `${this.name} is doing the 60 days challenge and it's day ${this.day}.`;
  }
}
