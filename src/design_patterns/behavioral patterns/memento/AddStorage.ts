import { Storage } from "./Storage";
import { StorageSnapshot } from "./StorageSnapshot";

export class AddStorage{
  storage: Storage;
  history: StorageSnapshot[];
  constructor(storage: Storage){
    this.storage = storage;
    this.history = []
  }

  addStorage(newItem: string){
    const actualItem = this.storage.save();
    this.history.push(actualItem);
    this.storage.setState(newItem);
  }

  undo():void{
    this.history.pop()?.restore();
  }
}