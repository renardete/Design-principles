import { IDrinkFountain } from "../Products/IDrinkFountain";
import { IFeeder } from "../Products/IFeeder";
import { IHomeCubicles } from "../Products/IHomeCubicles";

export interface ShelterAbstractFactory{
  createDrinkFountain():IDrinkFountain;
  createFeeder():IFeeder;
  createHomeCubicle():IHomeCubicles;
}