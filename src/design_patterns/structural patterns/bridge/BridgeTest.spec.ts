import {Shelter} from './abstraction/Shelter'
import { IAnimal } from './implementation/IAnimal';
import {Dog} from './implementation/Dog'

describe('Bridge pattern should', () => {
  let expectedInitialEnergy = 1;
  let expectedIntialHydration = 1;
  let expectedFinalEnergy = 4;
  let expectedFinalHydration = 2;

  let shelter: Shelter;
  let dog: IAnimal;

  beforeAll(() => {
    dog = new Dog();
    shelter = new Shelter(dog);
  })

  test('Dog should have 1 energy and hydration', () =>{
    expect(dog.energy).toEqual(expectedInitialEnergy)
    expect(dog.hydration).toEqual(expectedIntialHydration)
  })

  test('Dog should have energy and hydration after feed, drink and play', () => {
    shelter.feedAnimal()
    shelter.hydrateAnimal()
    shelter.playAnimal()

    expect(dog.energy).toEqual(expectedFinalEnergy)
    expect(dog.hydration).toEqual(expectedFinalHydration)
  })

})