import { Component } from "./IComponent";
import { ShelterMediator } from "../ShelterMediator";

export class Animal extends Component{
  adopted: boolean;
  constructor(mediator: ShelterMediator){
    super(mediator);
    this.adopted=false;
  }

  getAdopted(){
    this.mediator.notify(this, 'getAdopted');
  }
}