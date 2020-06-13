import { IFeeder } from "../IFeeder";

export class ForestFeeder implements IFeeder{
  maxAnimalFeed: Number;
  constructor(){
    this.maxAnimalFeed = 6;
  }
}