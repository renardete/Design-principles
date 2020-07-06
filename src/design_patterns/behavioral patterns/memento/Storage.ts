import { StorageSnapshot } from "./StorageSnapshot";

export class Storage {
  item: string;
  constructor(item: string) {
    this.item = item;
  }

  save(): StorageSnapshot {
    return new StorageSnapshot(this, this.item);
  }

  setState(item: string){
    this.item = item;
  }
}