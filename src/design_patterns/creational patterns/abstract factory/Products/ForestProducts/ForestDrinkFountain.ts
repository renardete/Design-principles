import { IDrinkFountain } from "../IDrinkFountain";

export class ForestDrinkFountain implements IDrinkFountain{
  capacity: Number;
  constructor(){
    this.capacity = 100;
  }
}