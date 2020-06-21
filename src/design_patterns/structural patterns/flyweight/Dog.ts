import { DogRace } from "./DogRace";

export class Dog {
  name:string;
  race: DogRace;

  constructor(name: string, race: DogRace){
    this.name = name;
    this.race = race;
  }
}