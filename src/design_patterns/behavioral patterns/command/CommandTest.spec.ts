import {Adopter} from './Adopter'
import {ShelterAdoptCommand} from './comands/ShelterAdoptCommand'
import {StreetAdoptCommand} from './comands/StreetAdoptCommand'

describe('Command pattern should', () => {
  let adopter: Adopter
  const expectedShelterResponse = "adopt from shelter";
  const expectedStreetResponse = "pick animal from street";

  beforeAll(() => {
    adopter = new Adopter();
  })

  test('execute shelter command', () => {
    const response = adopter.adopt(new ShelterAdoptCommand);
    expect(response).toEqual(expectedShelterResponse);
    expect(adopter.commandHistory.history.length).toEqual(1)
  })

  test('execute street command', () => {
    const response = adopter.adopt(new StreetAdoptCommand);
    expect(response).toEqual(expectedStreetResponse);
    expect(adopter.commandHistory.history.length).toEqual(2)
  })
})