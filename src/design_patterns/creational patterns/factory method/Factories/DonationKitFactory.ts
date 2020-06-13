import { DonationKit } from "../products/DonationKit";
import {KitFactory} from './KitFactory'

export class DonationKitFactory extends KitFactory {
    
    constructor() {
        super();
    }

    public createKit(): kit {
        return new DonationKit();
    }
}