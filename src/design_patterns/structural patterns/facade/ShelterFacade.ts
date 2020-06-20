import { Shelter } from "./Shelter"
import { Adopter } from "./Adoptee";
import { Dog } from "./Dog";

export class ShelterFacade {
  shelter: Shelter;

  constructor(){
    this.shelter = new Shelter();
  }

  adoptAnimal(adopterName: string, animalName: string){
    let adopter = new Adopter(adopterName);
    let animal = new Dog(animalName);
    adopter.adopt(animal);
    this.shelter.registerAdopter(adopter)
  }
}