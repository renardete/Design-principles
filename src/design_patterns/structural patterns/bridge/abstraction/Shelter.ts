import { Animal } from "../../../creational patterns/prototype/Animal";
import { IAnimal } from "../implementation/IAnimal";

export class Shelter {

  animal: IAnimal;

  constructor(animal: IAnimal){
    this.animal = animal;
  }

  public feedAnimal(){
    this.animal.feed();
  }
  public hydrateAnimal(){
    this.animal.drink();
  }
  public playAnimal(){
    this.animal.play();
  }

}