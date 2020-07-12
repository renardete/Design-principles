import { DeliverDonationTemplate } from "./DeliverDonationTemplate";

export class  AirDeliverDonation extends DeliverDonationTemplate{
  constructor(){super();}
  transport(donation: string): string{
    return donation + '- fly'
  }
}