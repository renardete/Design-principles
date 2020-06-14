export class Shelter {
  area: Number;
  numberBathrooms: Number;
  name: String;
  maxAnimalCapacity: Number;

  constructor(area: Number, numberBathrooms: Number, name: String, maxAnimalCapacity: Number){
    this.area = area;
    this.numberBathrooms = numberBathrooms;
    this.name = name;
    this.maxAnimalCapacity = maxAnimalCapacity;
  }
}