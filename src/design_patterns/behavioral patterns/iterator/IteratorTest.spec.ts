import {AnimalCollection} from './AnimalCollection'

describe('iterator pattern should', () => {

  let animalCollection: AnimalCollection

  beforeAll(() => {
    animalCollection = new AnimalCollection();
    animalCollection.addAnimal('dog');
    animalCollection.addAnimal('cat');
    animalCollection.addAnimal('mamut');
  })

  test('iterator pattern should return next animal', () => {
    let iterator = animalCollection.getIterator();
    expect(iterator.getNext()).toEqual('dog')
    expect(iterator.hasMore()).toBeTruthy()

    expect(iterator.getNext()).toEqual('cat')
    expect(iterator.hasMore()).toBeTruthy()

    expect(iterator.getNext()).toEqual('mamut')
    expect(iterator.hasMore()).toBeFalsy();

    expect(iterator.getNext()).toEqual(undefined)
    expect(iterator.hasMore()).toBeTruthy()
  })
})