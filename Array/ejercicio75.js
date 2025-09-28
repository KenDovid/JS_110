const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 75: Map de Array

let numeros = [1, 2, 3, 4, 5];
let cuadrados = [];

for (let i = 0; i < numeros.length; i++) {
    cuadrados.push(numeros[i] * numeros[i]);
}

console.log("Números al cuadrado: " + cuadrados);
