import { IDrinkFountain } from "../IDrinkFountain";

export class UrbanDrinkFountain implements IDrinkFountain{
  capacity: Number;

  constructor(){
    this.capacity = 50;
  }
}