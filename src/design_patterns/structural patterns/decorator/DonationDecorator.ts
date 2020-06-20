import {IDonation} from './IDonation'

export class DonationDecorator implements IDonation{
  wrappee: IDonation;

  constructor(wrappee: IDonation){
    this.wrappee = wrappee;
  }

  package(pack: string): IDonation {
    let decoratePack = pack+'-decorate'
    let packageDonation = this.wrappee.package(decoratePack);
    return packageDonation;
  }


}