import { IDonation } from "./IDonation";

export class DonationPackage implements IDonation{
  children: IDonation[];

  constructor(){
    this.children = []
  }
  donate(): DonationPackage {
    return this;
  }

  addDonation(donation: IDonation): void{
    this.children.push(donation);
  }

}