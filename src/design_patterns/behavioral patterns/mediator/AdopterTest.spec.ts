import {ShelterMediator} from './ShelterMediator'
import {Animal} from './components/Animal'
import {Adopter} from './components/Adopter'

describe('Adopter pattern should', () => {

  let mediator: ShelterMediator;
  let animal: Animal;
  let adopter: Adopter;

  beforeAll(() => {
    mediator = new ShelterMediator();
    animal = new Animal(mediator);
    adopter = new Adopter('Juan', mediator);
  })

  test('Adopt animal should decrease animal count', () => {
    animal.getAdopted();
    expect(mediator.countAnimals).toEqual(9);
  })

  test('Register adopter should decrease animal count', () => {
    adopter.register()
    expect(mediator.adopters.length).toEqual(1);
  })
})