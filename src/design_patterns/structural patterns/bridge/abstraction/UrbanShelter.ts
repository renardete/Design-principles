import { Shelter } from "./Shelter";

export class UrbanShelter extends Shelter{
  public feadHydrateAnimal(){
    this.animal.feed();
    this.animal.drink();
  }
}