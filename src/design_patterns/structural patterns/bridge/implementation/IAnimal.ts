import { Animal } from "../../../creational patterns/prototype/Animal";

export interface IAnimal {
  energy: number;
  hydration: number;
  feed():void;
  drink():void;
  play():void;
}