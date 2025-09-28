const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 35: Sistema de Nómina

let contrato = prompt("Ingrese el tipo de contrato (planta, temporal, practicas): ");
let horas = Number(prompt("Ingrese las horas trabajadas: "));
let pago;

switch (contrato) {
    case "planta":
        pago = horas * 20000;
        break;
    case "temporal":
        pago = horas * 15000;
        break;
    case "practicas":
        pago = horas * 10000;
        break;
    default:
        console.log("Tipo de contrato no válido.");
        pago = null;
}

console.log("El pago total es: " + pago);
