import { IDonationService } from "./IDonationService";
import { Donation } from "./Donation";

export class DonationService implements IDonationService{
  donate(donation: Donation): void {
    donation.donated=true;
  }
  
}