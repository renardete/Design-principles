import { BaseDonationHandler } from "../BaseDonationHandler";
import { RequestDonation } from "../RequestDonation";

export class SecureHandler extends BaseDonationHandler{

  handle(request: RequestDonation): void {
    request.donation += ' secure'
    if(this.nextHandler){
      this.nextHandler.handle(request);
    }
  }
}
