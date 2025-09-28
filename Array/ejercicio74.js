const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 74: Filtrar Array

let numeros = [10, 15, 20, 25, 30];
let resultado = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 20) {
        resultado.push(numeros[i]);
    }
}

console.log("Números mayores a 20: " + resultado);
