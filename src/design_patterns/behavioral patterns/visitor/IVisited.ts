import { AnimalVisitor } from "./AnimalVisitor";

export interface IVisited {

  hungryLevel(visitor: AnimalVisitor): string;
}