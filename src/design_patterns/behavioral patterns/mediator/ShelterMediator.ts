import { IShelterMediator } from "./IShelterMediator";
import { Component } from "./components/IComponent";
import { Animal } from "./components/Animal";
import { Adopter } from "./components/Adopter";

export class ShelterMediator implements IShelterMediator{
  countAnimals: number;
  adopters: string[];
  constructor(){
    this.countAnimals = 10;
    this.adopters = []
  }

  notify(sender: Component, event: string): void {
    if(sender as Animal && event === 'getAdopted'){
      this.countAnimals--;
    }
    else if(sender as Adopter && event === 'register'){
      this.adopters.push((sender as Adopter).name)
    }
  }

}