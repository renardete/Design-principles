import { IAdoptCommand } from "./IAdoptCommand";

export class StreetAdoptCommand implements IAdoptCommand{
  execute(): string {
    return "pick animal from street";
  }
}