const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 76: Reduce de Array

let numeros = [5, 10, 15, 20];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

console.log("La suma de los elementos es: " + suma);
