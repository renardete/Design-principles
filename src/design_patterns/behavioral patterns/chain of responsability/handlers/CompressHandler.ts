import { BaseDonationHandler } from "../BaseDonationHandler";
import { RequestDonation } from "../RequestDonation";

export class CompressHandler extends BaseDonationHandler{

  handle(request: RequestDonation): void {
    request.donation += ' compress'
    if(this.nextHandler){
      this.nextHandler.handle(request);
    }
  }
}
