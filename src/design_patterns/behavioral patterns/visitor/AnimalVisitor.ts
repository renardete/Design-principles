import { Dog } from "./Dog";
import { Cat } from "./Cat";

export class AnimalVisitor {

  visitDog(dog: Dog):string{
    return `dog hunger: ${dog.hunger}`
  }

  visitCat(cat: Cat): string{
    return `cat hunger: ${cat.hunger}`
  }
}