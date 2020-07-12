import { Cat } from './Cat'
import { Dog } from './Dog'
import { AnimalVisitor } from './AnimalVisitor'

describe('Visitor pattern should', () => {
  let dog: Dog
  let cat: Cat
  let animalVisitor: AnimalVisitor

  beforeAll(() => {
    dog = new Dog(10);
    cat = new Cat(5)
    animalVisitor = new AnimalVisitor();
  })

  test('animal visitor should export dog hunger', async () => {
    const hungerLevel = await dog.hungryLevel(animalVisitor);
    expect(hungerLevel).toEqual(`dog hunger: 10`)
  })

  test('animal visitor should export cat hunger', async () => {
    const hungerLevel = await cat.hungryLevel(animalVisitor);
    expect(hungerLevel).toEqual(`cat hunger: 5`)
  })
})