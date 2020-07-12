import {IMedicationStrategies} from './strategies/IMedicationStrategies'

export class MedicationContext {
  strategy: IMedicationStrategies;
  constructor(strategy: IMedicationStrategies){
    this.strategy = strategy;
  }

  medicate(data: string): string{
    return this.strategy.execute(data);
  }

  changeStrategy(newStrategy: IMedicationStrategies){
    this.strategy = newStrategy;
  }
}