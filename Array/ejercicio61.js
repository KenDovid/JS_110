const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 61: Suma de Elementos

let numeros = [2, 4, 6, 8, 10];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma de los elementos es: " + suma);
