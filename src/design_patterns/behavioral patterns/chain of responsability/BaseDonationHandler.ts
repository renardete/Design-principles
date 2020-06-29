import { IHandler } from "./IHandler";
import { RequestDonation } from "./RequestDonation";

export abstract class BaseDonationHandler implements IHandler{
  nextHandler?: IHandler;

  setNext(handler: IHandler): void {
    this.nextHandler = handler; 
  }
  abstract handle(request: RequestDonation): void;

}