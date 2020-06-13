import { ShelterAbstractFactory } from "./ShelterAbstractFactory";
import { IDrinkFountain } from "../Products/IDrinkFountain";
import { IFeeder } from "../Products/IFeeder";
import { IHomeCubicles } from "../Products/IHomeCubicles";
import { UrbanDrinkFountain } from "../Products/UrbanProducts/UrbanDrinkFountain";
import { UrbanFeeder } from "../Products/UrbanProducts/UrbanFeeder";
import { UrbanHomeCubicle } from "../Products/UrbanProducts/UrbanHomeCubicle";

export class UrbanShelterAbstractFactory implements ShelterAbstractFactory{
  createDrinkFountain(): IDrinkFountain {
    return new UrbanDrinkFountain();
  }
  createFeeder(): IFeeder {
    return new UrbanFeeder();
  }
  createHomeCubicle():IHomeCubicles {
    let guestNames = ['cat', 'dog']
    return new UrbanHomeCubicle(guestNames);
  }

}