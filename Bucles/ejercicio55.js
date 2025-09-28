const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 55: Máximo y Mínimo

let numeros = [12, 45, 7, 23, 56];
let max = numeros[0];
let min = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
        max = numeros[i];
    }
    if (numeros[i] < min) {
        min = numeros[i];
    }
}

console.log("El máximo es: " + max);
console.log("El mínimo es: " + min);
