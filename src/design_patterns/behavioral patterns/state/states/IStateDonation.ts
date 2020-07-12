import { Donation } from "../Donation";

export interface IStateDonation {
  stage?: string;
  donation: Donation;
  processDonation():void;
}