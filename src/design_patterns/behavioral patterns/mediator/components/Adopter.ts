import { Component } from "./IComponent";
import { ShelterMediator } from "../ShelterMediator";

export class Adopter extends Component{
  name: string
  constructor(name: string, mediator: ShelterMediator){
    super(mediator);
    this.name=name;
  }

  register(){
    this.mediator.notify(this, 'register');
  }
}