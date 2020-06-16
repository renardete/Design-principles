import { IAnimal } from "./IAnimal";

export class Dog implements IAnimal{
  energy: number;
  hydration: number;

  constructor(){
    this.energy = 1;
    this.hydration = 1;
  }

  feed(): void {
    this.energy+=5;
  }
  drink(): void {
    this.hydration+=2;
  }
  play(): void {
    this.energy-=2
    this.hydration--;
  }

}