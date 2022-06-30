import IVehicle from "./interface/IVehicle";

export default class Car implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Rota iniciada!");
    }
    getCargo(): void {
       console.log("Carro: Passageiros embarcados!");
    }
    
}