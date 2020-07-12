import { IStateDonation } from "./IStateDonation";
import { Donation } from "../Donation";

export class DeliveredDonation implements IStateDonation{
  stage = "delivered"
  donation: Donation;
  constructor(donation: Donation){
    this.donation = donation;
  }
  processDonation(): void {
  }

}