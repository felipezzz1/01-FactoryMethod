import { Transport } from "./Transport";
import Bike from "./vehicles/bike";
import IVehicle from "./vehicles/interface/IVehicle";

export default class BikeTransport extends Transport{

    protected createTransport(): IVehicle {
        return new Bike();
    }
    
}