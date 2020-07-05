import { IAnimalCollection } from "./IAnimalCollection";
import { IAnimalIterator } from "./IAnimalIterator";
import { AnimalIterator } from "./AnimalIterator";

export class AnimalCollection implements IAnimalCollection{
  animalNames: string[];
  constructor(){
    this.animalNames = [];
  }

  addAnimal(animalName: string):void{
    this.animalNames.push(animalName);
  }

  getIterator(): IAnimalIterator {
    return new AnimalIterator(this)
  }

}