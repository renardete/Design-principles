import { AidKit } from "../products/AidKit";
import {KitFactory} from "./KitFactory"

export class AidKitFactory extends KitFactory {
    
    constructor() {
        super();
    }

    public createKit(): kit {
        return new AidKit();
    }
}