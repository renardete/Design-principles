import { DonationDecorator } from "../DonationDecorator";
import { IDonation } from "../IDonation";

export class PretifyDecorator extends DonationDecorator{

  package(pack: string): IDonation {
    let prettyPack = pack+'-pretty'
    let packageDonation = this.wrappee.package(prettyPack);
    return packageDonation;
  }
}