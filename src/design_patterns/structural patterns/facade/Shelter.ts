import { Dog } from "./Dog";
import { Adopter } from "./Adoptee";

export class Shelter {
  animal?: Dog | null;
  adopter?: Adopter | null;
  constructor(){}

  registerAdopter(adopter:Adopter){
    this.adopter = adopter;
    this.animal = adopter.adoptee;
  }
}