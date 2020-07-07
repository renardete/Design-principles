import { ISubscriber } from "./ISubscriber";

export class DonationCenterPublisher {
  subscribers: ISubscriber[];
  lastDonation: string;
  constructor(){
    this.subscribers=[];
    this.lastDonation = ""
  }

  subscribe(subscriber: ISubscriber){
    this.subscribers.push(subscriber)
  }

  notifySubscribers(){
    this.subscribers.forEach((subscriber) => {
      subscriber.update(this.lastDonation)
    })
  }

  updateLastDonation(lastDonation: string){
    this.lastDonation = lastDonation;
    this.notifySubscribers()
  }
}