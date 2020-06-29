import { RequestDonation } from "./RequestDonation";

export interface IHandler {
  setNext(handler: IHandler): void;
  handle(request: RequestDonation): void;
}