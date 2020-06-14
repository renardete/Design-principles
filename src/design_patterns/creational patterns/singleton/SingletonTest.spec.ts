import {ShelterManager} from './ShelterManager'


describe('Single should', () => {

  let shelterSingleton: ShelterManager;
  let impostorSingleton: ShelterManager;
  const expectedName = 'Manager singleton';
  const nonExpectedName = 'doggy impostor'

  beforeAll(() => {
    shelterSingleton = ShelterManager.getInstance(expectedName);
    impostorSingleton = ShelterManager.getInstance(nonExpectedName)
  })

  test(`ShelterSingleton should have name: ${expectedName}`, () => {
    expect(shelterSingleton.name).toEqual(expectedName)
    expect(shelterSingleton.name).not.toEqual(nonExpectedName)
  })

  test(`impostorSingleton should have name: ${expectedName}`, () => {
    expect(impostorSingleton.name).toEqual(expectedName)
    expect(impostorSingleton.name).not.toEqual(nonExpectedName)
  })

  test('ShelterSingleton should be equal to impostorSingleton', () => {
    expect(shelterSingleton).toEqual(impostorSingleton);
  })

})