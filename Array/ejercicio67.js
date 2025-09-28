const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 67: Diagonal Principal

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let suma = 0;
for (let i = 0; i < matriz.length; i++) {
    suma = suma + matriz[i][i];
}

console.log("La suma de la diagonal principal es: " + suma);
