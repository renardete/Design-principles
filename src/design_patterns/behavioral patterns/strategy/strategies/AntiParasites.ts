import { IMedicationStrategies } from "./IMedicationStrategies";

export class AntiParasites implements IMedicationStrategies{
  execute(data: string): string {
    return data + 'no-parasites'
  }
}