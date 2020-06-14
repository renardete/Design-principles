export interface IAnimalPrototype {
  private name: String;
  age: Number;

  clone(): IAnimalPrototype;
}