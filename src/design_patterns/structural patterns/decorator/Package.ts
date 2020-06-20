import { IDonation } from "./IDonation";

export class Package implements IDonation{
  name: string;
  constructor(name: string){
    this.name = name;
  }
  package(pack: string): IDonation {
    this.name += pack
    return this;
  }

}