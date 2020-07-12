import { AnimalVisitor } from "./AnimalVisitor";
import { IVisited } from "./IVisited";
import { Interface } from "readline";

export class Dog implements IVisited{
  hunger: number;
  constructor(hunger: number){
    this.hunger = hunger;
  }
  hungryLevel(visitor: AnimalVisitor): string {
    return visitor.visitDog(this);
  }
}