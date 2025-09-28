const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 38: Sistema de Puntos

let compra = Number(prompt("Ingrese el valor de la compra: "));
let puntos;

switch (true) {
    case (compra >= 100000):
        puntos = 50;
        break;
    case (compra >= 50000):
        puntos = 20;
        break;
    case (compra >= 20000):
        puntos = 10;
        break;
    default:
        puntos = 0;
}

console.log("Usted ha acumulado " + puntos + " puntos.");
