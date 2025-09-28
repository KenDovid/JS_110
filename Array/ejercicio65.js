const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 65: Array Invertido

let numeros = [10, 20, 30, 40, 50];
let invertido = [];

for (let i = numeros.length - 1; i >= 0; i--) {
    invertido.push(numeros[i]);
}

console.log("Array invertido: " + invertido);
