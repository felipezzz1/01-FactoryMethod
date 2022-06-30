import IVehicle from "./interface/IVehicle";

export default class Bike implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: Rota iniciada!");
    }
    getCargo(): void {
       console.log("Bicicleta: Encomenda retirada!");
    }
    
}