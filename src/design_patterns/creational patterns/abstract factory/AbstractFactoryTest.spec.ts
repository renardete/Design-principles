import {ForestShelterAbstractFactory} from './AbstractFactories/ForestShelterAbstractFactory'
import {UrbanShelterAbstractFactory} from './AbstractFactories/UrbanShelterAbstractFactory'

describe('Forest shelter Abstract factory', () => {

  let forestAbstractFactory = new ForestShelterAbstractFactory();

  let expectedDrinkFountainCapacity = 100
  let expectedMaxAnimalFeeder = 6
  let expectedHomeCubicleGuest = ['fox', 'bear']

  test(`should have drink fountain capacity: ${expectedDrinkFountainCapacity}`, () => {
    let forestDrinkFountain = forestAbstractFactory.createDrinkFountain();
    let fountainCapacity = forestDrinkFountain.capacity
    expect(fountainCapacity).toEqual(expectedDrinkFountainCapacity)
  })

  test(`should have max animals of feeder: ${expectedMaxAnimalFeeder}`, () => {
    let forestFeeder = forestAbstractFactory.createFeeder();
    let maxAnimalFeeder = forestFeeder.maxAnimalFeed;
    expect(maxAnimalFeeder).toEqual(expectedMaxAnimalFeeder);
  })

  test(`should have home cubicle guest: ${expectedHomeCubicleGuest.toString()}`, () => {
    let forestCubicleGuest = forestAbstractFactory.createHomeCubicle();
    let homeCubicleGuest = forestCubicleGuest.guests
    expect(homeCubicleGuest).toEqual(expect.arrayContaining(expectedHomeCubicleGuest))
  })
})

describe('Urban shelter Abstract factory', () => {

  let urbantAbstractFactory = new UrbanShelterAbstractFactory();

  let expectedDrinkFountainCapacity = 50
  let expectedMaxAnimalFeeder = 2
  let expectedHomeCubicleGuest = ['cat','dog']

  test(`should have drink fountain capacity: ${expectedDrinkFountainCapacity}`, () => {
    let urbanDrinkFountain = urbantAbstractFactory.createDrinkFountain();
    let fountainCapacity = urbanDrinkFountain.capacity
    expect(fountainCapacity).toEqual(expectedDrinkFountainCapacity)
  })

  test(`should have max animals of feeder: ${expectedMaxAnimalFeeder}`, () => {
    let urbanFeeder = urbantAbstractFactory.createFeeder();
    let maxAnimalFeeder = urbanFeeder.maxAnimalFeed;
    expect(maxAnimalFeeder).toEqual(expectedMaxAnimalFeeder);
  })

  test(`should have home cubicle guest: ${expectedHomeCubicleGuest.toString()}`, () => {
    let urbanCubicleGuest = urbantAbstractFactory.createHomeCubicle();
    let homeCubicleGuest = urbanCubicleGuest.guests
    expect(homeCubicleGuest).toEqual(expect.arrayContaining(expectedHomeCubicleGuest))
  })
})