import { IShelterMediator } from "../IShelterMediator";
import { ShelterMediator } from "../ShelterMediator";

export class Component{
  mediator: IShelterMediator;
  constructor(mediator: ShelterMediator){
    this.mediator=mediator;
  }
}