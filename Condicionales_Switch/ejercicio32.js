const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 32: Sistema de Transporte

let medio = prompt("Ingrese el medio de transporte (bus, taxi, tren): ");
let distancia = Number(prompt("Ingrese la distancia en km: "));
let tarifa;

switch (medio) {
    case "bus":
        tarifa = distancia * 0.5;
        break;
    case "taxi":
        tarifa = distancia * 2;
        break;
    case "tren":
        tarifa = distancia * 1;
        break;
    default:
        console.log("Medio de transporte no válido.");
        tarifa = 0;
}

console.log("La tarifa a pagar es: " + tarifa);
