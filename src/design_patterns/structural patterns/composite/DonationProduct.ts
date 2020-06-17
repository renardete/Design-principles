import { IDonation } from "./IDonation";

export class DonationProduct implements IDonation{
  name: String;
  constructor(name: string){
    this.name = name;
  }
  donate(): DonationProduct {
    return this;
  }
}