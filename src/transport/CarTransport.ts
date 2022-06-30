import { Transport } from "./Transport";
import Car from "./vehicles/car";
import IVehicle from "./vehicles/interface/IVehicle";

export default class CarTransport extends Transport{

    protected createTransport(): IVehicle {
        return new Car();
    }
    
}