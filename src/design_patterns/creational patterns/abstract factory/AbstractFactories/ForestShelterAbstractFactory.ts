import { ShelterAbstractFactory } from "./ShelterAbstractFactory";
import { IDrinkFountain } from "../Products/IDrinkFountain";
import { IFeeder } from "../Products/IFeeder";
import { IHomeCubicles } from "../Products/IHomeCubicles";
import { ForestDrinkFountain } from "../Products/ForestProducts/ForestDrinkFountain";
import { ForestFeeder } from "../Products/ForestProducts/ForestFeeder";
import { ForestHomeCubicle } from "../Products/ForestProducts/ForestHomeCubicle";

export class ForestShelterAbstractFactory implements ShelterAbstractFactory{
  createDrinkFountain(): IDrinkFountain {
    return new ForestDrinkFountain();
  }
  createFeeder(): IFeeder {
    return new ForestFeeder();
  }
  createHomeCubicle():IHomeCubicles {
    let guestNames = ['fox', 'bear']
    return new ForestHomeCubicle(guestNames);
  }

}
