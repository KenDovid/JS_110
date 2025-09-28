const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 51: Suma de Matrices

let matriz1 = [
    [1, 2],
    [3, 4]
];

let matriz2 = [
    [5, 6],
    [7, 8]
];

let resultado = [];

for (let i = 0; i < matriz1.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz1[i].length; j++) {
        resultado[i][j] = matriz1[i][j] + matriz2[i][j];
    }
}

console.log("La suma de las matrices es: ");
console.log(resultado);
