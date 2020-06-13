export class DonationKit implements kit{
    name: String;

    constructor (){
        this.name = "Donation kit"
    }

    thankKit(): String {
       return `Thanks for this awesome ${this.name}`
    }

}