import { AidKit } from "../products/AidKit";

export class AidKitFactory extends KitFactory {
    
    constructor() {
        super();
    }

    public createKit(): kit {
        return new AidKit();
    }
}