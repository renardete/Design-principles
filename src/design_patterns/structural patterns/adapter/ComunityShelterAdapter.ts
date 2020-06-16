import { IShelterDonationService } from "./IShelterDonationService";
import { ComunityDonationService } from "./ComunityDonationService";

export class ComunityShelterAdapter extends IShelterDonationService {
  quantityRequest?: Number | undefined;
  recipient: String;
  private comunityDonationService: ComunityDonationService;

  constructor(comunityDonationService: ComunityDonationService, recipient: String) {
    super();
    this.comunityDonationService = comunityDonationService;
    this.recipient = recipient;
  }

  public makeDonationRequest(): IShelterDonationService {
    let comunityDonation = this.comunityDonationService.makeRequest();
    this.quantityRequest = comunityDonation.quantityRequest
    return this;
  }


}