import { AnimalVisitor } from "./AnimalVisitor";
import { IVisited } from "./IVisited";

export class Cat implements IVisited{
  hunger: number;
  constructor(hunger: number){
    this.hunger = hunger;
  }
  hungryLevel(visitor: AnimalVisitor): string {
    return visitor.visitCat(this)
  }
}