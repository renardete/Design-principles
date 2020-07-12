import { IStateDonation } from "./IStateDonation";
import { Donation } from "../Donation";
import { RequestedDonation } from "./RequestedDonation";

export class RegisteredDonation implements IStateDonation {
  stage = "registered"
  donation: Donation;
  constructor(donation: Donation){
    this.donation = donation;
  }
  processDonation(): void {
    this.donation.changeState(new RequestedDonation(this.donation))
  }

}
