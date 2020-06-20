import {ShelterFacade} from './ShelterFacade'

describe('Facade pattern should', () => {
  const adopterName = 'Juan';
  const dogName = 'Pepe';

  let shelterFacade: ShelterFacade;

  beforeAll(() => {
    shelterFacade = new ShelterFacade();
    shelterFacade.adoptAnimal(adopterName, dogName);
  })

  test('adoptee should have dog name', () => {
    expect(shelterFacade.shelter?.adopter?.adoptee?.name).toEqual(dogName)
  })

  test('adopter should have dog name', () => {
    expect(shelterFacade.shelter?.adopter?.name).toEqual(adopterName)
  })
})