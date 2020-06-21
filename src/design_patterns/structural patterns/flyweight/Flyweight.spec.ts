import {Dog} from './Dog'
import { DogRace } from './DogRace';


describe('Flyweigth pattern should', () => {
  const expectedRaceName = 'Golden'

  let dogs: Array<Dog>;
  let numDogs: number = 10
  let dogRace: DogRace;
  beforeAll(() => {
    dogs = []
    dogRace = new DogRace(expectedRaceName)
    for(let dogIndex=0; dogIndex <= numDogs; dogIndex++){
      dogs.push(new Dog(`dog-${dogIndex}`, dogRace))
    }
  })

  test('all dogs should have the same race', () => {
    dogs.forEach((dog) => {
      expect(dog.race.name).toEqual(expectedRaceName)
    })
  })
})