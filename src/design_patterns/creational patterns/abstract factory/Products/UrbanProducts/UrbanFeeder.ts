import { IFeeder } from "../IFeeder";

export class UrbanFeeder implements IFeeder{
  maxAnimalFeed: Number;
  constructor(){
    this.maxAnimalFeed = 2
  }
}