const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 31: Calculadora de Impuestos

let ingreso = Number(prompt("Ingrese su ingreso anual: "));
let impuesto;

switch (true) {
    case (ingreso <= 10000):
        impuesto = ingreso * 0.05;
        break;
    case (ingreso <= 20000):
        impuesto = ingreso * 0.10;
        break;
    case (ingreso <= 50000):
        impuesto = ingreso * 0.15;
        break;
    default:
        impuesto = ingreso * 0.20;
}

console.log("El impuesto a pagar es: " + impuesto);
