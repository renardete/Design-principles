export abstract class IShelterDonationService{
  abstract quantityRequest?: Number;
  abstract recipient: String
  constructor(){}
  public abstract makeDonationRequest():IShelterDonationService;
}