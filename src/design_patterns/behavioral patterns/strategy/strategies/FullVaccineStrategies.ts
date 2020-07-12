import { IMedicationStrategies } from "./IMedicationStrategies";

export class FullVaccineStrategies implements IMedicationStrategies{
  execute(data: string): string {
    return data.trim() + 'vaccinated'
  }
}