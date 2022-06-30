import BikeTransport from "./transport/BikeTransport";
import CarTransport from "./transport/carTransport";
import MotorcycleTransport from "./transport/motorcycleTransport";
import { Transport } from "./transport/Transport";

declare var process;

let transport : Transport;

if(process.argv.includes("uber")){
    transport = new CarTransport();
}else if (process.argv.includes("log")){
    transport = new MotorcycleTransport();
}else if (process.argv.includes("uhul")){
    transport = new BikeTransport();
}else {
    console.error("Selecione um tipo de transporte!!!");
}

if(transport!){
    transport.startTransport();
}