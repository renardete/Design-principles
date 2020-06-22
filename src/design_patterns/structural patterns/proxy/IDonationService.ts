import { Donation } from "./Donation";

export interface IDonationService {
  donate(donation: Donation): void;
}