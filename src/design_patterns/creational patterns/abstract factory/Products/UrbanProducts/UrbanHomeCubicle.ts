import { IHomeCubicles } from "../IHomeCubicles";

export class UrbanHomeCubicle implements IHomeCubicles{
  guests: String[];
  constructor(guests: String[]){
    this.guests = guests;
  }
}