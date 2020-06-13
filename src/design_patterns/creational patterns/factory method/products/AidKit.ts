export class AidKit implements kit{
    name: String;

    constructor (){
        this.name = "Aid kit"
    }

    thankKit(): String {
       return `Thanks for this awesome ${this.name}`
    }

}