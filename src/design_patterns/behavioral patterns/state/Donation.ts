import { IStateDonation } from "./states/IStateDonation";

export class Donation {
  state?: IStateDonation;
  processDonation(){
    this.state?.processDonation();
  }
  changeState(newState: IStateDonation){
    this.state = newState;
  }
}