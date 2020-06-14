import {Animal} from './Animal'

describe('Prototype test', () => {

  let expectedName: String = "Doggy";
  let expectedAge: Number = 3;

  let originalAnimal: Animal;
  let cloneAnimal: Animal;

  beforeAll(() => {
    originalAnimal = new Animal(expectedName, expectedAge)
    cloneAnimal = originalAnimal.clone();
  })

  test(`clone animal should have name: ${expectedName}`, () => {
    expect(cloneAnimal.name).toEqual(expectedName);
  })

  test(`cloned animal should have age: ${expectedAge}`, () => {
    expect(cloneAnimal.age).toEqual(expectedAge)
  })
})