import { type } from "os";

export class ComunityDonationService {

  quantityRequest: Number;

  constructor(quantityRequest: Number){
    this.quantityRequest = quantityRequest;
  }

  public makeRequest(): ComunityDonationService{
    //Call external service to make a request
    return this;
  }
}