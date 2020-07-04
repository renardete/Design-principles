import { IAdoptCommand } from "./IAdoptCommand";

export class ShelterAdoptCommand implements IAdoptCommand{
  execute(): string {
    return "adopt from shelter";
  }
}