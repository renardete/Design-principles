import {MedicationContext} from './MedicationContext'
import {AntiParasites} from './strategies/AntiParasites'
import {FullVaccineStrategies} from './strategies/FullVaccineStrategies'

describe('Strategy pattern should', () => {

  let antiParasiteStrategy: AntiParasites;
  let fullVaccineStrategy: FullVaccineStrategies;
  let medicationContext: MedicationContext;

  beforeAll(() => {
    antiParasiteStrategy = new AntiParasites()
    fullVaccineStrategy = new FullVaccineStrategies();
    medicationContext = new MedicationContext(antiParasiteStrategy)
  })

  test('medication context should use anti parasite strategy', () => {
    let antiParasited = medicationContext.medicate("")
    expect(antiParasited).toEqual("no-parasites")
  })

  
  test('medication context should use anti parasite strategy', () => {
    medicationContext.changeStrategy(fullVaccineStrategy)
    let antiParasited = medicationContext.medicate("dog ")
    expect(antiParasited).toEqual("dogvaccinated")
  })
})