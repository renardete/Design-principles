import { ISubscriber } from "./ISubscriber";

export class Shelter implements ISubscriber{
  lastDonationMade?: string;
  constructor(){}

  update(lastDonation:string): void {
    this.lastDonationMade= lastDonation;
  }
}