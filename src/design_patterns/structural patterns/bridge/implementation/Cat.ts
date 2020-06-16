import { IAnimal } from "./IAnimal";

export class Cat implements IAnimal{
  energy: number;
  hydration: number;

  constructor(){
    this.energy = 1;
    this.hydration = 1;
  }

  feed(): void {
    this.energy+=2;
  }
  drink(): void {
    this.hydration+=3;
  }
  play(): void {
    this.energy=0
    this.hydration--;
  }
}