import { Dog } from "./Dog";

export class Adopter {
  name: String;
  adoptee?: Dog | null;

  constructor(name: String){
    this.name = name;
  }

  adopt(dog: Dog): Dog{
    this.adoptee = dog;
    return this.adoptee;
  }

}