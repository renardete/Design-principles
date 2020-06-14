
export class ShelterManager{
  private static instance: ShelterManager;

  name: String
  private constructor(name: String){
    this.name = name;
  }

  public static getInstance(name:String): ShelterManager {
    if(!ShelterManager.instance){
      ShelterManager.instance = new ShelterManager(name);
    }

    return ShelterManager.instance
  }
  

}