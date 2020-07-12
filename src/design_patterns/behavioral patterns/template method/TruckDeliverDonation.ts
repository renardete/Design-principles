import { DeliverDonationTemplate } from "./DeliverDonationTemplate";

export class TruckDeliverDonation extends DeliverDonationTemplate{
  constructor(){super();}
  transport(donation: string): string {
    return donation + '- truck'
  }

}