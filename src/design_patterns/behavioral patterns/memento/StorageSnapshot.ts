import { Storage } from "./Storage";

export class StorageSnapshot {
  item: string;
  originator: Storage;
  constructor(originator: Storage,item: string) {
    this.item = item;
    this.originator = originator;
  }

  restore(){
    this.originator.setState(this.item)
  }
}