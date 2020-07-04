import { IAdoptCommand } from "./comands/IAdoptCommand";
import { CommandHistory } from "./CommandHistory";

export class Adopter {
  commandHistory: CommandHistory;
  constructor(){
    this.commandHistory =  new CommandHistory();
  }

  adopt(command: IAdoptCommand): string{
    let response = command.execute()
    this.commandHistory.addCommand(command);
    return response;
  }
}