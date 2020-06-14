import { Shelter } from "./Shelter";

export class ShelterBuilder{
  private area: Number;
  private numberBathrooms: Number;
  private name: String;
  private maxAnimalCapacity: Number;

  constructor(){
    this.area = -1;
    this.numberBathrooms = -1;
    this.name = "";
    this.maxAnimalCapacity = 0;
  }

  public setNumberBathrooms(numberBathrooms: Number): ShelterBuilder {
    this.numberBathrooms = numberBathrooms
    return this;
  }

  public setName(name: string): ShelterBuilder{
    this.name = name;
    return this;
  }

  public setMaxAnimalCapacity(maxAnimalCapacity: Number): ShelterBuilder {
    this.maxAnimalCapacity = maxAnimalCapacity;
    return this;
  }

  public setArea(area: Number): ShelterBuilder{
    this.area = area;
    return this;
  }

  public build(): Shelter{
    return new Shelter(this.area, this.numberBathrooms, this.name, this.maxAnimalCapacity);
  }
}