
import { IDonationService } from "./IDonationService";
import { Donation } from "./Donation";

export class DonationServiceProxy implements IDonationService{
  donationService: IDonationService;
  cache?: Donation;

  constructor(donationService: IDonationService){
    this.donationService = donationService;
  }

  donate(donation: Donation): void {
    this.cache = donation
    this.donationService.donate(donation)
  }

}