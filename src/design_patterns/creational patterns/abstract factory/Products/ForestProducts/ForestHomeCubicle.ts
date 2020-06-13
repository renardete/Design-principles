import { IHomeCubicles } from "../IHomeCubicles";

export class ForestHomeCubicle implements IHomeCubicles{
  guests: String[];
  constructor(guests: String[]){
    this.guests=guests;
  }
}