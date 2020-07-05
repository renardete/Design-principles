import { IAnimalIterator } from "./IAnimalIterator";
import { AnimalCollection } from "./AnimalCollection";

export class AnimalIterator implements IAnimalIterator{
  animalCollection: AnimalCollection;
  index: number;

  constructor(animalCollection: AnimalCollection){
    this.animalCollection = animalCollection;
    this.index = 0;
  }

  getNext(): string {
    const animalNames = this.animalCollection.animalNames
    const response = animalNames[this.index]
    if(this.index < animalNames.length){
      this.index++
    }else{
      this.index = 0;
    }
    return response;
  }
  hasMore(): boolean {
    return this.index < this.animalCollection.animalNames.length;
  }

}