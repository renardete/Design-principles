import { DonationDecorator } from "../DonationDecorator";
import { IDonation } from "../IDonation";

export class SecurityDecorator extends DonationDecorator{

  package(pack: string): IDonation {
    let securePack = pack+'-secure'
    let packageDonation = this.wrappee.package(securePack);
    return packageDonation;
  }
}