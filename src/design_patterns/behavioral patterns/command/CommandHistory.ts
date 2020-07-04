import { IAdoptCommand } from "./comands/IAdoptCommand";

export class CommandHistory {
  history: IAdoptCommand[];
  constructor(){
    this.history = [];
  }

  addCommand(command: IAdoptCommand){
    this.history.push(command);
  }
}