import {ShelterBuilder} from './ShelterBuilder'
import {Shelter} from './Shelter'

describe('Builder should', () => {

  let expectedShelterArea = 50;
  let expectedShelterNumberBathroom = 2;
  let expectedShelterName = "Shelter Name";
  let expectedShelterMaxAnimalCapacity = 5

  let shelterBuilder : ShelterBuilder = new ShelterBuilder();
  let shelter : Shelter;

  beforeAll(() => {
    shelter = shelterBuilder
                    .setArea(expectedShelterArea)
                    .setMaxAnimalCapacity(expectedShelterMaxAnimalCapacity)
                    .setNumberBathrooms(expectedShelterNumberBathroom)
                    .setName(expectedShelterName)
                    .build()
  })


  test(`build shelter with area: ${expectedShelterArea}`, () => {
    expect(shelter.area).toEqual(expectedShelterArea);
  })

  test(`build shelter with numberBathrooms: ${expectedShelterNumberBathroom}`, () => {
    expect(shelter.numberBathrooms).toEqual(expectedShelterNumberBathroom);
  })

  test(`build shelter with name: ${expectedShelterName}`, () => {
    expect(shelter.name).toEqual(expectedShelterName);
  })

  test(`build shelter with maxAnimalCapacity: ${expectedShelterMaxAnimalCapacity}`, () => {
    expect(shelter.maxAnimalCapacity).toEqual(expectedShelterMaxAnimalCapacity);
  })
})