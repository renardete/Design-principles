import { DonationKit } from "../products/DonationKit";

export class DonationKitFactory extends KitFactory {
    
    constructor() {
        super();
    }

    public createKit(): kit {
        return new DonationKit();
    }
}