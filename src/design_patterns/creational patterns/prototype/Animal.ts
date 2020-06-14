import { IAnimalPrototype } from "./IPrototype";

export class Animal implements IAnimalPrototype{
  name: String;
  age: Number;

  constructor(name: String, age: Number){
    this.name = name;
    this.age = age;
  }

  clone(): IAnimalPrototype {
    // This is shallow cloning. For Deep cloning a circular reference has to be manage
    // Also could use lodash.deepClone as a shortcut.
    return Object.assign({}, this);
  }

}