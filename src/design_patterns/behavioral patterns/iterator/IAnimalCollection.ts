import { IAnimalIterator } from "./IAnimalIterator";

export interface IAnimalCollection{
  getIterator(): IAnimalIterator;
}