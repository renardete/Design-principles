import { IStateDonation } from "./IStateDonation";
import { Donation } from "../Donation";
import { DeliveredDonation } from "./DeliveredDonation";

export class RequestedDonation implements IStateDonation {
  stage = "requested"
  donation: Donation;
  constructor(donation: Donation){
    this.donation = donation;
  }
  processDonation(): void {
    this.donation.changeState(new DeliveredDonation(this.donation))
  }

}