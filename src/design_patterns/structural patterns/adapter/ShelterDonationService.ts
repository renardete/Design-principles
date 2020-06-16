import { IShelterDonationService } from "./IShelterDonationService";

export class ShelterDonationService implements IShelterDonationService{
  quantityRequest: Number;
  recipient: String;

  constructor(quantityRequest: Number, recipient: String){
    this.quantityRequest= quantityRequest;
    this.recipient = recipient
  }

  makeDonationRequest(): IShelterDonationService {
    return this;
  }

}