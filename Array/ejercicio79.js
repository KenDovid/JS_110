const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 79: Rotar Matriz 90°

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let n = matriz.length;
let rotada = [];

for (let i = 0; i < n; i++) {
    rotada[i] = [];
    for (let j = 0; j < n; j++) {
        rotada[i][j] = matriz[n - j - 1][i];
    }
}

console.log("Matriz rotada 90°:");
console.log(rotada);
