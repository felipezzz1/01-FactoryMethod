import IVehicle from "./interface/IVehicle";

export default class Motorcycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Rota iniciada!");
    }
    getCargo(): void {
        console.log("Moto : Encomenda a caminho!");
    }

}